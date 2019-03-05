import React from 'react'
import './Nav.css'
import { Link } from 'gatsby'
// import yeeti from '../images/yeeti.png'

class Nav extends React.Component {
  render() {
    return (
      <div className="navbar">

          <div className="navbar-logo-container">
            <Link to="/">
              <h1>Yeeti</h1>
            </Link>
          </div>
          <div className="navbar-item-container">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about/">
                <li>About</li>
              </Link>
              <Link to="/contact/">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>

    )
  }
}

export default Nav
