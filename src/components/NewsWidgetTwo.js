import React from 'react'

export default function NewsWidgetTwo() {
    return (
        <div >
            {/* <h2>News Widget #2</h2> */}
            <iframe id="rediff_realtime_widget" name="rediff_realtime_widget" src="//realtime.rediff.com/widgets/result?searchbar=false&thumbnail=false&cat=business&numresults=8" scrolling="no" frameborder="0" style={{width: "300px",height:"420px",margin:"auto", backgroundColor:"rgb(178, 183, 229)"}}></iframe>
        </div>
    )
}
