import React from 'react';
import { DiReact } from 'react-icons/di'
import { DiRuby } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { DiCss3Full } from 'react-icons/di'
import { DiPostgresql } from 'react-icons/di'

class IndexSkills extends React.Component {
  render(){
    return(
      <div className="container-skill">
        <div className="skill-stack">
          <div className="skill-stack-content">
            <DiCss3Full
              size={70}
              color="#090a0f"
              className="skill-stack-icon"
            />
            <h1>CSS</h1>
          </div>
        </div>
        <div className="skill-stack">
          <div className="skill-stack-content">
            <DiRuby
              size={70}
              color="#090a0f"
              className="skill-stack-icon"
            />
            <h1>Ruby</h1>
          </div>
        </div>
        <div className="skill-stack">
          <div className="skill-stack-content">
            <DiJavascript1
              size={70}
              color="#090a0f"
              className="skill-stack-icon"
            />
            <h1>Javascript</h1>
          </div>
        </div>
        <div className="skill-stack">
          <div className="skill-stack-content">
            <DiReact
              size={70}
              color="#090a0f"
              className="skill-stack-icon"
            />
            <h1>React</h1>
          </div>
        </div>
        <div className="skill-stack">
          <div className="skill-stack-content">
            <DiPostgresql
              size={70}
              color="#090a0f"
              className="skill-stack-icon"
            />
            <h1>Postgresql</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexSkills
