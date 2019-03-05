import React from 'react'
import nature from '../images/nature.jpg'
import './Header.css'
import Nav from './Nav'

class Header extends React.Component {
  render() {
    return (
      <div className="background-image">
        <Nav />
        <div className="navbar-slogan">
          <h2>
            <div className="div-up">Yeti</div> this <div className="div-down">and</div> that <div className="div-up">..!</div>
          </h2>
        </div>
        <div className="move">
          <div className="circle1"><h1></h1></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
        </div>
      </div>
    )
  }
}

export default Header
