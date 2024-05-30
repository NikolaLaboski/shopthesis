import { useState } from 'react';
import '../Subscribe/Subscribe.css'; // Import the CSS file for styling

const Subscribe = () => {
  // Declare a state variable to store the email input value
  const [email, setEmail] = useState('');

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Implement the logic to handle the subscription
    console.log('Subscribed with email:', email);
    // Clear the input field after submission
    setEmail('');
  };

  return (
    // Main container for the subscription section
    <div className="subscribe">
      <div className="subscribe-container">
        {/* Title of the subscription section */}
        <h2 className="subscribe-title">Subscribe to Our Newsletter</h2>
        {/* Description of the subscription benefits */}
        <p className="subscribe-description">
          Stay updated with our latest news and promotions. Join the best newsletter that you never knew you needed. You will get 3 emails per week containing new collections with product launches, giveaways and discounts.
        </p>
        {/* Subscription form */}
        <form onSubmit={handleSubmit} className="subscribe-form">
          {/* Email input field */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="subscribe-input"
            required // Make the input field required
          />
          {/* Submit button */}
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;



