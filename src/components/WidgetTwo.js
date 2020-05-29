import React, { useState } from "react"
import TechnicalAnalysis from 'react-tradingview-technical-analysis';
import TradingViewWidget from 'react-tradingview-widget';


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
        <div className="container text-center">
            <h2>Stock Widget #2</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={stockSymbol}
                    list='stocks'
                    name="stockSymbol"
                    placeholder="Enter the stock name"
                    onChange={handleChange}
                />
                <button type='submit'>Check</button>
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
            <TradingViewWidget
                key={stockValue ? stockValue : 'NASDAQ:AAPL'}
                symbol={stockValue ? stockValue : 'NASDAQ:AAPL'}
            />
        </div>
    )
}

export default Widget;