// Importing necessary modules and components
import { useContext, useState } from 'react';
import { ProductContext } from "../Context/ProductContext";
import "../Pages/CSS/Category.css"; // Importing CSS file for styling
import Item from "../Components/Item/Item"; // Importing Item component

const Category = (props) => {
  // Using useContext hook to access the product context
  const { products } = useContext(ProductContext);
  // Setting up state variables for visible products and sort order
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [sortOrder, setSortOrder] = useState('asc');

  // Filtering products based on the category prop
  const filteredProducts = products.filter(item => item.category === props.category);

  // Sorting the filtered products based on the sort order
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  // Function to load more products
  const loadMoreProducts = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 12);
  };

  // Function to toggle sort order
  const toggleSortOrder = () => {
    setSortOrder(prevSortOrder => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  // Logging information for debugging
  console.log('Products in Category component:', products);
  console.log('Category prop:', props.category);

  // Displaying loading message if products array is not an array
  if (!Array.isArray(products)) {
    return <div>Loading...</div>;
  }

  // Rendering the Category component
  return (
    <div className="category">
      <img src={props.banner} alt="Category Banner" /> {/* Displaying category banner */}
      <div className="category-index">
        <p>
          <span>Show 1-{Math.min(visibleProducts, sortedProducts.length)} of {sortedProducts.length} products</span>
        </p>
        <div className="category-sort">
          <button onClick={toggleSortOrder}>
            Sort by price: {sortOrder === 'asc' ? 'From lowest' : 'From highest'} {/* Displaying sort order */}
          </button>
        </div>
      </div>
      <div className="category-products">
        {/* Mapping through sorted products and displaying Item component */}
        {sortedProducts.slice(0, visibleProducts).map(item => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.category}
            image={item.image}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
      {/* Displaying Load more button if visible products are less than total sorted products */}
      {visibleProducts < sortedProducts.length && (
        <div className="category-seemore">
          <button onClick={loadMoreProducts}>Load more</button>
        </div>
      )}
    </div>
  );
};

export default Category;





