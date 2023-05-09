import React from 'react'

import "./Block.css"

const Block = ({param,number}) => {
  return (
    
    <div>
        <div className="number"><h1>{number}</h1></div>
        <div className="param"><h1>{param}</h1></div>
    </div>
  )
}

export default Block