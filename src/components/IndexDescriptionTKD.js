import React from 'react'
import pursuit from '../images/pursuit.png'

class IndexDescriptionTKD extends React.Component {
  render() {
    return (
      <div className="container-description-content">
        <h2>
          I'm a <span>Martial Artist</span>{' '}
        </h2>
        <p>
          {' '}
          Two years ago I opened my own academy called "
          <span>Pursuit Martial Arts</span>". Even though it was <span>short lived</span>, I
          was able to create something of mine despite working full-time. It was
          truly an amazing experience to{' '}
          teach and guide my students in what I believed was most
          fitting for them <span>individually</span>.
        </p>

        <img
          src={pursuit}
          alt="pursuit-martial-arts logo"
          className="pursuit-logo"
        />
      </div>
    )
  }
}

export default IndexDescriptionTKD
