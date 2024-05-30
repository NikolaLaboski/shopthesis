import { Link } from "react-router-dom";
import "../LandingPage/Landing.css"


const Landing = () => {
  return (
    /* Landing page container */
    <div className="landing-page">
      {/* Background overlay */}
      <div className="background"></div>
      {/* Content section */}
      <div className="content">
        {/* Text section */}
        <div className="text-section">
          {/* Welcome heading */}
          <h2>Welcome to</h2>
          {/* Main heading */}
          <h1>ShopGuru.</h1>
          {/* Description */}
          <p>Your one-stop shop for everything from electronics, jewelry, to the latest clothing fashion goods.</p>
          <p> Find whatever you need with the convenience of a click.</p>
          {/* CTA for checking new collection */}
          <h2>About Me</h2>
          <button className="landing-button" ><Link to="/aboutme" >CHECK</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Landing;


