import React from 'react'

export const MatirialDetail = ({selectedmat}) => {
  return (
    <div>
      <h1>{selectedmat.name}</h1>
    <p>{selectedmat.description}</p>
    </div>
  )
}
