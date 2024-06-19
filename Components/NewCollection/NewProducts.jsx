// Importing necessary dependencies and components
import { useState, useEffect } from 'react';
import "../NewCollection/NewProducts.css" // Importing styles for the component
import Item from '../Item/Item'; // Importing the Item component

// Functional component to display all products
const AllProducts = () => {
  // State to store the fetched products
  const [products, setProducts] = useState([]);

  // Effect hook to fetch data from the API when the component mounts
  useEffect(() => {
    // Fetching products from the API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json()) // Parsing the response as JSON
      .then(data => setProducts(data)) // Setting the fetched products in state
      .catch(error => console.log('Error fetching data:', error)); // Handling errors
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  // Returning JSX to render the component
  return (
    <div className="wholeProduct">
      {/* Section to introduce the latest collection */}
      <div className="product-intro">
        <h2>Latest Collection</h2>
      </div>
    
      {/* Container to display new products */}
      <div className="newproduct-container">
        {/* Mapping through the products array to render each product */}
        {products.slice(0, 8).map(product => (
          <Item
            key={product.id}
            id={product.id}
            title={product.title}
            category={product.category}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProducts; // Exporting the component

