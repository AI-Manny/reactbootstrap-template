import React from 'react';
import ReactBootstrap from 'react-bootstrap';

let Navbar = ReactBootstrap.Navbar;

const Footer = React.createClass({
  render() {
    return (
      <footer >

        <Navbar className="footer" fixedBottom>

          &copy; Copyright 

        </Navbar>

      </footer>
    );
  },
});

export default Footer;
