import React from 'react'

class IndexDescriptionBug extends React.Component {
  render() {
    return (
      <div className="container-description-content">
        <h2>
          I'm a <span>Travel Bug</span>{' '}
        </h2>
        <p>
          {' '}
          One of my favourite hobbies is to go on <span>road trips</span>! One
          place that I'm particularly fond of is <span>Torrance Barrens</span>{' '}
          in Gravenhurst, ON. Torrance Barrens is a dark sky preserve meaning that
          there are no artificial <span>lights</span> within the{' '}
          <span>surrounding area</span>. The result of this is <span>nature</span> within its
          most <span>simplisctic</span> form. This was also the <span>inspiration</span> of mine to have
          the parallaxed stars within the hero image.
        </p>
      </div>
    )
  }
}

export default IndexDescriptionBug
