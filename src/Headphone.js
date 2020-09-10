import React from 'react';
import json from './product.json';
import Product from './Product';
import './Headphone.css';

function Headphone() {
    const first_row = json.products.first_row[0].first_row.map(item => (
        <Product title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            id={item.id} />
    ));
    const second_row = json.products.first_row[0].second_row.map(item => (
        <Product title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            id={item.id} />
    ));
    const third_row = json.products.first_row[0].third_row.map(item => (
        <Product title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            id={item.id} />
    ));
    return (
        <div className="headphones">
            <div className="headphones__container">
                <img className="headphones__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon_banner" />
                <div className="headphones__row">
                    <div className="headphones__row">
                        {first_row}
                    </div>
                </div>
                <div className="headphones__row">
                    <div className="headphones__row">
                        {second_row}
                    </div>
                </div>
                <div className="headphones__row">
                        {third_row}
                </div>
            </div>
        </div>
    )
}

export default Headphone;
