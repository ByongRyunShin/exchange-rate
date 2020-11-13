import React, {createContext, useCallback, useEffect, useState, } from 'react'

// context기본값
const ExchangeRateContextValue = {
    data: [],
    getCurrencyDetail: () => {}, //비어있는 함수 표현
}
const authkey = 'OEIDkG6msYquVZXRoO4v24mfhCwNPzZ9';

export const ExchangeRateContext  = createContext(ExchangeRateContextValue);

export function ExchangeRateContextProvider(props){
    const[data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authkey}&searchdate=20180102&data=AP01`

    ).then(response => {
      return response.json()
    }).then(responseJSON => {
      console.log('response: ', responseJSON);
      setData(responseJSON);
    });
  }, []);
  const getCurrencyDetail = useCallback(code => {
    console.log('code: ', code);
    const matchedCurrency = data.filter(currency => {
      return currency.cur_unit ===code;
    });

    if(!matchedCurrency.length){
      return false;
    }
    return matchedCurrency[0];
  }, [data]);

  return(
    <ExchangeRateContext.Provider value={{
        data, // => data: data,
        getCurrencyDetail,
    }}>
        {props.children}
    </ExchangeRateContext.Provider>
  );
}