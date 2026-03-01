"use client"
import React, { useEffect, useState } from 'react'


function Header() {
  let [temp, setTemp] = useState([]);
  let [news, setNews] = useState([])
  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=27.7&longitude=85.3&current_weather=true").then(a => a.json()).then(data => {setTemp(data.current_weather.temperature);
      fetch(`https://newsapi.org/v2/everything?q=apple&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
     .then(a => a.json())
     .then(b => setNews(b.articles)) 
      })
  }, []);

  return (
    <>
      <section className="border-bottom p-3 ">
        <div className='container d-flex justify-content-between align-items-center py-2 '>
          <div className='d-flex gap-5'>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric"
            })}
            <div >{temp}°C</div>
          </div>

          <ul className='d-flex gap-2 list-unstyled align-items-center mb-0 '>
            <li>fb</li>
            <li>inst</li>
            <li>twit</li>
            <li>yt</li>
          </ul>
        </div>
      </section>

<nav className="navbar navbar-expand-lg bg-light navbar-light p-3">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img className='w-75' src="http://kiante.wowtheme7.com/wp-content/uploads/2022/04/cropped-Logo-Black.png" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">Bussiness</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">Politics</a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link" href="#">Culture</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sports</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
More          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Science & Tech</a></li>
            <li><a className="dropdown-item" href="#">Health</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header;