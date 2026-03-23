"use client"
import React, { useEffect, useState } from 'react'

export default function Page() {

  let [news, setNews] = useState([])

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
        {news.slice(0, 1).map((a) => (
          <div key={a.url}>
            <img className='mb-3' src={a.urlToImage} alt="" />
            <h2>{a.title}</h2>
            <p>{a.description}</p>
          </div>
        ))}
      </div>
      
      {/* RIGHT SIDE */}
      <div className="right col-4">
        <h2 className="sidebarTitle ">Most loved</h2>
        {news.slice(9, 13).map((a) => (
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
      <section className="left ">
        <div className='row row-cols-3'>
        {news.slice(2, 5).map((a) => (
          <div key={a.url}>
            <img className='mb-3 w-100' src={a.urlToImage} alt="" />
            <h2>{a.title}</h2>
            <p>{a.description}</p>
          </div>
          
        ))}
        </div>
      </section>

<section className='py-4 fw-bold display-5'></section>
{/* left1 */}
      <div className="left d-flex gap-3">
      <div className='row'>
        {news.slice(35, 39).map((a) => (
          <div className='col-lg-6 ' key={a.url}>
            <img src={a.urlToImage} alt="" />
            <h2>{a.title}</h2>
            <p>{a.description}</p>
          </div>
        ))}
      </div>

      {/* right1 */}
     <div className="right col-4">
        <h2 className="sidebarTitle ">Most loved</h2>
        {news.slice(29, 33).map((a) => (
          <div key={a.url} className="sideItem ">
            <img className='' src={a.urlToImage} alt="" />
            <div>
              <h4>{a.title}</h4>
              <p className=''>{a.source.name}</p>
            </div>
          </div>
        ))}
         {news.slice(34,35).map((a) => (
          <div key={a.url} className="box">
            <h2 className='text-black'>Weekly Post</h2>
            <img className='h-75 img-fluid mb-3 mt-4' src={a.urlToImage} alt="" />
            <div>
              <h5 className='text-black'>{a.title}</h5>
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