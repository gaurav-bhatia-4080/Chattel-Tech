// import React, { useEffect, useState } from 'react'
// import '../styles/NewsWidget.css'
// import axios from 'axios'

// export default function NewsWidget() {

//     const [newsData, setNewsData] = useState(null)

//     useEffect(() => {
//         async function getData() {
//             await axios.get(`http://newsapi.org/v2/everything?sources=fortune&apiKey=b64b43566b8b4dbd858c5ba7b30414ff`)
//                 .then(response => {
//                     setNewsData(response.data)
//                 })
//         }
//         getData();
//     }, [])

//     console.log(newsData)

//     return (
//         <div className="news-widget container">
//             <h2 className="text-center">News Widget #1</h2>
//             <div id="news-widget__main" className="container shadow p-3 mb-5 bg-white rounded">
//                 {
//                     newsData == null ?
//                         "" :
//                         newsData.articles.map((article) => (
//                             <div className="container shadow-sm p-3 mb-5 bg-white rounded text-center">
//                                 <h3>{article.title}</h3>
//                                 <p className="font-weight-light">{article.description}</p>
//                                 <p className="text-monospace"><a id="news-widget__moreinfo" href={article.url} >More Info</a></p>
//                             </div>
//                         ))
//                 }
//             </div>
//         </div>
//     )
// }
