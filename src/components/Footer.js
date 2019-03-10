import React from 'react'
import './Footer.css'
import { DiGithubBadge } from 'react-icons/di'
import { FaLinkedin } from 'react-icons/fa'
import { FaGhost } from 'react-icons/fa'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="connect-footer" id="footer">
          <ul>
            <li>
              <div className="connect-footer-div">
                <div className="connect-footer-description">

                <a href="https://www.linkedin.com/in/daniel-ang-90617716b/">LinkedIn</a>
                <FaLinkedin className="LinkedIn" />
              </div>
              </div>
            </li>
            <li>
              <div className="connect-footer-div">
                <p className="phone-number">Phone#: (905) 808-5205</p>
                <FaGhost className="ghost" />
              </div>
            </li>
            <li>
              <div className="connect-footer-div">
                <a href="https://github.com/DangAsian">GitHub</a>
                <DiGithubBadge className="GitHub" size={20} />
              </div>
            </li>
          </ul>
          {/* <FaGhost className="running-ghost" /> */}
        </div>
        <div className="date-gatsby">
          <p>
            © {new Date().getFullYear()}, Built with{' '}
            <a href="https://www.gatsbyjs.org"> Gatsby</a> by Daniel Ang
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
