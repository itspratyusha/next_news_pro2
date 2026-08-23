const categories = {
  business: { section: "business" },
  politics: { section: "politics" },
  culture: { section: "culture" },
  sports: { section: "sport" },
  science: { section: "science" },
  technology: { section: "technology" },
  health: { tag: "lifeandstyle/health-and-wellbeing" },
};

export async function GET(request) {
  const requestedCategory = new URL(request.url).searchParams.get("category");
  const category = categories[requestedCategory] || {};
  const params = new URLSearchParams({
    "api-key": process.env.GUARDIAN_API_KEY || "test",
    "page-size": "20",
    "order-by": "newest",
    "show-fields": "thumbnail,trailText",
    ...category,
  });

  let response = await fetch(
    `https://content.guardianapis.com/search?${params}`,
    { next: { revalidate: 300 } }
  );

  // The public test key can briefly rate-limit consecutive category requests.
  if (response.status === 429) {
    await new Promise((resolve) => setTimeout(resolve, 1100));
    response = await fetch(
      `https://content.guardianapis.com/search?${params}`,
      { next: { revalidate: 300 } }
    );
  }

  if (!response.ok) {
    return Response.json(
      {
        error:
          response.status === 429
            ? "The news provider is busy. Please try again shortly."
            : "Unable to load news articles.",
        articles: [],
      },
      { status: 502 }
    );
  }

  const data = await response.json();
  const articles = data.response.results
    .filter((article) => article.fields?.thumbnail)
    .slice(0, 10)
    .map((article) => ({
      id: article.id,
      title: article.webTitle,
      description: article.fields.trailText?.replace(/<[^>]*>/g, "") || "",
      url: article.webUrl,
      image: article.fields.thumbnail,
      source: { name: "The Guardian" },
      publishedAt: article.webPublicationDate,
    }));

  return Response.json({ articles });
}
