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
          <h2>
            <div className="div-up">Yeti</div> this{' '}
            <div className="div-down">and</div> that{' '}
            <div className="div-up">..!</div>
          </h2>
          <button className="header-button" onClick={this.scrollView}>
            Click Me!
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
