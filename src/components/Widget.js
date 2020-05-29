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
        <div style={{marginLeft:"3em", backgroundColor: '#222831'}}>
            {/* <h2>Stock Widget #1</h2> */}
           <div style={{paddingBottom: "5px"}}> 
            <form onSubmit={handleSubmit}>
                <input style={{"width":"75%", backgroundColor: '#b0f0f7'}}
                    type="text"
                    value={stockSymbol}
                    list='stocks'
                    name="stockSymbol"
                    placeholder="Enter Symbol or Select using Dropdown"
                    onChange={handleChange}
                />
                <button type='submit' style={{backgroundColor: '#d0d6ab', width: "105px",height:"30px", paddingRight: '15px'}}><strong>Check</strong></button>
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
                    />
                </div>
            </div>
        </div>
    )
}

export default Widget;
