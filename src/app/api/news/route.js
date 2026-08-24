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
  const category = new URL(request.url).searchParams.get("category"); //what catgory frontend asked
 const categoryParams = categories[category] || {};
  const params = new URLSearchParams({ //crate url query frm obj
    "api-key": process.env.GUARDIAN_API_KEY,
    "page-size": "10",
    "order-by": "newest",
    "show-fields": "thumbnail,trailText",
    ...categoryParams, //get info that becomes section:"tech or any categories"
  });

  const response = await fetch(
    `https://content.guardianapis.com/search?${params}`,
    { next: { revalidate: 300 } } //after 300sec get freh news cuz instead of req every time it reuse cached data
  );

  const data = await response.json();

  const articles = data.response.results
    .filter((article) => article.fields?.thumbnail)
    .map((article) => ({
      id: article.id,
      title: article.webTitle,
      description: article.fields?.trailText || "",
      url: article.webUrl,
      image: article.fields.thumbnail,
      source: "The Guardian",
      publishedAt: article.webPublicationDate,
    }));

  return Response.json({ articles }); //send processed data back to frontend
}