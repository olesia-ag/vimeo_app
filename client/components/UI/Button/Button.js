import React from 'react'

const button = props => (
  <div className="Center">
    <button onClick={props.clicked} disabled={props.disabled}>
      {props.children}
    </button>
  </div>
)

export default button
