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
            <div className="left col-lg-8 o-lay ">
              {news.filter((a) => a.image).slice(0, 1).map((a) => (
                <div key={a.url}>
                  <img className="h-100" src={a.image} alt="" />
                  <h2 className="fs-3 mt-2 leng">{a.title}</h2>
                  <p className="leng">{a.description}</p>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className=" col-lg-4 d-none d-md-block d-lg-block">
              <h2 className="border-side mb-4 ">Most loved</h2>
              {news.filter((a) => a.image).slice(2, 7).map((a) => (
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
              {news.filter((a) => a.image).slice(3, 6).map((a, index) => (
                <div key={a.url} className="col">
                  <div className="position-relative o-lay">
                    <>
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
                        <h2 className="fs-5 mt-2 d-block d-md-none">
                          {a.title.slice(0, 50)}...
                        </h2>

                        <h2 className="fs-5 mt-2 d-none d-md-block">
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
            <h6 className="mt-3 mb-3 fw-bold fs-1 border-down">Bussiness</h6>
          </section>
          {/* left1 */}
          <section>
            <div className="row ">
            <div className="left col-lg-8 gap-3">
              <div className="row ">
                {news.filter((a) => a.image).slice(5, 9).map((a) => (
                  
                  <div className="col-6 col-lg-6 col-md-6 o-lay" key={a.url}>
                    <img src={a.image} alt="" />
                    <h2 className="fs-3 mt-2 leng">{a.title}</h2>
                    <p className="leng">{a.description}</p>
                  </div>
                ))}
                </div>
              </div>
              {/* RIGHT1 SIDE */}
              <div className=" col-lg-4 d-none d-md-block d-lg-block">
                <h2 className="border-side mb-4 ">Most loved</h2>
                {news.filter((a) => a.image).slice(2, 5).map((a) => (
                  <div key={a.url} className="sideItem o-lay">
                    <img src={a.image} alt="" />
                    <div>
                      <h4>{a.title}</h4>
                      <p className="">{a.source.name}</p>
                    </div>
                  </div>
                ))}

                {news.filter((a) => a.image).slice(5, 6).map((a) => (
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
          <div className="mt-3">
            <img className="mb-3 col-12" src="https://kiante.wowtheme7.com/wp-content/uploads/2022/02/kiante-ads.png" alt="" />
          </div>
          <section className="mt-3">
            <div className="row">
              {/* LEFT SIDE */}
              <div className="left col-lg-8  ">
                <div className="row "></div>
                {news.filter((a) => a.image).slice(7,8).map((a) => (
                  <div key={a.url}>
                    <img className="h-100 " src={a.image} alt="" />
                    <h2 className="fs-3 mt-2">{a.title}</h2>
                    <p>{a.description}</p>
                  </div>
                ))}
                
              <div className="row ">
                {news.filter((a) => a.image).slice(5, 9).map((a) => (
                  
                  <div className="col-lg-6 o-lay mb-4" key={a.url}>
                  <div className="row ">
                    <div className="col-4">
                    <img className="img-fluid rounded h-100 w-100" src={a.image} alt="" />
                    
                    </div>
                    <div className="col-8">
                    <h2 className="fs-5 leng">{a.title}</h2>
                      <div className="d-flex justify-content-between gap-3 mt-3">
            <strong>{a.source.name}</strong>
            <span>{new Date(a.publishedAt).toDateString()}</span>
          </div>
                    </div>
                 </div>
                  </div>
                ))}
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className=" col-4 col-lg-4">
                <div>
  <h2 className="border-side mb-4">Social Media</h2>
  <div className="d-flex flex-wrap gap-2">
  <img className="mb-4 " src="https://kiante.wowtheme7.com/wp-content/uploads/2022/03/facebook-icon.svg" alt="Social Media" />
  <img className="mb-4 " src="https://kiante.wowtheme7.com/wp-content/uploads/2022/03/facebook-icon.svg" alt="Social Media" />
  <img className="mb-4 " src="https://kiante.wowtheme7.com/wp-content/uploads/2022/03/facebook-icon.svg" alt="Social Media" />
  <img className="mb-4 "src="https://kiante.wowtheme7.com/wp-content/uploads/2022/03/facebook-icon.svg" alt="Social Media" />
</div>
</div>
                <h2 className="border-side mb-4">Most loved</h2>
                {news.filter((a) => a.image).slice(6, 10).map((a) => (
                  <div key={a.url} className="sideItem o-lay">
                    <img src={a.image} alt="" />
                    <div>
                      <h4>{a.title}</h4>
                      <p className="">{a.source.name}</p>
                    </div>
                  </div>
                ))}
                <div>
                  <h2 className="border-side mb-4">Tags</h2>
                  <div className="d-flex flex-wrap gap-2 ">
  <button className="tag">Business</button>
  <button className="tag">Technology</button>
  <button className="tag">Health</button>
  <button className="tag">Science</button>
  <button className="tag">Sports</button>
  <button className="tag">Entertainment</button>
</div>
                </div>
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
