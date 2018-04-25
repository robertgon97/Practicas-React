import React from 'react'
import { render } from 'react-dom'
import Home from './App'

import '../node_modules/materialize-css/dist/css/materialize.css'
import '../node_modules/materialize-css/dist/js/materialize'
import './Estilos.css'

const App = document.getElementById('root')
render(<Home />, App)
