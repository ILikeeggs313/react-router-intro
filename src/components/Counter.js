import React, { useState } from "react";
// import '../style/Counter.css';

const Counter = () => {
    //implement a basic counter through useState
    const [num, setNum] = useState(0);
    //if there is no bags of chips, hide the left arrow
    const hideLeftArrow = num === 0 ? "hidden" : "";

    const incrementCounter = () => {
        setNum(num + 1);
    }

    const decrementCounter = () => {
        setNum(num - 1);
    }

    return (
        <div className="Counter">
            <button className={`fassfa-plus ${hideLeftArrow}`}
            onClick={incrementCounter}></button>
            <h2>{num}</h2>
            <button className={`fas-fa-minus ${hideLeftArrow}`}
            onClick={decrementCounter}></button>
        </div>
    );
}

export default Counter;
