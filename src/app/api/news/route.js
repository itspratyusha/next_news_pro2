export async function GET() {
  const response = await fetch(
    `https://gnews.io/api/v4/top-headlines?lang=en&country=us&max=10&apikey=${process.env.NEXT_PUBLIC_GNEWS_API_KEY}`
  );

  const data = await response.json();

  return Response.json(data);
}