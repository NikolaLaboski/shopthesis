import { useEffect, useState } from 'react'; // Importing necessary hooks from React
import Item from '../Item/Item'; // Importing the Item component
import "../RelatedProducts/RelatedProducts.css"; // Importing the related CSS file for styling

const RelatedProducts = ({ currentProductId, currentCategory }) => {
  // Initializing state to store related products
  const [relatedProducts, setRelatedProducts] = useState([]);

  // useEffect to fetch related products when currentProductId or currentCategory changes
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        // Fetching products of the same category from the API
        const response = await fetch(`https://fakestoreapi.com/products/category/${currentCategory}`);
        const products = await response.json();
        // Filtering out the current product from the fetched products
        const filteredProducts = products.filter(product => product.id !== currentProductId);
        // Updating the state with the filtered products
        setRelatedProducts(filteredProducts);
      } catch (error) {
        // Logging any errors that occur during the fetch
        console.error('Error fetching related products:', error);
      }
    };

    // Calling the function to fetch related products
    fetchRelatedProducts();
  }, [currentProductId, currentCategory]); // Dependency array to trigger effect when currentProductId or currentCategory changes

  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <div className="related-products-list">
        {relatedProducts.map(product => (
          // Rendering each related product using the Item component
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
};

export default RelatedProducts; // Exporting the RelatedProducts component as default

