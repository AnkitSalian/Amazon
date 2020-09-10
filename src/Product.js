import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

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
        <div className="product" key={`product_${id}`}>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating" key={`product_rating_${id}`}>
                    {Array(rating).fill().map((_, i) => (
                        <p key={`product_rating_${id}_${i}`}>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="book_image" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
