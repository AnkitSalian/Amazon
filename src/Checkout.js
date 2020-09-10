import React from 'react';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._C423492668_.jpg" alt="Checkout banner" />

                <div className="checkout__title">
                    <h3>Hello, {`${user ? user.email + ' ' : ''}`}</h3>
                    <h2>Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct key={`checkout_${item.id}`}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            count={item.count}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
