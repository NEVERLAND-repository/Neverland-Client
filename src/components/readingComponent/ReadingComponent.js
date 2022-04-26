import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import arrowLeft from '../../assets/icons/arrow-left.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'
import styles from './ReadingComponent.module.css'

const ReadingComponent = ({ scroll = false }) => {
  const [numPage, setNumPages] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className={ styles.wrapper }>
      <span className={ styles.navigation1 }>
        {pageNumber > 1 && <img onClick={ previousPage } className='nav-icon' src={ arrowLeft } alt='Next Page' />}
      </span>
      <div className={ styles.readingPage }>
        <div className={ styles.bookTitle }>SCRUM</div>
        {scroll
          ? (
            <Document file='/sample.pdf' onLoadSuccess={ onDocumentLoadSuccess }>
              {Array.from(new Array(numPage), (el, index) => (
                <Page key={ `page_${ index + 1 }` } pageNumber={ index + 1 } />
              ))}
            </Document>
          ) : (
            <div className={ styles.pdfDisplay }>
              <span>
                <Document file='/sample.pdf' onDocumentLoadSuccess={ onDocumentLoadSuccess }>
                  <Page pageNumber={ pageNumber } height600px />
                </Document>
              </span>
            </div>
          )}
        <p>{`${ pageNumber } of ${ numPage }`}</p>
      </div>
      <span className={ styles.navigation2 }>
        {pageNumber < numPage && <img onClick={ nextPage } src={ arrowRight } alt='Next Page' />}
      </span>
    </div>
  )
}

export default ReadingComponent;
