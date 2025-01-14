import axios from 'axios';

const API_BASE_URL = 'https://world.openfoodfacts.org/';

const handleApiError = (error, context = '') => {
  console.error(`Error ${context}:`, error?.response?.data || error.message);
};

export const fetchAllProducts = async (page = 1, pageSize = 100) => {
  try {
    const response = await axios.get(`${API_BASE_URL}products.json`, {
      params: { page, page_size: pageSize },
    });
    return response.data.products || [];
  } catch (error) {
    handleApiError(error, 'fetching all products');
    return [];
  }
};
export const searchProductByName = async (searchTerm) => {
  console.log(searchTerm);
  try {
    const response = await axios.get(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&json=true`
    );
    console.log(response.data.products);
    return response.data.products || [];
  } catch (error) {
    console.error('Error searching products by name:', error);
    return [];
  }
};

export const fetchProductByBarcode = async (barcode) => {
  try {
    const response = await axios.get(`${API_BASE_URL}api/v0/product/${barcode}.json`);
    return response.data.product || null; 
  } catch (error) {
    console.error('Error fetching product by barcode:', error);
    return null; 
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get('https://world.openfoodfacts.org/categories.json');
    return response.data.tags.map((tag) => tag.name); 
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`https://world.openfoodfacts.org/category/${category}.json`);
    return response.data.products || [];
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
};