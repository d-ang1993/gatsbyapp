import React from 'react'
import './Nav.css'
import { Link } from 'gatsby'
import { FaFortAwesome } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaObjectGroup } from 'react-icons/fa'
import { GiMegabot } from 'react-icons/gi'

class Nav extends React.Component {
  render() {
    const {
      top,
      scroll,
      home,
      about,
      portfolio,
      contact,
      width,
      hover,
    } = this.props
    // console.log(top)
    // console.log("this is scroll:")
    // console.log(scroll)
    // let className='navbar';
    // if (fixedNav === true) {
    //   className += ' fixed'
    // } else if (fixedNav === false) {
    //   className = 'navbar';
    // }
    // console.log(className)

    return (
      <nav className={scroll > top ? 'nav-fixed' : ''}>
        <div className="navbar-logo-container">
          <Link to="/">
            <h2>Yeeti</h2>
          </Link>
        </div>
        <div className="navbar-item-container">
          <ul>
            <li onClick={home}>
              {width < 1400 ? (
                <a href="#">
                  <FaFortAwesome size={20} />
                </a>
              ) : (
                <a href="#">Home</a>
              )}
            </li>
            <li onClick={about}>
              {width < 1400 ? (
                <a href="#">
                  <FaUser size={20} />
                </a>
              ) : (
                <a href="#">About</a>
              )}
            </li>
            <li onClick={portfolio}>
              {width < 1400 ? (
                <a href="#">
                  <FaObjectGroup size={20} />
                </a>
              ) : (
                <a href="#">Portfolio</a>
              )}
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
