import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [coins, setCoins] = useState({})

  useEffect(() => {
    axios.
      get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(response => {
        console.log(response);
        setCoins(response);
      }
        )
      .catch(error=>console.log(error))
  })

  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input type="text" className="coin-input" placeholder='Search'/>
        </form>
      </div>  
      
    </div>
  );
}

export default App;
