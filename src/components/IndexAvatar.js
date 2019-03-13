import React from 'react'
import './BoxImage.css'
import { FaUserAstronaut } from 'react-icons/fa'

class IndexAvatar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { img, width, open, boxOpenClose } = this.props

    return (
      <div className="box-image">
        <div className="box-component">
          {open === false ? (
            <div>
              {width > 1400 ? (
                <FaUserAstronaut
                  size={300}
                  className="box-content"
                  onClick={boxOpenClose}
                />
              ) : null}
              {/* <FaUserAstronaut
                size={200}
                className="box-content"
                onClick={this.boxOpenClose}
              />
              <h1>Click Me!</h1> */}
            </div>
          ) : (
            <div>
              {width > 1400 ? (
                <img
                  className="box-content-open"
                  onClick={boxOpenClose}
                  src={img}
                  alt="snowman"
                />
              ) : null}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default IndexAvatar
