import React from 'react'
import IndexDescriptions from '../components/IndexDescriptions'
import IndexAvatar from '../components/IndexAvatar'
import IndexTitle from '../components/IndexTitle'
import IndexAttributes from '../components/IndexAttributes'
import IndexSkills from '../components/IndexSkills'

class IndexContent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      attribute: '',
      open: false,
      highlight: false,
      width: ''
    }

    this.attributesClick = this.attributesClick.bind(this)
  }

  componentDidMount = e => {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth })
  }

  attributesClick(e) {
    const target = e.currentTarget.dataset.id
    const currentTarget = e.currentTarget

    this.setState({
      attribute: target,
      highlight: true,
    })
  }

  highlightClick = (e) => {
    // console.log(this.state.highlight)
    if (this.state.highlight === false) {
      this.setState({
        highlight: true,
      })
    } else {
      this.setState({
        highlight: false,
      })
    }
    // console.log(this.state.highlight)
  }

  boxOpenClose = e => {
    e.preventDefault()
    console.log(e.target)

    if (this.state.open === false) {
      this.setState({
        open: true,
      })
    } else {
      this.setState({
        open: false,
      })
    }
  }

  render() {
    // console.log(this.state.highlight)
    return (
      <div className="text-content-div" id="about">
        <div className="container">
          <IndexTitle />
          <IndexAttributes attributesClick={this.attributesClick} highlight={this.state.highlight} width={this.state.width} attribute={this.state.attribute}  />
          <IndexDescriptions attribute={this.state.attribute} width={this.state.width}/>
          <IndexAvatar img={this.props.snowman} boxOpenClose={this.boxOpenClose} width={this.state.width} open={this.state.open}/>
          {/* <IndexSkills /> */}
        </div>
      </div>
    )
  }
}

export default IndexContent
