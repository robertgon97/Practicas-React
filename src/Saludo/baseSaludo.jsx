import React from 'react'
import { ReactTitle } from 'react-meta-tags'

function Saludo ({match}, props) {
  return (
    <div>
      <ReactTitle title="Saludos"/>
      <h1>Hello, {match.params.name}</h1>
    </div>
  )
}

export default Saludo