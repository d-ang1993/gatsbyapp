import React from 'react'
import './BoxImage.css'
import { FaUserAstronaut } from 'react-icons/fa'

class IndexAvatar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
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
    const { img } = this.props

    return (
    <div className="box-image">
      <div className="box-component">
        {this.state.open === false ? (

            <div>
              <FaUserAstronaut
                size={200}
                className="box-content"
                onClick={this.boxOpenClose}
              />
              <h1>Click Me!</h1>


            </div>

        ) : (
          <img
            className="box-content-open"
            onClick={this.boxOpenClose}
            src={img}
            alt="snowman"
          />
        )}
      </div>
    </div>
    )
  }
}

export default IndexAvatar
