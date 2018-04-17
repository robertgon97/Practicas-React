import React from 'react'

const Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
      {/* <p>{console.log(match.params)}</p> */}
    </div>
  )

export default Topic