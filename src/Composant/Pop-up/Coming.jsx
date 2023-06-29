import React from 'react'

const Coming = ({open, onClose}) => {
if(!open) return null
  return (
    <div className='overlay'> 
    <p onClick={onClose} className='closeBtn'>X</p>
    <p>Coming soon ... </p>
    </div>
  )
}

export default Coming