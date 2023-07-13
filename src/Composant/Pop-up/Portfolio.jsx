import React from 'react'


const Portfolio = ({open, onClose}) => {
if(!open) return null

  return (
    <section onClick={onClose} className='overlay'> 
    <div onClick={(e) => {e.stopPropagation()}} className='container-overlay'>
    <p onClick={onClose} className='closeBtn'>X</p>
    <a href="https://github.com/matchret/Portfolio/tree/Clean" target='_blank'>
    <button>Git Repo</button>
    </a>
    </div>
    </section>
    
  )
};

export default Portfolio;
