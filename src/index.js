import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/Home';
import Store from './components/Store';
import Product from './components/Product';
import NoMatch from './components/NoMatch';
import About from './components/About';
ReactDOM.render(

  <BrowserRouter>
    <Routes>

      <Route path='/' element={<App />}>
        <Route index element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/store' element={<Store />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
 </Route>

     

    </Routes>
  </BrowserRouter>

  ,
  document.getElementById('root')
);
