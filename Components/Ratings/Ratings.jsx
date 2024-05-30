import { useState } from 'react'; // Importing the useState hook from React
import "../Ratings/Ratings.css"; // Importing the CSS file for styling

const Ratings = () => {
  // Initializing the state variable 'rating' with a default value of 0
  const [rating, setRating] = useState(0);

  // Function to handle the rating click and update the 'rating' state
  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="description-box">
      {/* Title of the section */}
      <h2>What is an Online Store?</h2>
      
      {/* Description about what an online store is */}
      <p>An online store is a website or an application that allows consumers to buy goods or services directly from a seller over the internet. It provides a convenient way for people to shop from anywhere and at any time.</p>
      
      <div className="rating">
        {/* Heading for the rating section */}
        <h3>Rate this product:</h3>
        
        <div className="rating-stars">
          {/* Rendering 5 stars for rating, updating the class based on the rating state */}
          {[1, 2, 3, 4, 5].map((star) => (
            <span 
              key={star} 
              className={star <= rating ? "star filled" : "star"} // Conditional class assignment
              onClick={() => handleRating(star)} // Handling the click event to set the rating
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ratings; // Exporting the Ratings component as default

