/* Import statements */
import { useContext } from 'react'; // Importing the useContext hook
import { ProductContext } from "../../Context/ProductContext"; // Importing the ProductContext
import "../Item/Item.css"; // Importing the CSS file for styling
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom

/* Item component */
const Item = ({ id, title, image, price, description, category }) => {

  // Accessing addToCart function from ProductContext
  const { addToCart } = useContext(ProductContext);

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    addToCart({ id, title, category, image, price, description });
  };

  // Truncate description to show only first 5 words
  const truncatedDescription = description.split(' ').slice(0, 5).join(' ');
  const displayDescription = description.length > 5 ? truncatedDescription + '...see more' : description;

  // Truncate title to show only first 3 words
  const truncatedTitle = title.split(' ').slice(0, 3).join(' ');
  const displayTitle = title.length > 3 ? truncatedTitle + '' : title;

  return (
    <div className="product-card">
      {/* Link to product details */}
      <Link to={`/product/${id}`}>
        {/* Product image */}
        <img onClick={window.scrollTo(0,0)} src={image} alt={title} />
      </Link>
      {/* Product information */}
      <div className="product-info">
        {/* Link to product details */}
        <Link to={`/product/${id}`} style={{textDecoration:'none'}}>
          {/* Product title */}
          <h2>{displayTitle}</h2>
        </Link>
        {/* Product category */}
        {/*<p>Category: {category}</p>*/}
        {/* Link to product details */}
        <Link to={`/product/${id}`} style={{textDecoration:'none'}}>
          {/* Product description */}
          <p>{displayDescription}<span className='dots'>...</span></p>
        </Link>
        {/* Product price */}
        <p className="price">${price}</p>
      </div>
      {/* Button to add item to cart */}
      <button className='item-btn' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

/* Exporting the Item component */
export default Item;


