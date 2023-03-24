import React from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
// import '../style/Soda.css';

const Soda = () => {
  return (
    <div>
      <img className="soda"
        src="https://media.giphy.com/media/26BRNvGqtlcPlA5DG/giphy.gif"
        alt="Pepsi exploding everywhere."
      />
      <div className="link-block">
        <h3>This has way too much sugar! Stop drinking soda!</h3>
        <h4>How many would you like?</h4>
        <Counter />
        <Link to="/">Back to machine</Link>
      </div>
    </div>
  );
}

export default Soda;