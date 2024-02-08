import React from 'react'
import CloseButton from 'react-bootstrap/CloseButton';


const Coming = ({open, onClose}) => {
if(!open) return null

  return (
    <section onClick={onClose} className='overlay'> 
    <div onClick={(e) => {e.stopPropagation()}} className='container-overlay'>
    <CloseButton onClick={onClose} className='closeBtn'/>
    <p>Coming soon ... </p>
    </div>
    </section>
    
  )
};

export default Coming;
