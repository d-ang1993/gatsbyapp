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
      text: '',
      open: '',
    }

    // this.descriptionClick = this.descriptionClick.bind(this)
  }

  attributesClick=(e)=> {
    const target = e.target
    console.log(target.classList)
  }

  render() {
    return (
      <div className="text-content-div" id="portfolio">
        <div className="container">
          <IndexTitle />
          <IndexAttributes attributesClick={this.attributesClick}/>
          <IndexDescriptions />
          <IndexAvatar img={this.props.snowman} />
          <IndexSkills />
        </div>
      </div>
    )
  }
}

export default IndexContent
