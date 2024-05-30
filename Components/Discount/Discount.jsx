import { useState } from "react"; // Importing the useState hook from React
import "../Discount/Discount.css" // Importing the CSS file for styling

const Discount = () => { // Defining the Discount component
  const [discount, setDiscount] = useState(null); // Initializing state for discount using the useState hook

  const generateDiscount = () => { // Function to generate a random discount code
    const randomNum = Math.floor(1000 + Math.random() * 9000); // Generating a random 4-digit number
    setDiscount(randomNum); // Updating the discount state with the generated number
  };

  return ( // Returning the JSX for the Discount component
    <div className="discount-container"> {/* Container for the discount component */}
      <video autoPlay loop muted className="background-video"> {/* Background video */}
        <source src="https://videos.pexels.com/video-files/5658299/5658299-uhd_4096_2160_25fps.mp4" type="video/mp4" /> {/* Video source */}
      </video>
      <div className="overlay"></div> {/* Overlay for the video */}
      <div className="content"> {/* Content section */}
        <h2>Click on the button and generate your discount coupon</h2> {/* Heading */}
      </div>
      <button onClick={generateDiscount}>Click here</button> {/* Button to generate discount */}
      {discount && <p>Your discount code is: {discount}</p>} {/* Displaying discount code if generated */}
    </div>
  );
};

export default Discount; // Exporting the Discount component


