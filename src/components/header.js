import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './header.css'
import Image from "../components/image"


const Header = ({ siteTitle }) => (
<div className="header">
  <div className="navbar">
    <h1>{siteTitle}</h1>
    <ul className="navoption">
      <li><Link to ="/">Home</Link></li>
      <li><Link to ="/">About</Link></li>
      <li><Link to ="/">Vlog</Link></li>
      <li><Link to ="/">Blog</Link></li>
      <li><Link to ="/">Contact</Link></li>
      <li><ion-icon name="alarm" className="alarm"></ion-icon></li>
      <li><ion-icon name="flask"></ion-icon></li>
    </ul>
  </div>
  <div className="headerthis">
     <div className="title-box">
      <Link to="/" className="header-title">
        {siteTitle}
      </Link>
      {console.log(siteTitle)}
    </div>
  </div>
</div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
