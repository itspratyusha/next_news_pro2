"use client";

import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

function NewsPage() {
  const [news, setNews] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [playing, setPlaying] = useState(null);
  const [weeklyPostIndex, setWeeklyPostIndex] = useState(0);

  const videos = ["sC-HyWBgleM", "AvFMrroRkRk", "u3SIKAmPXY4"];

  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "top";

  const categoryNames = {
    top: "Top Stories",
    business: "Business",
    politics: "Politics",
    culture: "Culture",
    sports: "Sports",
    technology: "Science & Tech",
    health: "Health",
  };

  useEffect(() => {
    async function getNews() {
      const response = await fetch(`/api/news?category=${category}`);
      const data = await response.json();

      setNews(data.articles);
      setWeeklyPostIndex(0);
    }

    getNews();
  }, [category]);

  const articlesWithImages = news.filter((article) => article.image);

  const weeklyPost =
    articlesWithImages[weeklyPostIndex] || {};

  useEffect(() => {
    const interval = setInterval(() => {
      setWeeklyPostIndex(
        (index) =>
          (index + 1) % articlesWithImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [articlesWithImages.length, category]);

  return (
    <>
      <section className="py-5">
        <div className="container">

          {/* LEFT SIDE + RIGHT SIDE */}
          <div className="row">

            <div className="left col-lg-8 o-lay">

              {articlesWithImages.slice(0, 1).map((a) => (
                <a
                  className="news-story-link"
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  key={a.url}
                >
                  <img
                    className="lead-image"
                    src={a.image}
                    alt={a.title}
                  />

                  <h2 className="fs-3 mt-2 leng">
                    {a.title}
                  </h2>

                  <p className="leng">
                    {a.description}
                  </p>
                </a>
              ))}

            </div>

            <div className="col-lg-4 d-none d-md-block d-lg-block">

              <h2 className="border-side mb-4">
                Most loved
              </h2>

              {news
                .filter((a) => a.image)
                .slice(2, 7)
                .map((a) => (
                  <a
                    className="sideItem o-lay news-story-link"
                    href={a.url}
                    target="_blank"
                    rel="noreferrer"
                    key={a.url}
                  >
                    <img
                      src={a.image}
                      alt={a.title}
                    />

                    <div>
                      <h4>{a.title}</h4>
                      <p>{a.source.name}</p>
                    </div>
                  </a>
                ))}

            </div>

          </div>

          {/* ALL 3 BOX */}
          <section className="left">

            <div className="row row-cols-lg-3 g-3">

              {news
                .filter((a) => a.image)
                .slice(3, 6)
                .map((a, index) => (

                  <div key={a.url} className="col">

                    <div className="position-relative o-lay">

                      <img
                        src={a.image}
                        className="img-fluid w-100 pict"
                        alt={a.title}
                      />

                      <div className="overlay"></div>

                      <button
                        className="play-btn"
                        onClick={() => {
                          setPlaying(index);
                          setShowVideo(true);
                        }}
                      >
                        <span className="triangle"></span>
                      </button>

                      <div className="position-absolute bottom-0 start-0 m-3 text-white">

                        <a
                          className="news-story-link"
                          href={a.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h2 className="fs-5 mt-2 d-block d-md-none">
                            {a.title.slice(0, 50)}...
                          </h2>

                          <h2 className="fs-5 mt-2 d-none d-md-block">
                            {a.title}
                          </h2>
                        </a>

                      </div>

                    </div>

                  </div>

                ))}

            </div>

          </section>

          {/* CATEGORY TITLE */}
          <section>
            <h6 className="mt-3 mb-3 fw-bold fs-1 border-down">
              {categoryNames[category] || "Top Stories"}
            </h6>
          </section>

          {/* LEFT 1 */}
          <section>

            <div className="row">

              <div className="left col-lg-8 gap-3">

                <div className="row">

                  {news
                    .filter((a) => a.image)
                    .slice(5, 9)
                    .map((a) => (

                      <a
                        className="col-6 col-lg-6 col-md-6 o-lay news-story-link"
                        href={a.url}
                        target="_blank"
                        rel="noreferrer"
                        key={a.url}
                      >

                        <img
                          src={a.image}
                          alt={a.title}
                        />

                        <h2 className="fs-3 mt-2 leng">
                          {a.title}
                        </h2>

                        <p className="leng">
                          {a.description}
                        </p>

                      </a>

                    ))}

                </div>

              </div>

              {/* RIGHT 1 SIDE */}
              <div className="col-lg-4 d-none d-md-block d-lg-block">

                <h2 className="border-side mb-4">
                  Most loved
                </h2>

                {news
                  .filter((a) => a.image)
                  .slice(2, 5)
                  .map((a) => (

                    <a
                      className="sideItem o-lay news-story-link"
                      href={a.url}
                      target="_blank"
                      rel="noreferrer"
                      key={a.url}
                    >

                      <img
                        src={a.image}
                        alt={a.title}
                      />

                      <div>
                        <h4>{a.title}</h4>
                        <p>{a.source.name}</p>
                      </div>

                    </a>

                  ))}

                {/* WEEKLY POST */}
                <div className="box mt-3">

                  <div className="weekly-post-header mb-3">

                    <button
                      className="weekly-post-control"
                      aria-label="Previous weekly post"
                      onClick={() =>
                        setWeeklyPostIndex((index) =>
                          index === 0
                            ? articlesWithImages.length - 1
                            : index - 1
                        )
                      }
                    >
                      <ChevronLeft
                        aria-hidden="true"
                        size={22}
                      />
                    </button>

                    <h2 className="text-black mb-0">
                      Weekly Post
                    </h2>

                    <button
                      className="weekly-post-control"
                      aria-label="Next weekly post"
                      onClick={() =>
                        setWeeklyPostIndex((index) =>
                          index === articlesWithImages.length - 1
                            ? 0
                            : index + 1
                        )
                      }
                    >
                      <ChevronRight
                        aria-hidden="true"
                        size={22}
                      />
                    </button>

                  </div>

                  <a
                    className="news-story-link"
                    href={weeklyPost.url}
                    target="_blank"
                    rel="noreferrer"
                  >

                    <img
                      className="weekly-post-image mb-3"
                      src={weeklyPost.image}
                      alt={weeklyPost.title}
                    />

                    <h5 className="text-black">
                      {weeklyPost.title}
                    </h5>

                    <p className="text-black fw-bold d-none d-md-block d-lg-block">
                      {weeklyPost.source?.name}
                    </p>

                  </a>

                </div>

              </div>

            </div>

          </section>

          {/* AD */}
          <div className="mt-3">

            <img
              className="mb-3 col-12"
              src="https://kiante.wowtheme7.com/wp-content/uploads/2022/02/kiante-ads.png"
              alt=""
            />

          </div>

          {/* BOTTOM SECTION */}
          <section className="mt-3">

            <div className="row">

              {/* LEFT SIDE */}
              <div className="left col-lg-8">

                <div className="row"></div>

                {news
                  .filter((a) => a.image)
                  .slice(7, 8)
                  .map((a) => (

                    <a
                      className="news-story-link"
                      href={a.url}
                      target="_blank"
                      rel="noreferrer"
                      key={a.url}
                    >

                      <img
                        className="h-100"
                        src={a.image}
                        alt={a.title}
                      />

                      <h2 className="fs-3 mt-2">
                        {a.title}
                      </h2>

                      <p>{a.description}</p>

                    </a>

                  ))}

                <div className="row">

                  {news
                    .filter((a) => a.image)
                    .slice(5, 9)
                    .map((a) => (

                      <a
                        className="col-lg-6 o-lay mb-4 news-story-link"
                        href={a.url}
                        target="_blank"
                        rel="noreferrer"
                        key={a.url}
                      >

                        <div className="row">

                          <div className="col-4">

                            <img
                              className="img-fluid rounded h-100 w-100"
                              src={a.image}
                              alt={a.title}
                            />

                          </div>

                          <div className="col-8">

                            <h2 className="fs-5 leng">
                              {a.title}
                            </h2>

                            <div className="d-flex justify-content-between gap-3 mt-3">

                              <strong>
                                {a.source.name}
                              </strong>

                              <span>
                                {new Date(
                                  a.publishedAt
                                ).toDateString()}
                              </span>

                            </div>

                          </div>

                        </div>

                      </a>

                    ))}

                </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="col-4 col-lg-4">

                <div>

                  <h2 className="border-side mb-4">
                    Social Media
                  </h2>

                  <div className="d-flex flex-wrap gap-2">

                    <img
                      className="mb-4"
                      src="https://kiante.wowtheme7.com/wp-content/uploads/2022/03/facebook-icon.svg"
                      alt="Social Media"
                    />

                    <img
                      className="mb-4"
                      src="https://kiante.wowtheme7.com/wp-content/uploads/2022/03/facebook-icon.svg"
                      alt="Social Media"
                    />

                    <img
                      className="mb-4"
                      src="https://kiante.wowtheme7.com/wp-content/uploads/2022/03/facebook-icon.svg"
                      alt="Social Media"
                    />

                    <img
                      className="mb-4"
                      src="https://kiante.wowtheme7.com/wp-content/uploads/2022/03/facebook-icon.svg"
                      alt="Social Media"
                    />

                  </div>

                </div>

                <h2 className="border-side mb-4">
                  Most loved
                </h2>

                {news
                  .filter((a) => a.image)
                  .slice(6, 10)
                  .map((a) => (

                    <a
                      className="sideItem o-lay news-story-link"
                      href={a.url}
                      target="_blank"
                      rel="noreferrer"
                      key={a.url}
                    >

                      <img
                        src={a.image}
                        alt={a.title}
                      />

                      <div>

                        <h4>{a.title}</h4>

                        <p>
                          {a.source.name}
                        </p>

                      </div>

                    </a>

                  ))}

                {/* TAGS */}
                <div>

                  <h2 className="border-side mb-4">
                    Tags
                  </h2>

                  <div className="d-flex flex-wrap gap-2">

                    <button className="tag">
                      Business
                    </button>

                    <button className="tag">
                      Technology
                    </button>

                    <button className="tag">
                      Health
                    </button>

                    <button className="tag">
                      Science
                    </button>

                    <button className="tag">
                      Sports
                    </button>

                    <button className="tag">
                      Entertainment
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </section>

        </div>
      </section>

      {/* VIDEO POPUP */}
      {showVideo && (

        <div className="video-popup">

          <button
            className="close-btn"
            onClick={() => {
              setShowVideo(false);
              setPlaying(null);
            }}
          >
            <IoCloseSharp />
          </button>

          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${videos[playing]}?autoplay=1`}
            title="YouTube Video"
            allowFullScreen
          ></iframe>

        </div>

      )}

    </>
  );
}

export default function Page() {
  return (
    <React.Suspense fallback={null}>
      <NewsPage />
    </React.Suspense>
  );
}