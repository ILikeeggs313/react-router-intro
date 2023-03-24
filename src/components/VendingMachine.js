import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import MachineImage from '../images/virtual-vending-machines.png';
// import '../style/VendingMachine.css';
import NavBar from './Navbar';

const VendingMachine = () => {
    return (
        <div className="container">
            <h1>Welcome to the virtual vending machine!</h1>
            {/* <img className="vending-machine" src={MachineImage} alt="Vending machines" /> */}
            <div className="greet-text-block">
                <h3>Hello! I'm a virtual vending machine. What would you like to eat?</h3>
            </div>
            <div className="link-block">
                <h4>Make a choice:</h4>

                    <Link exact to="/soda">Soda</Link>
                    <Link exact to="/chips">Chips</Link>
                    <Link exact to="/chocolate">Chocolate</Link>
            </div>
        </div>
    )
}

export default VendingMachine;
