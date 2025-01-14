import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllProducts } from "../api/api";
import { searchProductByName } from "../api/api";
import { fetchProductByBarcode } from "../api/api";
import { fetchCategories } from "../api/api";
import { fetchProductsByCategory } from "../api/api";
import ProductCard from "../components/ProductCard";
import ProductCardDetail from "../components/ProductCardDetail";
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]); 
    const [searchProduct, setSearchProduct] = useState('');
    const [barcode, setBarcode] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOption, setSortOption] = useState('');
    const navigate = useNavigate();
    const [visibleProducts, setVisibleProducts] = useState(6);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAllProducts();
            setProducts(data);
        };

        const fetchCategoryData = async()=>{
            const categoryData = await fetchCategories();
            setCategories(categoryData);
        }

        fetchData();
        fetchCategoryData();
    }, []);

    const handleSearchChange = async (e) => {
        setSearchProduct(e.target.value);
        if (e.target.value.trim() === '') {
            const data = await fetchAllProducts(); 
            setProducts(data);
        } else {
            const data = await searchProductByName(e.target.value); 
            setProducts(data);
        }
    };

    const handleBarcodeSearch = async (e) => {
        setBarcode(e.target.value);
        if (e.target.value.trim() === '') {
            const data = await fetchAllProducts(); 
            setProducts(data);
        } else {
            const data = await fetchProductByBarcode(e.target.value); 
                setProducts([data]);  
        }
    };

    const handleCategoryChange = async(e)=>{
        setSelectedCategory(e.target.value);
        if(e.target.value.trim() === ''){
            const data = await fetchAllProducts();
            setProducts(data);
        }
        else{
            const categoryData = await fetchProductsByCategory(e.target.value);
            setProducts(categoryData);
            console.log(categoryData)

        }
    };

    const handleSortChange = (e)=>{
        const option = (e.target.value);
        setSortOption(option);

        const sortedProducts = [...products];
        if(option === 'asc_name'){
            sortedProducts.sort((a,b)=>a.product_name.localeCompare(b.product_name));
        }
        else if(option==='dec_name'){
            sortedProducts.sort((a,b)=>b.product_name.localeCompare(a.product_name));
        }
        else if(option === 'A-Z'){
            sortedProducts.sort((a,b)=>(a.nutrition_grades || '').localeCompare(b.nutrition_grades || ''));
        }
        else if(option === 'Z-A'){
            sortedProducts.sort((a,b)=>(b.nutrition_grades || '').localeCompare(a.nutrition_grades || ''));
        }
        setProducts(sortedProducts)
    };

    const handleProductDetailClick = (product)=>{
        navigate('/product/${product.code}', {state: {product}});
    };

    const handleLoadMore=()=>{
        setVisibleProducts((prev) => (prev+6));
    }

    

    return (
        <div className="home">
            <h1>Food Products</h1>

            <input
                type="text"
                className="search-bar"
                value={searchProduct}
                placeholder="Search Products..."
                onChange={handleSearchChange}
            />
            <input
                type="text"
                className="search-bar"
                value={barcode}
                placeholder="Search by Barcode..."
                onChange={handleBarcodeSearch}
            />

            <select
             className="category-dropdown" 
             value={selectedCategory}
             onChange={handleCategoryChange}>
                <option value="">
                    All categories
                </option>
                {categories.map((category)=>(
                    <option key={category} value={category}>{category}</option>
                ))}
             </select>

             <select 
             className="sort-dropdown"
             value={sortOption}
             onChange={handleSortChange}>
                <option value="">Sort By</option>
                <option value="asc_name">Product Name: A-Z</option>
                <option value="dec_name">Product Name: Z-A</option>
                <option value="A-Z">Nutrition Value: A-Z</option>
                <option value="Z-A">Nutrition Value: Z-A</option>
             </select>

            <div className="product-list">
                {products && products.length > 0 ? (
                    products.slice(0,visibleProducts).map((product) => (
                        <div key={product.code} onClick={() => handleProductDetailClick(product)}>
                        <ProductCard key={product.code} product={product} />
                        </div>
                    ))
                ) : (
                    <p>Loading Products...</p> 
                )}
            </div>
            {visibleProducts < products.length && (
                <button className="load-more" onClick={handleLoadMore}>Load More</button>
            )}
        </div>
    );
};

export default Home;