import React from "react";
import {Switch, Route } from 'react-router-dom';
import Register from "./pages/authorization/Register";
import Login from "./pages/authorization/Login";
import Home from "./pages/Home";
import Header from "./Components/Nav/Header";
const App = () => {
  return(
    <>
    <Header />
  <Switch>
    <Route exact  path ="/" component ={Home}/>
    <Route exact path ="/login" component ={Login}/>
    <Route exact path ="/register" component ={Register}/>
  </Switch>
  </>
);
};

export default App;
