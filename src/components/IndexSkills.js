import React from 'react'
import { DiReact } from 'react-icons/di'
import { DiRuby } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { DiCss3Full } from 'react-icons/di'
import { DiPostgresql } from 'react-icons/di'

class IndexSkills extends React.Component {
  render() {
    const { width } = this.props
    return (
      <div className="container-skill">
        <div className="skill-stack">
          <div className="skill-stack-content">
            <DiCss3Full
              size={width < 1016 ? 55 : 55}
              color="#090a0f"
              className="skill-stack-icon"
            />

            <h1>{width < 1016 ? null : 'CSS'}</h1>
          </div>
        </div>

        <div className="skill-stack">
          <div className="skill-stack-content">
            <DiJavascript1
              size={width < 1016 ? 55 : 55}
              color="#090a0f"
              className="skill-stack-icon"
            />
            <h1>{width < 1016 ? null : 'JavaScript'}</h1>
          </div>
        </div>
        <div className="skill-stack">
          <div className="skill-stack-content">
            <DiReact
              size={width < 1016 ? 55 : 55}
              color="#090a0f"
              className="skill-stack-icon"
            />
            <h1>{width < 1016 ? null : 'React'}</h1>
          </div>
        </div>
        <div className="skill-stack">
          <div className="skill-stack-content">
            <DiPostgresql
              size={width < 1016 ? 55 : 55}
              color="#090a0f"
              className="skill-stack-icon"
            />
            <h1>{width < 1016 ? null : 'Postgresql'}</h1>
          </div>
        </div>
        <div className="skill-stack">
          <div className="skill-stack-content">
            <DiRuby size={50} color="#090a0f" className="skill-stack-icon" />
            <h1>{width < 1016 ? null : 'Ruby'}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexSkills
