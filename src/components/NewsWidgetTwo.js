import React from 'react'

export default function NewsWidgetTwo() {
    return (
        <div style={{marginTop:'100px'}}>
            {/* <h2>News Widget #2</h2> */}
            <iframe id="rediff_realtime_widget" name="rediff_realtime_widget" src="//realtime.rediff.com/widgets/result?searchbar=false&thumbnail=false&cat=business&numresults=8" scrolling="no" frameborder="0" style={{ padding: '10px 40px',marginLeft: '50px',width: "390px",height:"440px",backgroundColor:"#c8cacf", marginTop:'0px', borderRadius: '10px'}}></iframe>
        </div>
    )
}
