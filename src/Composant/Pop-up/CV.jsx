
import React, {useState} from 'react'
import { Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Coming = ({open, onClose}) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

if(!open) return null
  return (
    <section onClick={onClose} className='overlay'> 
        <div onClick={(e) => {e.stopPropagation()}} className='container-overlay'>
            <p onClick={onClose} className='closeBtn'>X</p>
            <button >Download</button>
                    <Document file="../CV.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                        {Array.from(new Array(numPages), (el,index)=> (
                        <Page  width={500} key={"Cv_page"}   pageNumber={index+1} />
                        )
                        )}
                    </Document>
        </div>
    </section>
    
  )
};

export default Coming;
