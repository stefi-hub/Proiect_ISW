import React from 'react';
import Login from './Login';
import Register from "./register"; // Capitalize the component name

function App() {
  return (
    <div className="App">
      <Login />
      <Register /> {/* Use JSX syntax to render the Register component */}
    </div>
  );
}

export default App;
