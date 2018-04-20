import React from 'react'
import PropTypes from 'prop-types'

class Media extends React.Component {
  constructor (props) {
    super(props)
    this.click.bind(this)
  }
  click (event) {
    console.log(this.props.title)
  }
  render () {
    return (
      <div className="row">
        <div className="col s2 m2">
          <div className="card link" onClick={this.click}>
            <div className="card-image">
              <img src={this.props.image} alt={this.props.title} />
              <span className="card-title">{this.props.title}</span>
            </div>
            <div className="card-content">
              <p>{this.props.author}</p>
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