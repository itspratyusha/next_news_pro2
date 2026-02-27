"use client"
import React, { useEffect, useState } from 'react'

export default function Page() {

  const [news, setNews] = useState([])

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=apple&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
     .then(a => a.json())
     .then(b => setNews(b.articles)) 
    }, [])

  return (
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
      <div className=" col-4">
        <h2 className="sidebarTitle right">Most loved</h2>

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
    </div>
  )
}