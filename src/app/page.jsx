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
      <div className="left col-8">
        {news.slice(0, 1).map((a) => (
          <div key={a.url}>
            <img src={a.urlToImage} alt="" />
            <h2>{a.title}</h2>
            <p>{a.description}</p>
          </div>
        ))}
      </div>
      
      {/* RIGHT SIDE */}
      <div className="right col-4">
        <h2 className="sidebarTitle ">Most loved</h2>

        {news.slice(9, 13).map((a) => (
          <div key={a.url} className="sideItem">
            <img src={a.urlToImage} alt="" />
            <div>
              <h4>{a.title}</h4>
              <p>{a.source.name}</p>
            </div>
          </div>
        ))}
      </div>
</div>
      <div className="left d-flex gap-3">
        {news.slice(2, 5).map((a) => (
          <div key={a.url}>
            <img src={a.urlToImage} alt="" />
            <h2>{a.title}</h2>
            <p>{a.description}</p>
          </div>
        ))}
      </div>
<h3>Business</h3>
      <div className="left d-flex gap-3">
      <div className='row'>
        {news.slice(19, 23).map((a) => (
          <div className='col-lg-6 ' key={a.url}>
            <img src={a.urlToImage} alt="" />
            <h2>{a.title}</h2>
            <p>{a.description}</p>
          </div>
        ))}
      </div>
       <div className="right col-4">
        <h2 className="sidebarTitle ">Featured Posts</h2>

        {news.slice(14, 18).map((a) => (
          <div key={a.url} className="sideItem ">
            <img className=' h-50 w-40' src={a.urlToImage} alt="" />
            <div>
              <h4>{a.title}</h4>
              <p>{a.source.name}</p>
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