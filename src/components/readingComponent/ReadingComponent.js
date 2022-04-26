import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { pdfjs } from 'react-pdf';
// import pdfjsLib from 'pdfjs-dist';
import axios from 'axios';
import arrowLeft from '../../assets/icons/arrow-left.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'
import styles from './ReadingComponent.module.css'

const ReadingComponent = ({ scroll = false }) => {
  // eslint-disable-next-line max-len
  // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${ pdfjs.version }/pdf.worker.js`;
  // const url = 'https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf'
  const [numPage, setNumPages] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdf, setPdf] = useState('')

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
  // pdfjs.GlobalWorkerOptions.workerSrc = 'https://neverland-api.s3.amazonaws.com/novels/Wife+of+the+Gods.pdf'
  // console.log(__dirname.join('/sample.pdf'))
  // useEffect(() => {
  //   const fetchPdf = async () => {
  //     const res = await getAxiosInstance('https://neverland-api.s3.amazonaws.com/novels/Wife+of+the+Gods.pdf', {
  //       method: 'GET',
  //       responseType: 'blob',
  //     })
  //     const file = await new Blob([res.data], { type: 'application/pdf' });
  //     const fileURL = URL.createObjectURL(file);
  //     setPdf(fileURL)
  //     console.log(fileURL)
  //   }
  //   fetchPdf()
  // }, [])

  // const downloadAgreement = () => async () => {
  //   return axios('https://neverland-api.s3.amazonaws.com/novels/Wife+of+the+Gods.pdf', {
  //     method: 'GET',
  //     responseType: 'blob',
  //   }).then((res) => {
  //     const file = new Blob([res.data], { type: 'application/pdf' });
  //     const fileURL = URL.createObjectURL(file);
  //     window.open(fileURL);
  //     // return fileURL;
  //   });
  // };

  // downloadAgreement()

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
                <Document
                  file='https://cors-anywhere.herokuapp.com/https://neverland-api.s3.amazonaws.com/novels/Wife+of+the+Gods.pdf'
                  onDocumentLoadSuccess={ onDocumentLoadSuccess }
                >
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
