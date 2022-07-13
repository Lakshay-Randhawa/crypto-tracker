import axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./Components/Coin/Coin";
import './App.css'

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false'
function App() {
  
 // States
 const [coins, setCoin] = useState([])
 const [search, editSearch] = useState('')

    useEffect(()=>{

      //Fetching data from coingecko API
      axios.get(`${API_URL}`)
      .then(res =>{
        setCoin(res.data)
      })
      .catch(error => console.log(error))
    },[])  
   
    const handleChange = e =>{
       editSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">Search a currency</h1>
          <input className="coin-input" type='text' placeholder="Search" onChange={handleChange} />
        </div>
        {filteredCoins.map(coin => (
          <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol} 
          marketcap={coin.market_cap}
          price={coin.current_price} 
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          />
          
        ))}
    </div>
  );
}

export default App;
