import React from 'react'
import './Nav.css'
import { Link } from 'gatsby'
import { FaFortAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaObjectGroup } from "react-icons/fa";
import { GiMegabot } from "react-icons/gi";


class NavBlogPost extends React.Component {
  render() {

    return (
      <nav className= "blog-nav">
        <div className="navbar-logo-container">
          <Link to="/">
            <h1>Back</h1>
          </Link>
        </div>
      </nav>
    )
  }
}

export default NavBlogPost
