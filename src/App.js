import React, { useEffect, useState, } from 'react';
import {BrowserRouter, } from 'react-router-dom';
import logo from './logo.svg';

import RootRouter from './routers/RootRouter'
import { ExchangeRateContextProvider, } from './contexts/ExchangeRateContext';
import './App.css';

function App(){
  return (
    <ExchangeRateContextProvider>
      <BrowserRouter>
        <RootRouter/>
      </BrowserRouter>
    </ExchangeRateContextProvider>
  );
}
// const authkey = "OEIDkG6msYquVZXRoO4v24mfhCwNPzZ9";
// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(`
//     https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authkey}&searchdate=20180102&data=AP01`

//     ).then(response => {
//       return response.json()
//     }).then(responseJSON => {
//       console.log('response: ', responseJSON);
//       setData(responseJSON);
//     });
//   }, []);

//   useEffect(() => {
//     console.log('data: ', data);
//   }, [data]);

//   return (
//     <ExchangeRateContext>
//       {data.map((currency, cI) => {
//         return (
//           <div key={cI}>
//             {currency.cur_nm} ({currency.cur_unit}): {currency.bkpr}
//           </div>
//         );
//       })}
//     </ExchangeRateContext>
//   );
// }

export default App;
