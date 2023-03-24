import React from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
// import '../style/Chips.css';

const Chips = () => {
  return (
    <div>
      <img className="chips"
        src="https://media.giphy.com/media/3tY1ZlfM10AtPX6AwW/giphy.gif"
        alt="Exploding bag of chips."
      />
      <div className="link-block">
        <h3>This is some spicy jalapeno chips!</h3>
        <h4>How many would you like?</h4>
        <Counter />
        <Link to="/">Back to machine</Link>
      </div>
    </div>
  );
}

export default Chips;