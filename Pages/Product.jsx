/* Importing necessary hooks and components */
import { useEffect, useState } from 'react'; // Importing useEffect and useState hooks from React
import { useParams } from 'react-router-dom'; // Importing useParams hook from react-router-dom

import ProductDetail from "../Components/Products/ProductDetail"; // Importing the ProductDetail component
import Ratings from "../Components/Ratings/Ratings"; // Importing the Ratings component
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts"; // Importing the RelatedProducts component

/* Defining the Product component */
export const Product = () => {
  const { productId } = useParams(); // Getting the productId parameter from the URL using useParams hook
  const [product, setProduct] = useState(null); // Initializing state for the product and setting it to null initially

  /* Fetching product details using useEffect hook */
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`); // Fetching product details from API based on productId
        const fetchedProduct = await response.json(); // Parsing the response to JSON format
        setProduct(fetchedProduct); // Updating the product state with fetched product details
      } catch (error) {
        console.error('Error fetching product details:', error); // Handling error if fetching fails
      }
    };

    fetchProductDetails(); // Calling the fetchProductDetails function
  }, [productId]); // Dependency array with productId ensures useEffect runs when productId changes

  /* Rendering loading message if product details are not yet fetched */
  if (!product) {
    return <div>Loading...</div>;
  }

  /* Rendering ProductDetail, Ratings, and RelatedProducts components with product details */
  return (
    <div>
      <ProductDetail product={product} /> {/* Rendering ProductDetail component with product details */}
      <Ratings /> {/* Rendering Ratings component */}
      <RelatedProducts currentProductId={product.id} currentCategory={product.category} /> {/* Rendering RelatedProducts component with current product ID and category */}
    </div>
  );
};

export default Product; // Exporting the Product component as default

