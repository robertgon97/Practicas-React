import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Media extends Component {
  state = {
    image: this.props.image,
    title: this.props.title,
    author: this.props.author,
    type: this.props.type
  }
  handleClick = (event) => { // Heredo los props automaticamente
    // console.log(this.props.title)
    this.setState({ // Modifico los estados
      image: this.props.image,
      title: this.props.title,
      author: this.props.author,
      type: this.props.type
    })
  }
  render () {
    return (
      <div className="row">
        <div className="col s2 m2">
          <div className="card link" onClick={this.handleClick}>
            <div className="card-image">
              <img src={this.state.image} alt={this.state.title} />
              <span className="card-title">{this.state.title}</span>
            </div>
            <div className="card-content">
              <p>{this.state.author}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Media.propTypes = { // Validamos los PropTypes
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio'])
}

Media.defaultProps = {
  image: 'https://cutest.kawaii.at/images/product_images/info_images/solid-orange-Robert-Kaufman-knit-fabric-177710-1.JPG',
  title: 'Titulo',
  author: 'Autor',
  type: 'audio'
}
export default Media