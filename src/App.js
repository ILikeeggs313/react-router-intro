import logo from './logo.svg';
import './App.css';
import VendingMachine from './components/VendingMachine';
import Chips from './components/Chips';
import Chocolate from './components/Chocolate';
import React from "react";
import { Route, BrowserRouter} from "react-router-dom";
import NavBar from './components/Navbar';
import Soda from "./components/Soda"
import { withRouter } from 'react-router-dom';

function App() {
  return (
    <div>
         <BrowserRouter>
            <NavBar />
            <Route exact path = "/" component = {withRouter(VendingMachine)}>
              <VendingMachine />
            </Route>
            <Route exact path = "/soda" element = {<Soda />}>
              <Soda />
            </Route>
            <Route exact path = "/chocolate" element = {<Chocolate />}>
              <Chocolate />
            </Route>
            <Route exact path = "/chips" element = {<Chips />}>
              <Chips />
            </Route>

         </BrowserRouter>
    </div>
  );
}

export default App;
