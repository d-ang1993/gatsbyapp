import React from 'react'
import { GiBlackBelt } from 'react-icons/gi'
import { GiHighKick } from 'react-icons/gi'
import { IoIosBug } from 'react-icons/io'
import { DiCode } from "react-icons/di";
import { MdCloud } from 'react-icons/md'
import { GiPumpkinMask } from 'react-icons/gi'
import { GiGroundSprout } from 'react-icons/gi'
import cloud from '../images/cloud.png'

class IndexAttributes extends React.Component {
  render() {
    let size;
    // console.log(this.props)
    const { attributesClick, width, attribute, highlight} = this.props
    // let highlightedAttribute;


    return (
      <div className="container-attributes">
        <ul>
          {/* <li>
            <img src={cloud} className="cloud"/>
          </li> */}
          <li className="container-attributes-sprout">
            {/* <a href="#"> */}
            <div className="container-icon-case">
              <MdCloud
                className="attribute-case cloud1"
                size={width < 1030 ? 82.5 : 165}
                color="#e31b6d"
                data-id="1"
                onClick={attributesClick}
              />
              <DiCode
                className={attribute === "1" || highlight === false ? "attribute highlight-sprout" : "attribute sprout"}
                size={width < 1030 ? 32.5 : 75}
                data-id="1"
                // color={attribute === "1" || highlight === false ? "black" : "white"}
                onClick={attributesClick}
              />
            </div>
          {/* </a> */}
          </li>
          <li className="container-attributes-scary">
            <div className="container-icon-case">
              <MdCloud
                className="attribute-case cloud2"
                size={width < 1030 ? 82.5 : 165}
                color="#e31b6d"
                data-id="2"
                onClick={attributesClick}
              />
              <GiPumpkinMask
                className={attribute === "2" ? "attribute highlight-scary" : "attribute scary"}
                size={width < 1030 ? 32.5 : 75}
                // color={attribute === "2" ? "orange" : "white"}
                data-id="2"
                onClick={attributesClick}
              />
            </div>
          </li>
          <li className="container-attributes-bug">
            <div className="container-icon-case">
              <MdCloud
                className="attribute-case"
                size={width < 1030 ? 82.5 : 165}
                color="#e31b6d"
                data-id="3"
                onClick={attributesClick}
              />
              <IoIosBug
                className={attribute === "3" ? "attribute highlight-bug" : "attribute bug"}
                size={width < 1030 ? 32.5 : 75}
                // color={attribute === "3" ? "black" : "white"}
                data-id="3"
                onClick={attributesClick}
              />
            </div>
          </li>

          <li className="container-attributes-belt">
            <div className="container-icon-case">
              <MdCloud
                className="attribute-case"
                size={width < 1030 ? 82.5 : 165}
                color="#e31b6d"
                data-id="4"
                onClick={attributesClick}
              />
              <GiHighKick
                className={attribute === "4" ? "attribute highlight-belt" : "attribute belt"}
                size={width < 1030 ? 32.5 : 75}
                // color={attribute === "4" ? "black" : "white"}
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
