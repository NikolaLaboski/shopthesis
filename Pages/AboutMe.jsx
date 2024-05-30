import "../Pages/CSS/AboutMe.css"

const AboutMe = () => {
  return (
    <div className="about-us-container">
      <h1>About Me</h1>
      <p>Hello, my name is Nikolche Laboski, I am interested in 
         Front-end development and data analytics, I tend to create successful, responsive,
         stylish and easy to use web apps. Currently I accept freelance work but i would 
         like to get the opportunity to work in a team. I am a part-time student at 
         St. Kliment Ohridski university in Bitola and this project is my diploma thesis.
         Through my freelance experience I developed and maintained web sites and wrote
         blog articles using WordPress. I helped clients to manage their businesses, 
         mainly Affiliate Marketing using Admitad affiliate program and selling AliExpress
         products using the alidropship WordPress plugin. Also developed and maintained
         a web site using Joomla, mainly marketing web sites that were offering the clients
         to promote their businesses online. Updated the websites daily with the newest 
         offers and banners that our clients had in that moment. I developed and maintained
         a vanilla JavaScript user friendly blog website, wrote articles weekly, 
         updated the website using FileZilla.
      </p>
        <h3>Skills</h3>
        <p className="skills-margin">
        Web technology: HTML5, CSS3, SAAS, JavaScript ES5/ES6.
        Frameworks: Bootstrap, React JS.
         </p>
         <p>
        Web layout models: Flexbox, CSS Grid, Media Queries.
        </p>
        <p>
        Version Control System: Git.
        </p>
        <p>
        Development Environment: Visual Studio Code.
        </p>
       
       <a href="https://nikolalaboski.github.io/PortfolioWebsite/"><h2 className="portfolio">Link to my portfolio website</h2></a>

      <h2>About the project</h2>
      <p className="skills-margin">This is a Front-End Ecommerce diploma thesis project. In the code we have a navigation bar with a website logo 
        - SHOPGURU, and pages like login page and a cart. In the navigation bar we can navigate to different shop 
        categories. Next we have a landing page with some welcome - text, a small site description and a button with a 
        link to some products collection. After that we have a collection of products with a few options like adding them
        to the cart, clicking on the product and seing product details with a description about the product, category 
        and price. Next we have a discount component with a video background and a button that generates a discount code 
        when clicked. Then we have another collection of products, a subscribe to our newsletter component and a footer 
        with my contact, address, about me page and category navigation. The cart shows the image of the product, 
        the category, the price, the total amount, a button to clear the cart and increase or decrease products. 
        In the cart I have also added a payment button that generates a message.</p>
        <h3>Why React JS</h3>
        <p className="skills-margin">React is a JavaScript library for building user interfaces. React was developed at Facebook in 2011 and 
          currently it is the most popular JS library. When it comes to React it’s all about components. You can think 
          of components as independent chunks of user interfaces. The benefit of the component is that you can build a 
          bunch of independent, isolated and most importantly reusable user interfaces that you can run, piece it together
          and as a result build even super complex apps. The app can have as many components as you’d like but it will 
          always have at least one root component. Changing logic or layout in one component will not break the 
          whole app. In terms of implementation a component is typically implemented as a JavaScript class that has some
          state and a render method. The state is the data that we want to display when the component is rendered and 
          the render method is responsible for describing what the UI should look like. The output of this render method
          is a react element that which is a simple JavaScript object that maps to a DOM element. It’s not a real DOM 
          element it’s just a virtual representation of the actual DOM tree. When you first render a react component, 
          React constructs a virtual representation of the DOM, known as the virtual DOM.  When the state or props of 
          a component change, React generates a new version of the virtual DOM tree by re-rendering the component and 
          its children. React then compares the newly generated virtual DOM with the previous one to determine the 
          differences, it identifies which parts of the virtual DOM have changed, added or removed since the previous 
          render. Then, React updates the actual DOM to reflect the changes in the virtual DOM but instead of updating
          the entire DOM tree, it only updates the necessary changes, optimizing performance. So we no longer have to
          work with the DOM API in browsers like with Vanilla JS, we simply change the state of a component and React
          will automatically update the DOM to match that state and that’s exactly why this library is called React, 
          because when the state changes, react essentially reacts to the state change and updates the DOM.</p>
          <h3 className="skills-margin">Details for the code</h3>
          <p className="skills-margin">Every file code is commented out but here is a short brief of what i have used. First of all in the navigation
            bar i have React Router which is a standard library for routing in React applications. It enables navigation 
            among views of various components in a React application, allows changing the browser URL, 
            and keeps the UI in sync with the URL. To wrap the routes and enable navigation we have Router, 
            and with Routes we define the paths in our application and map them to components. We use Link to create 
            navigable links in your application.
          </p>
          <p>To manage the global state, such as the current product information i have used Product context, 
            which provides a way to pass data through the component tree without having to pass props down manually
             at every level. That way we avoid prop drilling. Prop drilling is the process of passing data from a parent 
             component to a deeply nested child component through several intermediary components that do not need the 
             data themselves. This can make the code harder to maintain and understand.  
          </p>
          <p>
            I have also used Local Storage which is a Web API that allows you to store data in the browser, so it persists even
             after the browser is closed and reopened. It is useful for saving user preferences, tokens, or other 
             information that needs to be retained between sessions.
          </p>
          <p>In the CSS code I have used standard CSS and Flexbox as a layout model to center and align the items.</p>
    </div>
  );
};

export default AboutMe;
