import React from 'react';
import './Nav.css'
import yeeti from '../images/yeeti.png'

class Nav extends React.Component {
  render(){
    return(
      <div className="navbar">
        <div className="navbar-items">
          <div className="navbar-logo">
            <h1>Yeeti</h1>
          </div>
          <div className="navbar-item">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
    </div>
    )
  }
}

export default Nav;
