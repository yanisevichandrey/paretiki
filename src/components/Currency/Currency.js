import React from 'react';
import './Currency.css';

const currency = (props) => {
    return(
        <div className="currency" onClick={props.clicked}>
            <div className="currency_left">
                <img src={props.img} />
                <div className="currency_name">{props.nameCur}</div>
            </div>
            <div className="currency_right">
                <div className="currency_right_price">
                    <span className="priceName">USD: </span>
                    <span>{props.priceUsd.toFixed(2)}</span>
                </div>
                <div className="currency_right_price">
                    <span className="priceName">UAH: </span>
                    <span>{props.priceUah.toFixed(2)}</span>
                </div>
                <div className="currency_right_price">
                    <span className="priceName">RUB: </span>
                    <span>{props.priceRub.toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}

export default currency;