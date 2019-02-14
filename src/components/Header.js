import React from 'react';
import nature from '../images/nature.jpg';
import './Header.css'
import Nav from './Nav';

class Header extends React.Component {

  render(){
    return(
      <div className="background-image">
        <Nav/>
        <div className="navbar-slogan">
          <h2>Yeti this and that...</h2>
        </div>
      </div>
    )
  }
}

export default Header;
