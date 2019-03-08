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
    }

    this.attributesClick = this.attributesClick.bind(this)
  }

  attributesClick(e) {

    const target = e.currentTarget.dataset.id

    this.setState({
      attribute: target
    })

  }

  render() {
    // console.log(this.state.attribute)
    return (
      <div className="text-content-div" id="portfolio">
        <div className="container">
          <IndexTitle />
          <IndexAttributes attributesClick={this.attributesClick}/>
          <IndexDescriptions attribute={this.state.attribute}/>
          <IndexAvatar img={this.props.snowman} />
          <IndexSkills />
        </div>
      </div>
    )
  }
}

export default IndexContent
