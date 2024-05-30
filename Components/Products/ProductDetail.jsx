// Importing necessary dependencies and styles
import React from 'react';
import { ProductContext } from '../../Context/ProductContext'; // Importing ProductContext for accessing context
import "../Products/ProductDetail.css"; // Importing styles for the component

// Functional component to display product details
const ProductDetail = ({ product }) => {
  // Accessing addToCart function from ProductContext
  const { addToCart } = React.useContext(ProductContext);

  // If product data is not available, display loading message
  if (!product) {
    return <div>Loading...</div>;
  }

  // Rendering JSX to display product details
  return (
    <div className="product-detail">
      {/* Displaying product image */}
      <img src={product.image} alt={product.title} />
      <div className="product-detail-info">
        {/* Displaying product title */}
        <h2>{product.title}</h2>
        {/* Displaying product description */}
        <p>{product.description}</p>
        {/* Displaying product price */}
        <p className="price">${product.price}</p>
        {/* Displaying product category */}
        <p className="category">Category: {product.category}</p>
        {/* Button to add product to cart */}
        <div> 
          <button className='detail-cartBtn' onClick={() => addToCart(product)}>Add to Cart</button> 
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; // Exporting the component


