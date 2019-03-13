import React from 'react'
import IndexSkills from './IndexSkills'

class IndexDescription extends React.Component {
  render() {
    return (
      <div className="container-description-content">
        <div className="description-content">
          <h2>
            I'm a <span>Web Developer</span>{' '}
          </h2>
          <p>
            {/* <span>Hey!</span> That's me on the right, if you've clicked the icon
            already. I'm just your typical <span>snowman</span> making guy who
            has recently transitioned into becoming a <span>WebDev</span> after
            working in <span>oncology research</span>. I aspire to{' '}
            <span>concot</span> all sorts of <span>innovation</span> while
            adding my own personal touch. */}
            I’m just your <span>typical snowman making guy</span> who has
            recently found his <span>creativity</span> in building and
            understanding the functionality of websites. Being a{' '}
            <span>Web Developer</span> involves utilizing your{' '}
            <span>imagination</span>, <span>curiosity</span>, and{' '}
            <span>inclusiveness</span> throughout all stages, from
            conceptualizing an idea all the way to the implementation of the
            product. I find this <span>whole process inspiring</span> and I’m eager to learn
            more <span>everyday</span>.
          </p>
        </div>
        <div>
          <IndexSkills width={this.props.width} />
        </div>
      </div>
    )
  }
}

export default IndexDescription
