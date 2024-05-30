import {useState, useEffect} from 'react'
import "../MostSelled/MostSelled.css"
import Item from '../Item/Item';

const MostSelled = () => {
  // State to store fetched products
  const [products, setProducts] = useState([]);

  // Fetching products from API on component mount
  useEffect(() => {
    // Fetching products from API
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    /* Container for most sold products */
    <div className="wholeProduct">
      {/* Title for most sold products */}
      <div className='product-title'>
        <h2>Most Sold Products</h2>
      </div>
      {/* Container for displaying most sold products */}
      <div className="mostsoldproducts-container">
        {/* Mapping through fetched products and rendering Item component */}
        {products.slice(0, 4).map(product => (
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

export default MostSelled;

