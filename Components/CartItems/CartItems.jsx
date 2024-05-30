import { useContext } from 'react'; // Import useContext hook from React
import { ProductContext } from '../../Context/ProductContext'; // Import ProductContext to access cart state and actions
import "../CartItems/CartItems.css"; // Import CSS file for styling

const CartItems = () => {
  // Use the ProductContext to get cart items and actions
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(ProductContext);

  // Function to handle increasing the quantity of a product in the cart
  const handleIncreaseQuantity = (productId) => {
    addToCart(cartItems[productId]); // Add the product to the cart
  };

  // Function to handle decreasing the quantity of a product in the cart
  const handleDecreaseQuantity = (productId) => {
    removeFromCart(productId); // Remove the product from the cart
  };

  // Function to calculate the total sum of all items in the cart
  const getTotalSum = () => {
    let totalSum = 0; // Initialize total sum to 0
    // Iterate over each cart item to calculate the total price
    Object.values(cartItems).forEach((item) => {
      totalSum += item.price * item.quantity; // Add the item's total price to the total sum
    });
    return totalSum.toFixed(2); // Return the total sum rounded to 2 decimal places
  };

  // Function to handle the proceed to payment action
  const handleProceedToPayment = () => {
    alert('Redirecting to payment gateway...'); // Display a placeholder alert for payment action
  };

  return (
    <div className="cart-container">
      <h2>Cart Items</h2>
      
      {Object.values(cartItems).map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} className="cart-item-image" />
          <div className="cart-item-details">
            <h3>{item.title}</h3>
            <p className="cart-item-price">Price: ${item.price}</p>
            <div className="quantity-controls">
              <button onClick={() => handleDecreaseQuantity(item.id)} className="quantity-btn">-</button>
              <span className="quantity">{item.quantity}</span>
              <button onClick={() => handleIncreaseQuantity(item.id)} className="quantity-btn">+</button>
            </div>
            <p className="cart-item-total">Total: ${item.price * item.quantity}</p>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <button className="payment-btn" onClick={handleProceedToPayment}>Proceed to Payment</button>
        <p className="total-amount">Total Amount: ${getTotalSum()}</p>
      </div>
      <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartItems;
