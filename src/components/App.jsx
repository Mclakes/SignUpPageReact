import React from "react";
import Login from "./Login.jsx";

const currentTime = new Date(2019, 1, 1, 13).getHours();
console.log(currentTime);

var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {
        //Ternary
        //  isLoggedIn ? <h1>Hello</h1> : <Login />
        //AND Operator
        // currentTime>12 && <h1>why are you still working?</h1>
      }
    </div>
  );
}

export default App;
