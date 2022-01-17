import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Coin from './components/Coin';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.
      get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(response => {
        console.log(response.data);
        setCoins(response.data);
      })
      .catch(error=>console.log(error))
  })

  const handleChange = (event) => {
  setSearch(event.target.value)
}

  const filteredCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input type="text" className="coin-input" placeholder='Search' onChange={handleChange}/>
        </form>
      </div>  
      {
        filteredCoins.map(coin => {
          return( <Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} price={coin.current_price} volume={coin.total_volume} priceChange={coin.price_change_percentage_24h} marketCap={coin.market_cap}></Coin>)
        })
      }
    </div>
  );
}

export default App;
