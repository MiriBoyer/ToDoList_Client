
import { Routes, Route } from "react-router-dom";
import React, { Component }  from 'react';

import Login from "./Login";
import App2 from "./App2";
import Register from "./Register";

function  RoutesArr(){
    
    
    
    
    return(
        <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register"    element={<Register></Register>} />
        <Route path="/" element={<App2></App2>} />
      </Routes>
    )
}

export default RoutesArr;