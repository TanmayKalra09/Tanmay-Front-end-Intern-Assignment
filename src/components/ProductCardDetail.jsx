import react from "react";
import { useLocation } from "react-router-dom";
import "./ProductCardDetail.css"

const ProductCardDetail=()=>{
    const Location = useLocation();
    const product = Location.state.product;

    const {product_name,image_url,ingredients, nutriscore_data} = product;

    const nutrients = [...nutriscore_data?.components?.negative || [] , ...nutriscore_data?.components?.positive || []];
    const ingredient = [...ingredients || []];


    return(
        <div className="product-detail">
            <h1>{product_name}</h1>
            {image_url && <img src={image_url} style={{maxWidth:'300px'}}/>}
            <p><b>Nutrition Grade:</b> {product.nutrition_grades.toUpperCase()}</p>

<div> <h3>Ingredients:</h3>
            <ul>{ingredients.map((ingredient,index)=>(
                <li key={index}>
                    {ingredient.id.replaceAll('en:'," ").replaceAll("-"," ")}
                </li>

            ))}</ul>
            </div>
           

            <div><h3>Nutritional Values:</h3>
<ul>{nutrients.map((nutrient,index)=>(
                       
                            <li key={index}>
                                <b>{nutrient.id.replaceAll('_'," ").toUpperCase()}: </b>
                                {nutrient.value}
                                {nutrient.unit}
                            </li> 
                    ))}</ul></div>
           
    
                    
                    </div>
                    
                

    )

}

export default ProductCardDetail;