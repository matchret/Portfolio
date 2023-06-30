import React from 'react'


const Coming = ({open, onClose}) => {
if(!open) return null
  return (
    <section onClick={onClose} className='overlay'> 
    <div onClick={(e) => {e.stopPropagation()}} className='container-overlay'>
    <p onClick={onClose} className='closeBtn'>X</p>
    <p>Coming soon ... </p>
    </div>
    </section>
    
  )
};

export default Coming;