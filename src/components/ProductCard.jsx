import React from "react";
import './ProductCard.css';

const ProductCard = ({product})=>{
    return(
        <div className="product-card">
            <img src={product.image_url} className="proudct-image" />
            <h3>{product.product_name}</h3>
            <p>Category: {product.categories}</p>
            <p>Ingridients: {product.ingredients_analysis_tags_text|| 'Not available'}</p>
            <p>Nutrition Grade: {product.nutrition_grades.toUpperCase()}</p>
            </div>
        
    );
};
export default ProductCard; 