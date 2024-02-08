
import React, {useState} from 'react'
import { Document, Page, pdfjs} from 'react-pdf';
import CloseButton from 'react-bootstrap/CloseButton';
import { useTranslation } from "react-i18next";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Coming = ({open, onClose}) => {
  const [t]= useTranslation('translation');  //Translation i18next
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

    const PDFDownload = () => {
      // using Java Script method to get PDF file
      fetch('CV.pdf').then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = t("Pop-up.CV");
              alink.download = 'CV.pdf';
              alink.click();
          })
      })
  }

if(!open) return null
  return (
    <section onClick={onClose} className='overlay'> 
        <div onClick={(e) => {e.stopPropagation()}} className='container-overlay'>
            <CloseButton onClick={onClose}/>
            <button onClick={PDFDownload}>{t("Pop-up.Download")}</button>
                    <Document file={t("Pop-up.CV")} onLoadSuccess={onDocumentLoadSuccess}>
                        {Array.from(new Array(numPages), (el,index)=> (
                        <Page  width={500}  pageNumber={index+1} key={index+1} />
                        )
                        )}
                    </Document>
        </div>
    </section>
    
  )
};

export default Coming;
