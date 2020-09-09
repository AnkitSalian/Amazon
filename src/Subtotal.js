import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import './Subtotal.css';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const getBasketTotal = (basket) => {
        return basket.reduce((val, obj) => val + obj['price'], 0);
    }
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{` ${value}`}</strong>
                        {/* Subtotal (0 items): <strong>0</strong> */}
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
            )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                // value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
