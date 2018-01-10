import React, { Component } from 'react';
import Foundation, { Menu, MenuItem, Alignments, ButtonGroup, Link as ButtonLink} from 'react-foundation';

class MenuComponent extends Component {
  render(){
    return(
      <div className="menu">
      <div className="menu-header">
        <h4>Menu</h4>
      </div>
      <ButtonGroup>
        <ButtonLink isExpanded>One</ButtonLink>
        <ButtonLink isExpanded>Two</ButtonLink>

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
