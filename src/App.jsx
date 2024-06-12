import React, { Component, Suspense, lazy } from "react";

import NavBar from "./NavBar"
import CustomerList from "./customerList";
import TableDate from "./tableComonent";
import ShoppingCart from  "./shoppingCart";
import Increment from "./increment";
import TestUseEffect from "./testUseEffect";


import TwoWayDataBinding from "./twoWayDataBinding";
import ConditionalRendering from "./conditionalRendering";
// import Home from "./home";
// import About from "./about";
// import Login from "./loggin";

import Logout,{ChganePassword,ChganeUserName} from "./logout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pageNotFound";
import List from "./listAndKeys";
import UseRef from "./useRefExample";

import CustomeHook from "./customeHookExample";
import PropsDrilling from "./propsDrillingExample";
import UseMemo1 from "./useMemo1";
import UseMemo2 from "./useMemo2";
import Parent from "./chilfToParentCommParent";
// import Form from "./form1";
import AxiosExample from "./axiosExample1"
import LazyLoading from "./lazyloading"
import HighOrderComponent from "./highOrderComponet"
let Home=lazy(()=>import("./home"));
let About=lazy(()=>import("./about"));
let Login=lazy(()=>import("./loggin"));

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
        //    <Suspense>
           
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
        //     </Suspense> 
        // </BrowserRouter>  //this is the example Routing ,nested routing and query and routeparameters exmaple
        //  <UseRef />    //this is the example for use ref 
        // <CustomeHook />   //here i create custome hook for api calling
        // <PropsDrilling />   //here i did props drilling and useContext
        
        // <UseMemo1 />
        // <UseMemo2 />
        // <Parent />  //we are doing here todo list by sending data from child to parent
        // <Form /> //basic form example using useState and useRef
        // <AxiosExample />  //example of how to use axios library
        // <LazyLoading />  //lazy loading using conditional rendering
        <HighOrderComponent />
    );
  }
}
