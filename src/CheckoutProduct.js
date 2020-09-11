import React from 'react';
import { useStateValue } from './StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({ id, title, image, price, rating, count, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        })
    }
    const removeOneItem = async () => {
        await basket.forEach(async item => {
            if (item.id == id) {
                item.count -= await 1;
            }
        })
        await dispatch({
            type: 'REMOVE_ONE_ITEM',
            item: {
                id,
                title,
                image,
                price,
                rating,
                count: 1,
            }
        })
        
    }

    const addToBasket = async () => {

        await basket.forEach(async item => {
            if (item.id == id) {
                item.count += await 1;
            }
        })
        await dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating,
                count: 1,
            }
        })
    }

    return (
        <div className="checkoutProduct" key={`checkout_product_${id}`}>
            <img className="checkoutProduct__image" src={image} alt="product_image" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                    <small> x </small>
                    <strong>{count}</strong>
                </p>
                <div className="checkoutProduct__rating" key={`checkout_product_rating_${id}`}>
                    {Array(rating).fill().map((_, i) => (
                        <p key={`checkout_rating_${id}_${i}`}>⭐</p>
                    ))}
                </div>
                {!hideButton && (
                    <>
                        <button onClick={removeFromBasket}>Remove from Basket</button>
                        <button onClick={removeOneItem}>Remove One Item</button>
                        <button onClick={addToBasket}>Add One Item</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default CheckoutProduct;
