import { createContext, useState, useEffect } from 'react'; // Import necessary hooks and functions from React

const CART_STORAGE_KEY = 'cartItems'; // Key for storing cart items in localStorage

const ProductContext = createContext(); // Create a context for product data and cart management

const ProductProvider = ({ children }) => { 
  // Define a provider component to manage product data and cart state
  const [products, setProducts] = useState([]); // State to hold the list of products
  const [cartItems, setCartItems] = useState(() => { 
    // State to hold the items in the cart, initialized from localStorage
    const storedCartItems = localStorage.getItem(CART_STORAGE_KEY); 
    // Retrieve stored cart items from localStorage
    return storedCartItems ? JSON.parse(storedCartItems) : {}; 
    // Parse stored cart items or initialize as an empty object if none found
  });

  useEffect(() => { 
    // Fetch products from the API when the component mounts
    const fetchProducts = async () => { 
      try {
        const response = await fetch('https://fakestoreapi.com/products'); 
        // Fetch products from the Fake Store API
        const data = await response.json(); 
        // Parse the response JSON data
        setProducts(data); 
        // Set the fetched products to the state
      } catch (error) {
        console.error('Error fetching products:', error); 
        // Log any errors that occur during the fetch
      }
    };

    fetchProducts(); 
    // Call the function to fetch products
  }, []); 
  // Empty dependency array ensures this effect runs only once when the component mounts

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems)); 
    // Store the cart items in localStorage whenever they change
  }, [cartItems]); 
  // Dependency array includes cartItems, so this effect runs whenever cartItems changes

  const addToCart = (product) => {
    setCartItems((prevCart) => { 
      // Update the cart items state
      const updatedCart = { ...prevCart }; 
      // Create a copy of the previous cart items
      if (updatedCart[product.id]) {
        updatedCart[product.id] = { ...updatedCart[product.id], quantity: updatedCart[product.id].quantity + 1 }; 
        // If the product is already in the cart, increase the quantity by 1
      } else {
        updatedCart[product.id] = { ...product, quantity: 1 }; 
        // If the product is not in the cart, add it with quantity 1
      }
      return updatedCart; 
      // Return the updated cart
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCart) => { 
      // Update the cart items state
      const updatedCart = { ...prevCart }; 
      // Create a copy of the previous cart items
      if (updatedCart[productId]) {
        if (updatedCart[productId].quantity > 1) {
          updatedCart[productId].quantity -= 1; 
          // If the product quantity is greater than 1, decrease it by 1
        } else {
          delete updatedCart[productId]; 
          // If the product quantity is 1, remove it from the cart
        }
      }
      return updatedCart; 
      // Return the updated cart
    });
  };

  const clearCart = () => {
    setCartItems({}); 
    // Clear all items from the cart
  };

  const getTotalCartAmount = () => {
    return Object.values(cartItems).reduce((total, item) => total + item.price * item.quantity, 0); 
    // Calculate the total amount in the cart by summing the price * quantity of each item
  };

  const contextValue = {
    products, 
    // Provide the list of products
    cartItems, 
    // Provide the cart items
    addToCart, 
    // Provide the function to add items to the cart
    removeFromCart, 
    // Provide the function to remove items from the cart
    getTotalCartAmount, 
    // Provide the function to calculate the total cart amount
    setCartItems, 
    // Provide the function to set cart items directly
    clearCart 
    // Provide the function to clear the cart
  };

  return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>; 
  // Return the provider component with the context value and children
};

export { ProductContext, ProductProvider }; 
// Export the context and provider for use in other components


