/* Importing components for the Home page */

import Discount from "../Components/Discount/Discount"; // Importing the Discount component
import Landing from "../Components/LandingPage/Landing"; // Importing the Landing component
import MostSelled from "../Components/MostSelled/MostSelled"; // Importing the MostSelled component
import NewProduct from "../Components/NewCollection/NewProducts"; // Importing the NewProduct component
import Subscribe from "../Components/Subscribe/Subscribe"; // Importing the Subscribe component

/* Defining the Home component */
export const Home = () => {
  return (
    <div>
      <Landing /> {/* Rendering the Landing component */}
      <NewProduct /> {/* Rendering the NewProduct component */}
      <Discount /> {/* Rendering the Discount component */}
      <MostSelled /> {/* Rendering the MostSelled component */}
      <Subscribe /> {/* Rendering the Subscribe component */}
    </div>
  );
};
