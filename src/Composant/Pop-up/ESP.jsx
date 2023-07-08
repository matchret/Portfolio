import React, {useState} from 'react'
import { Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const ESP = ({open, onClose}) => {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

if(!open) return null
  return (
    <section onClick={onClose} className='overlay'> 
        <div onClick={(e) => {e.stopPropagation()}} className='container-overlay'>
            <p onClick={onClose} className='closeBtn'>X</p>
            <button >Download</button>
                    <Document file="../ESP.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                        {Array.from(new Array(numPages), (el,index)=> (
                        <Page  width={500} pageNumber={index+1} key={index+1}/>
                        )
                        )}
                    </Document>
        </div>
    </section>
    
  )
};

export default ESP;