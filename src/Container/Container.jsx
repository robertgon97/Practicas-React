import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Playlist from '../Playlist/Component/playList'

class Container extends Component {
  state = {
    categories: this.props.DB.categories
  }
  render () {
    let categories = this.state.categories
    return (
      <div className="container"> 
        <h1 className="center-align">Reproductor Gonth's</h1>
        {
          categories.map((categorie) => {
            return <Playlist {... categorie} key={categorie.id} />
          })
        }
      </div>
    )
  }
}

Playlist.propTypes = { // Validamos los PropTypes
  categories: PropTypes.array.isRequired
}

Playlist.defaultProps = {
  categories: []
}

export default Container