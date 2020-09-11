import React from 'react';
import json from './product.json';
import Product from './Product';
import './Watch.css';

function Watch() {
    const first_row = json.products.third_row[0].first_row.map(item => (
        <Product key={`watch_key${item.id}`}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            id={item.id} />
    ));
    const second_row = json.products.third_row[0].second_row.map(item => (
        <Product key={`watch_key${item.id}`}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            id={item.id} />
    ));
    const third_row = json.products.third_row[0].third_row.map(item => (
        <Product key={`watch_key${item.id}`}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            id={item.id} />
    ));
    return (
        <div className="watch">
            <div className="watch__container">
                <img className="watch__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon_banner" />
                <div className="watch__row">
                    {first_row}
                </div>
                <div className="watch__row">
                    {second_row}
                </div>
                <div className="watch__row">
                    {third_row}
                </div>
            </div>
        </div>
    )
}

export default Watch;
