"use client"
import Link from 'next/link';
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

<nav className="navbar navbar-expand-lg bg-light navbar-light p-3 ">
  <div className="container ">
    <a className="navbar-brand" href="#">
      <img className='w-75' src="http://kiante.wowtheme7.com/wp-content/uploads/2022/04/cropped-Logo-Black.png" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavDropdown">
      <ul className="navbar-nav gap-3 fs-5">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" href="#">Bussiness</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" href="#">Politics</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link" href="#">Culture</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Sports</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">More</Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Science & Tech</Link></li>
            <li><Link className="dropdown-item" href="#">Health</Link></li>
          </ul>
        </li>
      </ul>
      <span>search</span>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header;