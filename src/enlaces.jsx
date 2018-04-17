import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home/baseHome'
import Galeria from './Imagenes/baseImagenes'
import Saludo from './Saludo/baseSaludo'
import About from './About/baseAbout'
import Topics from './Topic/baseTopics'

class Principal extends Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/galeria">Galeria</Link></li>
          </ul>
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/galeria" component={Galeria}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
          <Route path="/saludo/:name" component={Saludo}/>
        </div>
      </Router>
    )
  }
}

export default Principal