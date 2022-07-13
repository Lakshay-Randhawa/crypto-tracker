import axios from "axios";
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false
function App() {
   
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false')
         .then(res =>{
          console.log(res.data)
         })
  return (
    <div>
        <h1>This is api app</h1>
    </div>
  );
}

export default App;
