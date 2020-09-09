import React from 'react';
import Subtotal from './Subtotal';
import './Checkout.css';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._C423492668_.jpg" alt="Checkout banner" />

                <div className="checkout__title">
                    <h2>Your Shopping Basket</h2>
                    {/* BasketItem */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
