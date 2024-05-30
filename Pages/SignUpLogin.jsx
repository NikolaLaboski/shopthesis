/* Importing necessary hooks and CSS */
import { useState } from 'react'; // Importing useState hook from React
import "../Pages/CSS/SignUpLogin.css"; // Importing CSS file for styling

/* Defining the SignUpLogin component */
const SignUpLogin = () => {
  const [isLogin, setIsLogin] = useState(true); // Initializing state for login status and setting it to true initially
  const [formData, setFormData] = useState({ // Initializing state for form data
    email: '', // Initializing email field
    password: '', // Initializing password field
    name: '' // Initializing name field
  });

  /* Function to toggle between login and sign up forms */
  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggling the value of isLogin state
  };

  /* Function to handle changes in form fields */
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructuring name and value from event target
    setFormData({ // Updating form data state based on field changes
      ...formData,
      [name]: value // Updating the corresponding field with the new value
    });
  };

  /* Function to handle form submission */
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing default form submission behavior
    if (isLogin) {
      // Handle login logic
      console.log('Logging in with:', formData); // Logging form data for login
    } else {
      // Handle sign-up logic
      console.log('Signing up with:', formData); // Logging form data for sign-up
    }
  };

  /* Rendering the login or sign up form based on isLogin state */
  return (
    <div className="login-signup-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2> {/* Displaying appropriate heading based on login status */}
      <form onSubmit={handleSubmit} className="login-signup-form">
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required={!isLogin}
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          {isLogin ? 'Login' : 'Sign Up'} {/* Displaying appropriate button text based on login status */}
        </button>
      </form>
      <button onClick={toggleForm} className="toggle-btn">
        {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'} {/* Displaying appropriate toggle button text based on login status */}
      </button>
    </div>
  );
};

export default SignUpLogin; // Exporting the SignUpLogin component as default


