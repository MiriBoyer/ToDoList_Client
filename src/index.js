import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

console.log("111111111");
console.log(process.env.REACT_APP_BASE_URl)
 axios.defaults.baseURL=process.env.REACT_APP_BASE_URl;
//axios.defaults.baseURL="https://todolist-server-2469.onrender.com";
axios.interceptors.request.use(req=>{console.log(req);
                                     console.log("2222222222222);
                                     console.log(process.env.REACT_APP_BASE_URl);
    return req;
});
ReactDOM.render(

    <BrowserRouter>

<App />

</BrowserRouter>


, document.getElementById('root'));
