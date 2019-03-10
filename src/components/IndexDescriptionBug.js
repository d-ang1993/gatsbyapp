import React from 'react';

class IndexDescriptionBug extends React.Component {
  render(){
    return(
      <div className="container-description-content">
        <h1>Who am I?</h1>
        <h2>
          I'm a <span>Bug</span>{' '}
        </h2>
        <p>  <span>Hey!</span> That's me on the right, if you've clicked the icon
          already. I'm just your typical <span>snowman</span> making guy who has
          recently transitioned into becoming a <span>WebDev</span> after
          working in <span>oncology research</span>. I aspire to{' '}
          <span>concot</span> all sorts of <span>innovation</span> while adding
          my own personal touch.</p>
      </div>
    )
  }
}

export default IndexDescriptionBug
