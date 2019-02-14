import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './header.css'
import Image from "../components/image"
import nature from '../images/nature.jpg'
import pat1 from '../images/pattern_1.jpg'
import pat3 from '../images/pattern_3.jpg'


class Header extends React.Component{

  render(){
    return(
      <div className="header-container">
        <div className="header-nav-image">
          <div className="floatbox">
            <h1>Blog it!</h1>
          </div>
          <img src={pat3} alt="hello"/>
          <div className="navbar">
            <div className="container">

              <div className="logo">
                <h1>Logo this!</h1>
              </div>
              <ul className="navoption">
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/">About</Link></li>
                <li><Link to ="/">Vlog</Link></li>
                <li><Link to ="/">Blog</Link></li>
                <li><Link to ="/">Contact</Link></li>
              </ul>
            </div>
          </div>

        </div>

      </div>


        //  <div className="header">
        //   <div className="navbar">
        //     <h1>{siteTitle}</h1>
        //     <ul className="navoption">
        //       <li><Link to ="/">Home</Link></li>
        //       <li><Link to ="/">About</Link></li>
        //       <li><Link to ="/">Vlog</Link></li>
        //       <li><Link to ="/">Blog</Link></li>
        //       <li><Link to ="/">Contact</Link></li>
        //       <li><ion-icon name="alarm" className="alarm"></ion-icon></li>
        //       <li><ion-icon name="flask"></ion-icon></li>
        //     </ul>
        //   </div>
        //   <div className="headerthis">
        //     <div className="title-box">
        //       <Link to="/" className="header-title">
        //       {siteTitle}
        //     </Link>v className="floatbox">
        //     <h1>Blog it!</h1>
        //   </div>
        //     {console.log(siteTitle)}
        //   </div>
        // </div>


    )
  }
}
// const Header = ({ siteTitle }) => (
//
// )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
