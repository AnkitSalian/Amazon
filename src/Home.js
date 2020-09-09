import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon_banner" />

                <div className="home__row">
                    <Product title="Machine Learning: 4 Books in 1: Basic Concepts + Artificial Intelligence + Python Programming + Python Machine Learning. A Comprehensive Guide to Build Intelligent Systems Using Python Libraries"
                        image="https://m.media-amazon.com/images/I/81za5FW7uNL._AC_UY218_.jpg"
                        price={1472.26}
                        rating={5} />
                    <Product title="Inalsa Stand Mixer Kratos-1000W with 5L SS Bowl| Includes Whisking Cone, Mixing Beater & Dough Hook, (Champagne)"
                        image="https://m.media-amazon.com/images/I/61lXk66xhaL._AC_UY218_.jpg"
                        price={7667}
                        rating={4} />
                </div>

                <div className="home__row">
                    <Product title="Fitbit FB507BKBK Versa 2 Health & Fitness Smartwatch with Heart Rate, Music, Alexa Built-in, Sleep & Swim Tracking, Black/Carbon, One Size (S & L Bands Included) (Black/Carbon)"
                        image="https://m.media-amazon.com/images/I/715obo1cz0L._AC_UY218_.jpg"
                        price={17980}
                        rating={5} />
                    <Product title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
                        image="https://m.media-amazon.com/images/I/7128HRanJgL._AC_UY218_.jpg"
                        price={9749}
                        rating={4} />
                    <Product title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey (Latest Model)"
                        image="https://m.media-amazon.com/images/I/71TJA+sJv2L._AC_UY218_.jpg"
                        price={29900}
                        rating={5} />
                </div>

                <div className="home__row">
                    <Product title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                        image="https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UY218_.jpg"
                        price={139990}
                        rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home;
