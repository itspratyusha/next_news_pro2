"use client"
import React, { useEffect, useState } from 'react'

export default function Page() {

  let [news, setNews] = useState([])
  const [playing, setPlaying] = useState(null);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=apple&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
    
     .then(a => a.json())
     .then(b => setNews(b.articles)) 
    }, [])

  return (
    <>
    <section className='py-5'>
    <div className="container">
<div className='row'>
      {/* LEFT SIDE */}
      <div className="left col-8 ">
        {news.slice(43,44).map((a) => (
          <div key={a.url}>
            <img className='h-100' src={a.urlToImage} alt="" />
            <h2 className='fs-3 mt-2'>{a.title}</h2>
            <p>{a.description}</p>
          </div>
        ))}
      </div>
      
      {/* RIGHT SIDE */}
      <div className="right col-4">
        <h2 className="sidebarTitle ">Most loved</h2>
        {news.slice(9, 14).map((a) => (
          <div key={a.url} className="sideItem ">
            <img src={a.urlToImage} alt="" />
            <div>
              <h4>{a.title}</h4>
              <p className=''>{a.source.name}</p>
            </div>
          </div>
        ))}
      </div>
</div>
{/* all 3 box */}
     <section className="left">
  <div className="row row-cols-3 g-3">
    {news.slice(19, 22).map((a) => (
      <div key={a.url} className="col">
        <div className="position-relative">
          {playing === a.url ? (
            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/sC-HyWBgleM?si=8SOUei_kkCqM5f3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          ) : (
            <>
             
              <img src={a.urlToImage} className="img-fluid w-100" alt={a.title} />

            
              <button
                className="btn btn-light rounded-circle position-absolute top-50 start-50 translate-middle"
                onClick={() => setPlaying(a.url)}
              >
                ▶
              </button>

        
              <div className="position-absolute bottom-0 start-0 m-3 text-white">
                <h2 className="fs-5">{a.title}</h2>
                <p className="mb-0">{a.source.name}</p>
              </div>
            </>
          )}
        </div>
      </div>
    ))}
  </div>
</section>

<h6 className='mt-3 mb-2 fw-bold fs-1'>Bussiness</h6>
{/* left1 */}
      <div className="left d-flex gap-3">
      <div className='row'>
        {news.slice(35, 39).map((a) => (
          <div className='col-lg-6 ' key={a.url}>
            <img src={a.urlToImage} alt="" />
            <h2 className='fs-3 mt-2'>{a.title}</h2>
            <p className='truncate'>{a.description}</p>
          </div>
        ))}
      </div>

      {/* right1 */}
     <div className="right1 col-4">
        <h2 className="sidebarTitle ">Most loved</h2>
        {news.slice(29, 33).map((a) => (
          <div key={a.url} className="sideItem ">
            <img src={a.urlToImage} alt="" />
            <div>
              <h4>{a.title}</h4>
              <p className=''>{a.source.name}</p>
            </div>
          </div>
        ))}
         {news.slice(34,35).map((a) => (
          <div key={a.url} className="box mt-3">
            <h2 className='text-black'>Weekly Post</h2>
            <img className='h-75 img-fluid mb-3' src={a.urlToImage} alt="" />
            <div>
              <h5 className='text-black '>{a.title}</h5>
              <p className='text-black fw-bold'>{a.source.name}</p>
            </div>
            
          </div>
        ))}

      </div>    
      </div>
    </div>
    </section>
    
    </>
  )
}