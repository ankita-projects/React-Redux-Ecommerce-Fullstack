import React from "react";
import {Switch, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Register from "./pages/authorization/Register";
import Login from "./pages/authorization/Login";
import Home from "./pages/Home";
import Header from "./Components/Nav/Header";
import RegisterComplete from "./pages/authorization/RegisterComplete";

const App = () => {
  return(
    <>
    <Header />
    <ToastContainer />
  <Switch>
    <Route exact  path ="/" component ={Home}/>
    <Route exact path ="/login" component ={Login}/>
    <Route exact path ="/register" component ={Register}/>
    <Route exact path ="/register/complete" component ={RegisterComplete}/>
  </Switch>
  </>
);
};

export default App;
