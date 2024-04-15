import React, { Component } from "react";

import NavBar from "./NavBar"
import CustomerList from "./customerList";
import TableDate from "./tableComonent";
import ShoppingCart from  "./shoppingCart";
import Increment from "./increment";
import TestUseEffect from "./testUseEffect";


import TwoWayDataBinding from "./twoWayDataBinding";
import ConditionalRendering from "./conditionalRendering";
import Home from "./home";
import About from "./about";
import Login from "./loggin";
import Logout,{ChganePassword,ChganeUserName} from "./logout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pageNotFound";
import List from "./listAndKeys";
import UseRef from "./useRefExample";


export default class App extends Component {
  render() {
    return (
     
      // <>
      // <Home></Home>
      // <About/>
      // </>
      //  <h1>ff</h1>
        // <BrowserRouter>
        //    <ConditionalRendering />
           
        //     <Routes>
        //          <Route exact path="/" element={<Home/>} />
                 
        //          <Route path="/about" element={<About/>} />
        //          <Route path="/login/:id/:custid" element={<Login/>} />
        //          <Route path="/logOut" element={<Logout/>} >
        //                 <Route path="chganePassword" element={<ChganePassword />} />
        //                 <Route path="ChganeUserName" element={<ChganeUserName />} />
        //           </Route>
        //           <Route path="*" element={<PageNotFound />} />
                  
        //     </Routes>
        // </BrowserRouter>
         <UseRef />
        
        
      
    );
  }
}
