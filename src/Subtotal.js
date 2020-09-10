import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import './Subtotal.css';
import { getBasketTotalAmount } from './reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    
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
                value={getBasketTotalAmount(basket)}
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
