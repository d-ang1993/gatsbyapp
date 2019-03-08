import React from 'react'
import './Nav.css'
import { Link } from 'gatsby'
// import yeeti from '../images/yeeti.png'

class Nav extends React.Component {

  render() {
    const { top, scroll } = this.props

    // let className='navbar';
    // if (fixedNav === true) {
    //   className += ' fixed'
    // } else if (fixedNav === false) {
    //   className = 'navbar';
    // }
    // console.log(className)

    return (
      <nav className={scroll > top ? "fixed" : ""}>
        <div className="navbar-logo-container">
          <Link to="/">
            <h1>Yeeti</h1>
          </Link>
        </div>
        <div className="navbar-item-container">
          <ul>
            {/* <Link to="/"> */}
            <li onClick={this.handleScroll}>Home</li>
            {/* </Link> */}
            <Link to="/about/">
              <li>About</li>
            </Link>
            <Link to="/contact/">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
