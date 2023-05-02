import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";



axios.defaults.baseURL="http://localhost:5024";
axios.interceptors.request.use(req=>{console.log(req);
    return req;
});
ReactDOM.render(

    <BrowserRouter>

<App />

</BrowserRouter>


, document.getElementById('root'));