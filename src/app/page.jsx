"use client";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function Page() {
  const [news, setNews] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [playing, setPlaying] = useState(null);
  const videos = ["sC-HyWBgleM", "AvFMrroRkRk", "u3SIKAmPXY4"];

  useEffect(() => {
    async function getNews() {
      const response = await fetch("/api/news");
      const data = await response.json();
      setNews(data.articles);
    }
    getNews();
  }, []);

  return (
    <>
      <section className="py-5 ">
        <div className="container">
          <div className="row">
            {/* LEFT SIDE */}
            <div className="left col-12 col-lg-8 o-lay ">
              {news.slice(0, 1).map((a) => (
                <div key={a.url}>
                  <img className="h-100" src={a.image} alt="" />
                  <h2 className="fs-3 mt-2">{a.title}</h2>
                  <p>{a.description}</p>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="right col-4 col-lg-4 d-none d-md-block d-lg-block">
              <h2 className="sidebarTitle ">Most loved</h2>
              {news.slice(2, 7).map((a) => (
                <div key={a.url} className="sideItem o-lay">
                  <img src={a.image} alt="" />
                  <div>
                    <h4>{a.title}</h4>
                    <p className="">{a.source.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* all 3 box */}
          <section className="left">
            <div className="row row-cols-lg-3 g-3 ">
              {news.slice(3, 6).map((a, index) => (
                <div key={a.url} className="col">
                  <div className="position-relative o-lay">
                    <>
                      <img
                        src={a.image}
                        className="img-fluid w-100"
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
                        <h2 className="fs-3 mt-2 d-block d-md-none">
                          {a.title.slice(0, 50)}...
                        </h2>

                        <h2 className="fs-3 mt-2 d-none d-md-block">
                          {a.title}
                        </h2>
                      </div>
                    </>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h6 className="mt-3 mb-2 fw-bold fs-1">Bussiness</h6>
          </section>
          {/* left1 */}
          <section>
            <div className="left d-flex gap-3">
              <div className="row ">
                {news.slice(5, 9).map((a) => (
                  <div className="col-lg-6 o-lay" key={a.url}>
                    <img src={a.image} alt="" />
                    <h2 className="fs-3 mt-2">{a.title}</h2>
                    <p className="truncate">{a.description}</p>
                  </div>
                ))}
              </div>

              {/* right1 */}
              <div className="right1 col-4">
                <h2 className="sidebarTitle ">Most loved</h2>
                {news.slice(4, 8).map((a) => (
                  <div key={a.url} className="sideItem o-lay">
                    <img src={a.image} alt="" />
                    <div>
                      <h4>{a.title}</h4>
                      <p className="">{a.source.name}</p>
                    </div>
                  </div>
                ))}

                {news.slice(5, 6).map((a) => (
                  <div key={a.url} className="box mt-3">
                    <h2 className="text-black">Weekly Post</h2>
                    <img className="h-75 img-fluid mb-3" src={a.image} alt="" />
                    <div>
                      <h5 className="text-black ">{a.title}</h5>
                      <p className="text-black fw-bold d-none d-md-block d-lg-block">
                        {a.source.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              {/* LEFT SIDE */}
              <div className="left col-12 col-lg-8 o-lay ">
                {news.slice(0, 1).map((a) => (
                  <div key={a.url}>
                    <img className="h-100" src={a.image} alt="" />
                    <h2 className="fs-3 mt-2">{a.title}</h2>
                    <p>{a.description}</p>
                  </div>
                ))}
              </div>

              {/* RIGHT SIDE */}
              <div className="right col-4 col-lg-4">
                <h2 className="sidebarTitle ">Most loved</h2>
                {news.slice(2, 6).map((a) => (
                  <div key={a.url} className="sideItem o-lay">
                    <img src={a.image} alt="" />
                    <div>
                      <h4>{a.title}</h4>
                      <p className="">{a.source.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
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
