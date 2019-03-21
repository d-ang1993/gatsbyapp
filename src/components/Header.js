import React from 'react'
import nature from '../images/nature.jpg'
import './Header.scss'
import Nav from './Nav'
import { IconContext } from 'react-icons'
import { FaAngleDown } from 'react-icons/fa'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hover: false,
    }
  }

  handleScroll = e => {
    this.setState({ scroll: window.scrollY })

  }

  componentDidMount = e => {
    const nav = document.querySelector('nav')
    this.setState({
      top: nav.offsetTop,
      height: nav.offsetHeight,
    })
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth })
  }

  componentDidUpdate = e => {
    // this.state.scroll > this.state.top
    // document.body.style.paddingTop = `${this.state.height}px` :
    //        document.body.style.paddingTop = 0;
    // console.log(this.state.scroll)
  }

  scrollViewHome = e => {
    e.preventDefault()
    document.getElementById('home').scrollIntoView()
  }

  scrollViewAbout = e => {
    e.preventDefault()
    document.getElementById('about').scrollIntoView()
  }

  scrollViewPortfolio = e => {
    e.preventDefault()
    document.getElementById('portfolio').scrollIntoView()
  }

  scrollViewContact = e => {
    e.preventDefault()
    document.getElementById('contact').scrollIntoView()
  }

  toggleHover = e => {
    this.setState({ hover: !this.state.hover })
  }

  render() {
    // console.log(this.state.width)
    return (
      <div className="background-image" id="home">
        <Nav
          top={this.state.top}
          scroll={this.state.scroll}
          home={this.scrollViewHome}
          about={this.scrollViewAbout}
          portfolio={this.scrollViewPortfolio}
          contact={this.scrollViewContact}
          width={this.state.width}
          hover={this.toggleHover}
        />
        <div className="navbar-slogan">
          <h1>
            Hello! My name is <span>Daniel</span>!
          </h1>
          <h3>
             This is my personal website. Be adventerous when <span>clicking</span>!

          </h3>
        </div>
        <div className="arrow-container">
          <div className="bounce-container">
            <FaAngleDown
              size={100}
              color="#E31B6D"
              className="arrow bounce"
              onMouseOver={this.scrollViewAbout}
            />
          </div>
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
