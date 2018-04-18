import React from 'react'
import { render } from 'react-dom'
import Media from './Playlist/Component/media'

import '../node_modules/materialize-css/dist/css/materialize.css'
import '../node_modules/materialize-css/dist/js/materialize'
import './Estilos.css'

const App = document.getElementById('root')
render(<Media type="video" title="Mi titulo del Elemento" author="Robert Gonzalez" image="http://materializecss.com/images/sample-1.jpg" />, App)
