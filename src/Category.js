import React from 'react';
import json from './product.json';
import './Category.css';
import CategoryProduct from './CategoryProduct';

function Category() {
    const first_row = json.products.first_row.map(item => (
        <CategoryProduct key={`category_product_key${item.id}`}
            title={item.title}
            image={item.image}
            link={item.link}
            id={item.id} />
    ));
    const second_row = json.products.second_row.map(item => (
        <CategoryProduct key={`category_product_key${item.id}`}
            title={item.title}
            image={item.image}
            link={item.link}
            id={item.id} />
    ));
    const third_row = json.products.third_row.map(item => (
        <CategoryProduct key={`category_product_key${item.id}`}
            title={item.title}
            image={item.image}
            link={item.link}
            id={item.id} />
    ));
    return (
        <div className="category">
            <div className="category__container">
                <img className="category__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon_banner" />

                <div className="category__row">
                    {first_row}
                </div>
                <div className="category__row">
                    {second_row}
                </div>
                <div className="category__row">
                    {third_row}
                </div>
            </div>
        </div>
    )
}

export default Category;
