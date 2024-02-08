import React from 'react'
import CloseButton from 'react-bootstrap/CloseButton';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Portfolio = ({open, onClose}) => {
  const [numPages, setNumPages] = useState(null);
  const [t]= useTranslation('translation');  //Translation i18next

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

if(!open) return null
  return (
    <section onClick={onClose} className='overlay'> 
    <div onClick={(e) => {e.stopPropagation()}} className='container-overlay'>
    <CloseButton onClick={onClose}/>
    <a href="https://github.com/matchret/Portfolio/tree/Clean" target='_blank'>
    <button>{t("Pop-up.Git")}</button>
    </a>
    <Document file={t("Pop-up.Portfolio")} onLoadSuccess={onDocumentLoadSuccess}>
                        {Array.from(new Array(numPages), (el,index)=> (
                        <Page  width={500} pageNumber={index+1} key={index+1}/>
                        )
                        )}
                    </Document>
    </div>
    </section>
    
  )
};

export default Portfolio;
