import React, { useContext, useEffect, useCallback, useState } from 'react';
import {ExchangeRateContext, } from '../contexts/ExchangeRateContext'

function CurrencyDetail(props){
    const exchangeRateContext = useContext(ExchangeRateContext);
    
    const [currencyDetail, setCurrencyDetail] =useState({});
    
    useEffect(() => {
        console.log('props.match.params.currencyCode', props.match.params.currencyCode);

        const currencyDetail = exchangeRateContext.getCurrencyDetail(props.match.params.currencyCode);

        console.log('currencyDetail: ', currencyDetail);
        setCurrencyDetail(currencyDetail);
    }, [exchangeRateContext.getCurrencyDetail, props.match.params.currencyCode]);

    useEffect(() => {
        console.log('currencyDetail: ', currencyDetail);
    }, [currencyDetail]);
    return (
        <div>
            이름 : {currencyDetail.cur_nm}
        </div>
    );
}

export default CurrencyDetail;