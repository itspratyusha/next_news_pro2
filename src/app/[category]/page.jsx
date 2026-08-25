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
        <article >
          <div className="">
            <img
            src={featured.image}
            alt={featured.title}
          />
          
          <div>
          <h2>{featured.title}</h2>
          <p>{featured.description}</p>
          <p>{featured.source}</p>

          <a href={featured.url} target="_blank">
            Read full story 
          </a>
          </div>
          </div>
        </article>
      )}

      <div className="row g-3">
        {latest.map((article) => (
          <article className="col-md-4 col-lg-4 " key={article.id}>

            <img
              src={article.image}
              alt={article.title}
              className="img-fluid"
            />
            

            <h2 className="py-3">{article.title}</h2>

            <p>{article.description}</p>
<p>{article.source}</p>
            <a href={article.url} target="_blank">
              Read story
            </a>

          </article>
        ))}
      </div>

    </main>
  );
}