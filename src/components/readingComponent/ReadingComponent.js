import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import arrowLeft from '../../assets/icons/arrow-left.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'
import getAxiosInstance from '../../services/axios';
import { getBook, getUserData } from '../../store/slice/neverlandUserSlice';
import styles from './ReadingComponent.module.css'

const ReadingComponent = ({ scroll = false }) => {
  const token = useSelector(getUserData)?.token;
  const book = useSelector(getBook);
  const [numPage, setNumPages] = useState(book?.pageTotal);
  const [pageNumber, setPageNumber] = useState(10);
  const { bookId } = useParams();
  const url = book.content;
  console.log(bookId, book)

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

  const fetchBookPdf = async () => {
    const response = await getAxiosInstance(token).get(
      `api/v1/book/overview/${ bookId }`,
    )

    if (response.data.status === 'success') {
      console.log(response.data)
      // setBook(response.data.data)
    }
  }

  useEffect(() => {
    fetchBookPdf()
    // return () => {

    // }
  }, [])

  return (
    <div className={ styles.wrapper }>
      <span className={ styles.navigation1 }>
        {pageNumber > 1 && <img onClick={ previousPage } className='nav-icon' src={ arrowLeft } alt='Next Page' />}
      </span>
      <div className={ styles.readingPage }>
        <div className={ styles.bookTitle }>{ book.name }</div>
        {/* {scroll
          ? (
            <Document file='/sample.pdf' onLoadSuccess={ onDocumentLoadSuccess }>
              {Array.from(new Array(numPage), (el, index) => (
                <Page key={ `page_${ index + 1 }` } pageNumber={ index + 1 } />
              ))}
            </Document>
          ) : ( */}
        <div className={ styles.pdfDisplay }>
          <span>
            <Document
              file={ `https://cors-anywhere.herokuapp.com/${ url }` }
              onDocumentLoadSuccess={ onDocumentLoadSuccess }
            >
              <Page pageNumber={ pageNumber } height600px />
            </Document>
          </span>
        </div>
        {/* )} */}
        <p>{`${ pageNumber } of ${ numPage }`}</p>
      </div>
      <span className={ styles.navigation2 }>
        {pageNumber < numPage && <img onClick={ nextPage } src={ arrowRight } alt='Next Page' />}
      </span>
    </div>
  )
}

export default ReadingComponent;
