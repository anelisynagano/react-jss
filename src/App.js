import React from "react";
// import here injectSheet from react-jss library

// create a variable styles and create a stylesheet for the following classes and apply the properties:
// - list: display: flex; list-style-type: none; (tip: don't forget to camelCase the property!)
// - title: color: #39424e;


function App() {

  return (
    // add the correct className values to your ul and h1 tags
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
      <h1>React JSS!</h1>
      <p>This is an example of React JSS</p>
    </div>
  );
}

// don't forget to wrap your component with the imported injectSheet!
export default App;
