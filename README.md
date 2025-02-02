**Total Time Taken to Complete this Project: 15 hours**

**Project: Food Product Recommendation System**

This project implements a food product recommendation system using React. Users can browse through a list of food products, search for specific products by name or barcode, filter products by category, and sort the product list by name or nutrition grade.

**Tech Stack**

React: A JavaScript library for building user interfaces.</br>
React Router DOM: A library for handling routing in React applications.   </br>
OpenFoodFacts API: An open-source API that provides information about food products.


<ins>**Methods**</ins>

**Data Fetching:**

The fetchAllProducts, searchProductByName, fetchProductByBarcode, fetchCategories, and fetchProductsByCategory functions are used to fetch data from the OpenFoodFacts API.</br>
The useEffect hook is used to fetch product and category data on component mount.


**Components:**

The Home component is the main component of the application. It displays the product list, search bars, category filter, sort dropdown, and load more button.</br>
The ProductCard component displays a summary of a product, including its image, name, category, ingredients (if available), and nutrition grade.</br>
The ProductCardDetail component displays detailed information about a product, including its full list of ingredients, nutritional values, and labels.


**Search Functionality:**

The handleSearchChange function handles changes to the search bar for product name. It fetches products from the OpenFoodFacts API based on the search query.</br>
The handleBarcodeSearch function handles changes to the search bar for barcode. It fetches a product from the OpenFoodFacts API based on the barcode.


**Category Filter:**

The fetchCategories function fetches a list of categories from the OpenFoodFacts API.</br>
The handleCategoryChange function handles changes to the category dropdown. It filters the product list based on the selected category.


**Sort Functionality:**

The handleSortChange function handles changes to the sort dropdown. It sorts the product list based on the selected option (product name or nutrition grade).


**Product Detail Page:**

The handleProductDetailClick function handles clicks on product cards. It navigates to the product detail page using React Router DOM, passing the product data as props.


**Pagination:**

The visibleProducts state variable controls the number of products displayed on the page.</br>
The handleLoadMore function increases the visibleProducts value, loading more products from the product list.


**Responsiveness**

The CSS styles are designed to be responsive and work well on both mobile and desktop screens


**Some Screenshots:**
![image](https://github.com/user-attachments/assets/87817dec-8d8f-485a-aefa-61983414e774)
![image](https://github.com/user-attachments/assets/1e02cd36-e192-445f-b65e-f36ba035c3ac)
![image](https://github.com/user-attachments/assets/d79f6679-de53-4dd0-96ae-53ece9ac17f1)
![image](https://github.com/user-attachments/assets/21421209-9cc1-466b-a412-298ce45e342d)
![image](https://github.com/user-attachments/assets/e23bc4a0-ce72-4616-83bb-97c5d216fd92)
![image](https://github.com/user-attachments/assets/3ab37d8f-f936-4606-b299-4f4cf8f8e283)





