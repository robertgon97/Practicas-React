import React, { Component } from 'react'
import Menu from './Menu/Menu'
import Container from './Container/Container'
import Modal from './Modal/Modal'
import DB from './dataBaseFake/api.json'

class Home extends Component {
  state = {
    title: null,
    author: null,
    src: null,
    mostrar: false
  }
  handleOpenModal = (media) => {
    this.setState({
      mostrar: true,
      ...media
    })
  }
  handleCloseModal = (event) => {
    this.setState({
      mostrar: false,
    })
  }
  render () {
    return (
      <div>
        <Menu DB={DB} />
        {
          this.state.mostrar &&
          <Modal {...this.state} />
        }
        <Container DB={DB} handleOpenModal={this.handleOpenModal} />
      </div>
    )
  }
}

export default Home