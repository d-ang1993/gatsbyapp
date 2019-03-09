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
                <p>LinkedIn</p>
                <FaLinkedin className="LinkedIn" />
              </div>
            </li>
            <li>
              <div className="connect-footer-div">
                <p>Phone#: (905) 808-5205</p>
                <FaGhost className="Ghost" />
              </div>
            </li>
            <li>
              <div className="connect-footer-div">
                <p>GitHub</p>
                <DiGithubBadge className="GitHub" size={20} />
              </div>
            </li>
          </ul>
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
