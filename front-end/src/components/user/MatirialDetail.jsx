import React from 'react'

export const MatirialDetail = ({selectedmat}) => {
  return (
    <div>{selectedmat.name}
    {selectedmat.description}
    </div>
  )
}
