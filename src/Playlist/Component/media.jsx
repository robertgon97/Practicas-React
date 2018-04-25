import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Media extends Component {
  state = {
    image: this.props.image,
    title: this.props.title,
    author: this.props.author,
    type: this.props.type
  }
  // constructor (props) {
  //   super(props)
  // }
  componentWillMount(){
    // Se ejecuta antes de montar el componente
    // Se podría usar para hacer un setState()
  }
  handleClick = (event) => {
    this.setState({
      image: this.props.image,
      title: this.props.title,
      author: this.props.author,
      type: this.props.type
    })
  }
  render () {
    return (
      <div className="col s3">
        <div className="card hoverable link" onClick={this.handleClick}>
          <div className="card-image">
            <img src={this.state.image} alt={this.state.title} />
            <span className="card-title truncate">{this.state.title}</span>
          </div>
          <div className="card-content">
            <p>{this.state.author}</p>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount(){
    //Solo se lanza una vez
    //Ideal para llamar a una API, hacer un setInteval, etc
  }

  //Actualización:
	componentWillReceiveProps(){
    //Es llamado cuando el componente recibe nuevas propiedades.
  }
  //shouldComponentUpdate(){
    //Idea para poner una condición y  si las propiedades que le llegaron anteriormente
    // eran las mismas que tenia retornar false para evitar re-renderear el componente
  //}
  componentWillUpdate(){
    //metodo llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
  }

  // re-render si es necesario...

  componentDidUpdate(){
    //Método llamado luego del re-render
  }
  componentWillUnmount(){
    //Método llamado antes de desmontar el componente
  }
  componentDidCatch(){
    // Si ocurre algún error, lo capturo desde acá:
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