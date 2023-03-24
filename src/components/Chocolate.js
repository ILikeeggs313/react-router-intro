import React from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
// import '../style/Chocolate.css';

function Chocolate() {
  return (
    <div>
      <img className="chocolate-bar"
        src="https://media.giphy.com/media/dOfZNxdeIKMgg/giphy.gif"
        alt="Chocolate bar animation."
      />
      <div className="link-block">
        <h3>Sweet chocolate bar! Yummmm!</h3>
        <h4>How many would you like?</h4>
        <Counter />
        <Link to="/">Back to machine</Link>
      </div>
    </div>
  );
}

export default Chocolate;