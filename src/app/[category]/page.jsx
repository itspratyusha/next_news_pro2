"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const topics = {
  business: "Business",
  politics: "Politics",
  sports: "Sports",
  science: "Science",
  health: "Health",
};

export default function CategoryPage() {
  const { category } = useParams();

  const [articles, setArticles] = useState([]);

  const topic = topics[category];

  useEffect(() => {
    async function getNews() {
      const response = await fetch(`/api/news?category=${category}`);
      const data = await response.json();

      setArticles(data.articles);
    }

    getNews();
  }, [category]);

  const [featured, ...latest] = articles;

  return (
    <main className="container py-5">

      <h1>{topic}</h1>

      {featured && (
        <article>
          <img
            src={featured.image}
            alt={featured.title}
          />

          <h2>{featured.title}</h2>
          <p>{featured.description}</p>
          <p>{featured.source}</p>

          <a href={featured.url} target="_blank">
            Read full story
          </a>
        </article>
      )}

      <div className="row">
        {latest.map((article) => (
          <article className="col-md-4" key={article.id}>

            <img
              src={article.image}
              alt={article.title}
            />

            <p>{article.source}</p>

            <h2>{article.title}</h2>

            <p>{article.description}</p>

            <a href={article.url} target="_blank">
              Read story
            </a>

          </article>
        ))}
      </div>

    </main>
  );
}