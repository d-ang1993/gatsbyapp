import React from 'react'
import { GiBlackBelt } from 'react-icons/gi'
import { IoIosBug } from 'react-icons/io'
import { MdCloud } from 'react-icons/md'
import { GiPumpkinMask } from 'react-icons/gi'
import { GiGroundSprout } from 'react-icons/gi'

class IndexAttributes extends React.Component {
  render() {
    const { attributesClick } = this.props
    return (
      <div className="container-attributes">
        <ul>
          <li className="container-attributes-belt">
            <div className="container-icon-case" >
              <MdCloud
                className="attribute-case cloud1"
                size={165}
                color="#e31b6d"
              />
              <GiBlackBelt className="attribute" size={75} color="white" />
            </div>
          </li>
          <li className="container-attributes-scary" >
            <div className="container-icon-case">
              <MdCloud
                className="attribute-case cloud2"
                size={165}
                color="#e31b6d"
              />
              <GiPumpkinMask
                className="attribute scary"
                size={80}
                onClick={attributesClick}
                id="ney"
                // color="white"
              />
            </div>
          </li>
          <li>
            <div className="container-icon-case">
              <MdCloud className="attribute-case" size={165} color="#e31b6d" />
              <IoIosBug className="attribute" size={80} color="white" />
            </div>
          </li>

          <li>
            <div className="container-icon-case">
              <MdCloud className="attribute-case" size={165} color="#e31b6d" />
              <GiGroundSprout className="attribute" size={80} color="white" />
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default IndexAttributes
