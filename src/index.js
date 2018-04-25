import React from 'react'
import { render } from 'react-dom'
import Playlist from './Playlist/Component/playList'
import DB from './dataBaseFake/api.json'

import '../node_modules/materialize-css/dist/css/materialize.css'
import '../node_modules/materialize-css/dist/js/materialize'
import './Estilos.css'

const App = document.getElementById('root')
render(<Playlist DB={DB} />, App)
