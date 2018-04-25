import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Modal extends Component {
  state = {
    src: this.props.video,
    title: this.props.title,
    author: this.props.author
  }
  render () {
    return (
      <div className="card-panel red accent-2">
        <div className="container center">
          <h5>{this.state.title}</h5>
          <h6>{this.state.author}</h6>
          <video autoPlay src={this.state.src || 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}></video>
        </div>
      </div>
    )
  }
}

Modal.propTypes = { // Validamos los PropTypes
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

Modal.defaultProps = {
  title: 'Titulo',
  author: 'Autor',
  src: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
}

export default Modal