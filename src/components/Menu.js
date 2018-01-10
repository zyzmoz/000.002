import React, { Component } from 'react';
import Foundation, { Menu, MenuItem, Alignments} from 'react-foundation';

class MenuComponent extends Component {
  render(){
    return(
      <div className="menu-item-alignment-example">
      <Menu className="no-bullet" alignment={Alignments.RIGHT}>
      <MenuItem><a>One</a></MenuItem>
      <MenuItem><a>Two</a></MenuItem>
      <MenuItem><a>Three</a></MenuItem>
      <MenuItem><a>Four</a></MenuItem>
    </Menu>
      </div>
    )
  }
}

export default MenuComponent;

/*
Clientes
Produtos
*/
