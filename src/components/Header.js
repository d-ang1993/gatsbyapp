import React from 'react'
import nature from '../images/nature.jpg'
import './Header.scss'
import Nav from './Nav'

class Header extends React.Component {
  scrollView = e => {
    e.preventDefault()
    console.log(e.target)
    document.getElementById('portfolio').scrollIntoView()
  }

  render() {
    return (
      <div className="background-image">
        <Nav />
        <div className="navbar-slogan">
          <h1>
            <h1>Hi. My name is <span>Daniel</span></h1>
            <h1><span>Venture</span> below and get to know me more!</h1>
          </h1>
          <button className="header-button" onClick={this.scrollView}>
            View More!
          </button>
        </div>
        <div className="move">
          <div className="stars" />
          <div className="stars2" />
          <div className="stars3" />
        </div>
      </div>
    )
  }
}

export default Header
