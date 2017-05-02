import React from 'react';
import ReactBootstrap from 'react-bootstrap';

let Navbar = ReactBootstrap.Navbar;
let HeaderPage = ReactBootstrap.Navbar.Header;
let Brand = ReactBootstrap.Navbar.Brand;
let Toggle = ReactBootstrap.Navbar.Toggle;
let Collapse = ReactBootstrap.Navbar.Collapse;
let Nav = ReactBootstrap.Nav;
let NavItem = ReactBootstrap.NavItem;

const Header = React.createClass({
  render() {
    return (
<header id="header">
  <Navbar default collapseOnSelect >

    <HeaderPage>
      <Brand>
          <a href="/">
            <img src='img/logo/logo.png'/>
          </a>
      </Brand>
      <Toggle />
    </HeaderPage>



    <Collapse>
      <Nav pullRight >
        <NavItem eventKey={1} href="/"> Portfolio </NavItem>
        <NavItem eventKey={2} href="/"> Contact </NavItem>
      </Nav>
    </Collapse>

  </Navbar>
</header>
    );
  },

});

export default Header;
