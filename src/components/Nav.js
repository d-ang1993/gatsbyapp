import React from 'react'
import './Nav.css'
import { Link } from 'gatsby'
// import yeeti from '../images/yeeti.png'

class Nav extends React.Component {
  render() {
    const { top, scroll, home, about, portfolio, contact } = this.props

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
            <h1>Yeeti</h1>
          </Link>
        </div>
        <div className="navbar-item-container">
          <ul>
            <li onClick={home}>Home</li>
            <li onClick={about}>About</li>
            <li onClick={portfolio}>Portfolio</li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
