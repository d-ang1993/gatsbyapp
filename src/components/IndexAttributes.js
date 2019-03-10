import React from 'react'
import { GiBlackBelt } from 'react-icons/gi'
import { IoIosBug } from 'react-icons/io'
import { MdCloud } from 'react-icons/md'
import { GiPumpkinMask } from 'react-icons/gi'
import { GiGroundSprout } from 'react-icons/gi'
import cloud from '../images/cloud.png'

class IndexAttributes extends React.Component {
  render() {
    let size;

    if (width < 1016) {
      console.log("yop")
    }
    const { attributesClick, width} = this.props
    return (
      <div className="container-attributes">
        <ul>
          {/* <li>
            <img src={cloud} className="cloud"/>
          </li> */}
          <li className="container-attributes-belt">
            <div className="container-icon-case">
              <MdCloud
                className="attribute-case cloud1"
                size={width < 1016 ? 82.5 : 165}
                color="#e31b6d"
                data-id="1"
                onClick={attributesClick}
              />
              <GiBlackBelt
                className="attribute belt"
                size={width < 1016 ? 32.5 : 75}
                color="white"
                data-id="1"
                onClick={attributesClick}
              />
            </div>
          </li>
          <li className="container-attributes-scary">
            <div className="container-icon-case">
              <MdCloud
                className="attribute-case cloud2"
                size={width < 1016 ? 82.5 : 165}
                color="#e31b6d"
                data-id="2"
                onClick={attributesClick}
              />
              <GiPumpkinMask
                className="attribute scary"
                size={width < 1016 ? 32.5 : 75}
                data-id="2"
                onClick={attributesClick}
              />
            </div>
          </li>
          <li>
            <div className="container-icon-case">
              <MdCloud
                className="attribute-case"
                size={width < 1016 ? 82.5 : 165}
                color="#e31b6d"
                data-id="3"
                onClick={attributesClick}
              />
              <IoIosBug
                className="attribute"
                size={width < 1016 ? 32.5 : 75}
                color="white"
                data-id="3"
                onClick={attributesClick}
              />
            </div>
          </li>

          <li>
            <div className="container-icon-case">
              <MdCloud
                className="attribute-case"
                size={width < 1016 ? 82.5 : 165}
                color="#e31b6d"
                data-id="4"
                onClick={attributesClick}
              />
              <GiGroundSprout
                className="attribute"
                size={width < 1016 ? 32.5 : 75}
                color="white"
                data-id="4"
                onClick={attributesClick}
              />
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default IndexAttributes
