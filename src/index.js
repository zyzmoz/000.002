import './assets/css/foundation.css';
import React from 'react';
import ReactDOM from 'react-dom';
//Import Pages
import MainPage from './pages/MainPage';
import Menu from './components/Menu';
import { BrowserRouter, Route, Link } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <div className="grid-container">
      <Menu />
      <Route exact path="/" component={MainPage} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
