import React from 'react';
import ReactDOM from 'react-dom';
//Import Pages
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import MenuComponent from './components/Menu';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Foundation from 'react-foundation';
import './assets/css/master.css';
import './assets/css/menu.css';
import './assets/css/foundation.css';


ReactDOM.render(
  <BrowserRouter>
    <div className="wrapper grouping">
      <MenuComponent />
      <Route exact path="/" component={MainPage} />
      <Route path="/products" component={ProductsPage} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
