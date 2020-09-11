import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotalAmount } from './reducer';
import { useHistory } from 'react-router-dom';
import './Subtotal.css';

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) => (
                <>
                    <h3>
                        Order Total ({basket?.reduce((val, obj) => val + (obj['count']), 0)} items): <strong>{` ${value}`}</strong>
                        {/* Subtotal (0 items): <strong>0</strong> */}
                    </h3>
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
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
