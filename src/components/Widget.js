import React, { useState } from "react"
// import TechnicalAnalysis from 'react-tradingview-technical-analysis';
import TradingViewWidget from 'react-tradingview-widget';
import TechnicalAnalysis from 'react-tradingview-technical-analysis'

function Widget() {
    const [stockSymbol, setStockSymbol] = useState("")
    const [stockValue, setStockValue] = useState(null)

    const handleChange = (event) => {
        setStockSymbol(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setStockValue(stockSymbol)
    }


    return (
        <div style={{marginLeft:"3em", backgroundColor: '#222831', marginTop: '220px'}}>
            {/* <h2>Stock Widget #1</h2> */}
           <div style={{paddingBottom: "5px"}}> 
            <form onSubmit={handleSubmit}>
                <input style={{"width":"70%", textAlign: 'center',backgroundColor: '#b0f0f7', border:'0',height:'30px', borderRadius: '8px'}}
                    type="text"
                    value={stockSymbol}
                    list='stocks'
                    name="stockSymbol"
                    placeholder="Choose from dropdown or type symbol"
                    onChange={handleChange}
                />
                <button type='submit' style={{border: '0',borderRadius:'8px',marginLeft:'5px', backgroundColor: '#daa850', width: "95px",height:"30px"}}><strong>Check</strong></button>
                <datalist id="stocks">
                    <option value="BTCUSD">BTCUSD</option>
                    <option value="EURUSD">EURUSD</option>
                    <option value="BTCUSD">BTCUSD</option>
                    <option value="GBPUSD">GBPUSD</option>
                    <option value="USDJPY">USDJPY</option>
                    <option value="XBTUSD">XBTUSD</option>
                    <option value="AAPL">AAPL</option>
                    <option value="XAUUSD">XAUUSD</option>
                    <option value="BTCUSDT">BTCUSDT</option>
                    <option value="AUDUSD">AUDUSD</option>
                </datalist>
            </form>
            </div>
            <div >
                <div >
                    <TechnicalAnalysis 
                        key={stockValue ? stockValue : 'NASDAQ:AAPL'}
                        symbol={stockValue ? stockValue : 'NASDAQ:AAPL'}
                        interval={"1W"}
                        colorTheme={"dark"}
                        isTransparent={"true"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Widget;
