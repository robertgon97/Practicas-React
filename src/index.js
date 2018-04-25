import React from 'react'
import { render } from 'react-dom'
import Menu from './Menu/Menu'
import Container from './Container/Container'
import DB from './dataBaseFake/api.json'

import '../node_modules/materialize-css/dist/css/materialize.css'
import '../node_modules/materialize-css/dist/js/materialize'
import './Estilos.css'

const App = document.getElementById('root')
render(
    <div className="">
        <Menu DB={DB} />
        <Container DB={DB} />
    </div>, App)
