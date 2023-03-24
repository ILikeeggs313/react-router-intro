import React from "react";
import { NavLink } from "react-router-dom";
// import "../style/NavBar.css";
// import Chips from "./Chips";
// import Soda from "./Soda";
// import Chocolate from "./Chocolate";
// import VendingMachine from "./VendingMachine";

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink  to="/">
                home
            </NavLink>
            <NavLink  to="/soda">
                soda
            </NavLink>
            <NavLink  to="/chips">
                chips
            </NavLink>
            <NavLink  to="/chocolate">
                chocolate
            </NavLink>
        </nav>
    );
}

export default NavBar;