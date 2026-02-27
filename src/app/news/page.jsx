// "use client"
// import React, { useEffect, useState } from 'react'

// export default function Page() {

//   const [news, setNews] = useState([])

//   useEffect(() => {
//     fetch(`https://newsapi.org/v2/everything?q=apple&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
//       .then(res => res.json())
//       .then(data => setNews(data.articles || []))
//   }, [])

//   if (news.length === 0) return <h2>Loading...</h2>

//   const featured = news.slice(0, 9)
//   const sideNews = news.slice(10, 16)

//   return (
//     <div className="container">

//       {/* LEFT SIDE */}
//       <div className="left">
//             {featured.map((a) => (
//           <div key={a.url}>
//             <img src={a.urlToImage} alt="" />
//             <div>
//               <h4>{a.title}</h4>
//               <p>{a.source.name}</p>
//             </div>
//           </div>
//         ))}
        
//          </div>

//       {/* RIGHT SIDE */}
//       <div className="right">
//         <h2 className="sidebarTitle">Most loved</h2>

//         {sideNews.map((a) => (
//           <div key={a.url} className="sideItem">
//             <img src={a.urlToImage} alt="" />
//             <div>
//               <h4>{a.title}</h4>
//               <p>{a.source.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   )
// }