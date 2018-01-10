import React from 'react';
import ReactDOM from 'react-dom';
//Import Pages
import MainPage from './pages/MainPage';
import MenuComponent from './components/Menu';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Foundation from 'react-foundation';

import './assets/css/foundation.css';


ReactDOM.render(
  <BrowserRouter>
    <div className="grid-container">
      <MenuComponent />
      <Route exact path="/" component={MainPage} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
