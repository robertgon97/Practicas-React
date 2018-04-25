import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Media from './media'

class Playlist extends Component {
  state = {
    id: this.props.DB.categories[0].id,
    description: this.props.DB.categories[0].description,
    title: this.props.DB.categories[0].title,
    playlist: this.props.DB.categories[0].playlist
  }
  componentWillMount(){
    console.log(this.props.DB)
  }
  render () {
    let arrays = this.state.playlist
    return (
      <div>
        <div class="divider"></div>
        <div className="row playlist">
          <div className="col s12">
            <div class="section">
              <h5>{this.state.title}</h5>
              <p>{this.state.description}</p>
            </div>
          </div>
          {
            arrays.map((item) => {
              return <Media {...item} key={item.id} />
            })
          }
        </div>
      </div>
    )
  }
}

Playlist.propTypes = { // Validamos los PropTypes
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio'])
}

Playlist.defaultProps = {
  id: 1,
  description: 'Descripcion de la Playlist',
  title: 'Titulo de la Playlist',
  playlist: []
}

export default Playlist