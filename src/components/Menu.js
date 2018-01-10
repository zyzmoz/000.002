import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Foundation, { Menu, MenuItem, Alignments, ButtonGroup, Link as ButtonLink} from 'react-foundation';

class MenuComponent extends Component {
  render(){
    return(
      <div className="menu">
      <div className="menu-header">
        <h4>Menu</h4>
      </div>
      <ButtonGroup>
        <Link className="button expanded" to="/">Zero</Link>
        <Link className="button expanded" to="/products">One</Link>
        <Link className="button expanded" to="/">Two</Link>

      </ButtonGroup>
      </div>
    )
  }
}

export default MenuComponent;

/*
Clientes
Produtos
*/
