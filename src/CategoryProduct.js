import React from 'react';
import { Link } from 'react-router-dom';
import "./CategoryProduct.css";

function CategoryProduct({ id, title, image, link }) {
    return (
        <div className="categoryproduct" key={`categoryproduct_${id}`}>
            
            <div className="categoryproduct__info">
                <h2>{title}</h2>
            </div>
            <Link to={link}>
                <img src={image} alt="categoryproduct_image" />
            </Link>
        </div>
    )
}

export default CategoryProduct;
