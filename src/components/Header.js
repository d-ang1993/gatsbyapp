import React from 'react'
import nature from '../images/nature.jpg'
import './Header.scss'
import Nav from './Nav'
import { IconContext } from 'react-icons'
import { FaAngleDown } from 'react-icons/fa'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleScroll = this.handleScroll.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  handleScroll(e) {
    this.setState({ scroll: window.scrollY })
    // e.preventDefault()
    // const nav = document.querySelector('nav')
    //
    // const navTop = nav.offsetTop
    // console.log(navTop)
    // console.log(window.scrollY)

    // if (window.scrollY >= navTop) {
    //   this.setState({
    //     fixedNav: true,
    //     scroll: window.scrollY
    //   })
    // } else if (window.scrollY < navTop){
    //   this.setState({
    //     fixedNav: false
    //   })
    // }
  }

  componentDidMount(e) {
    const nav = document.querySelector('nav')
    this.setState({
      top: nav.offsetTop,
      height: nav.offsetHeight,
    })
    window.addEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate(e) {
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

  // scrollView = e => {
  //   e.preventDefault()
  //   document.getElementById('portfolio').scrollIntoView()
  // }

  render() {
    return (
      <div className="background-image" id="home">
        <Nav
          top={this.state.top}
          scroll={this.state.scroll}
          home={this.scrollViewHome}
          about={this.scrollViewAbout}
          portfolio={this.scrollViewPortfolio}
          contact={this.scrollViewContact}
        />
        <div className="navbar-slogan">
          <h1>
            <h1>
              Hi. My name is <span>Daniel</span>
            </h1>
            <h1>
              <span>Venture</span> below and get to know me more!
            </h1>
          </h1>

          {/* <button className="header-button" onClick={this.scrollView}>
            View More!
          </button> */}
        </div>
        <div className="arrow bounce" onMouseOver={this.scrollViewAbout}>
          <FaAngleDown size={100} color="#E31B6D" />
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
