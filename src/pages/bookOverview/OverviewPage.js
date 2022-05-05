import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import ReadingButton from '../../components/buttonComponent/ReadingButton';
import styles from './OverviewPage.module.css';
import Footer from '../homePage/components/footerSection/Footer';
// import BookImage from '../../assets/images/bookImage.png';
import Header from '../homePage/components/headerComponent/Header';
import { addBookData, getUserData } from '../../store/slice/neverlandUserSlice';
import getAxiosInstance from '../../services/axios';
import LoadingComponent from '../../components/loadingComponent/LoadingComponent';
import Modal from '../../components/modalComponent/Modal';

const OverviewPage = () => {
  const [book, setBook] = useState('');
  const [renderModal, setRenderModal] = useState(false);
  const token = useSelector(getUserData)?.token;
  const bookId = useParams()?.bookId;
  const [pageNo, setPageNo] = useState(undefined)
  const dispatch = useDispatch();

  const handleRender = () => {
    setRenderModal(true);
  };

  const removeModal = () => {
    console.log('Have fun and smoke weed!!!')
    setRenderModal(false);
  }

  const fetchBookDetail = async () => {
    const response = await getAxiosInstance(token).get(
      `api/v1/book/overview/${ bookId }`,
    )
    console.log(response.data.data)

    if (response.data.status === 'success') {
      if (response.data.data?.bookId) {
        setBook(response.data.data.bookId)
        setPageNo(response.data.data.pageNo)
      } else {
        setBook(response.data.data)
      }
    }
  };

  useEffect(() => {
    fetchBookDetail();
  }, []);

  return (
    <div className={ styles.overviewPage }>
      <Header label='overviewPage' />
      {book ? (
        <>
          <section className={ styles.upperDiv }>
            <div className={ styles.containerDiv }>
              <div className={ styles.imageDiv }>
                <img src={ book?.bookImg } alt={ book?.name } />
              </div>
              <div className={ styles.textDiv }>
                <h3>{book?.name}</h3>
                <p>{book?.author}</p>
                <span className={ styles.spanTags }>
                  <p>{book?.tags?.join(' • ')}</p>
                </span>
                <ReadingButton
                  bookId={ bookId }
                  handleClick={ handleRender }
                  pageNo={ pageNo }
                />
              </div>
            </div>
          </section>
          <section className={ styles.bottomDiv }>
            <div className={ styles.headingDiv }>
              <h3> Synopsis </h3>
              <div className={ styles.bottomLine } />
            </div>
            <div className={ styles.textArea }>
              <p>{book?.description}</p>
            </div>
            <div className={ styles.buttonDiv }>
              {' '}
              <ReadingButton bookId={ bookId } pageNo={ pageNo } />
              {' '}
            </div>
          </section>
        </>
      ) : (
        <LoadingComponent />
      )}
      {renderModal && (
        <Modal
          actionText='Add to Library'
          imageSrc='BellIcon'
          handleremoveModal={ removeModal }
        />
      )}
      <Footer />
    </div>
  );
};

export default OverviewPage;
