import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReadingButton from '../../components/buttonComponent/ReadingButton';
import styles from './OverviewPage.module.css';
import Footer from '../homePage/components/footerSection/Footer';
// import BookImage from '../../assets/images/bookImage.png';
import Header from '../homePage/components/headerComponent/Header';
import { getUserData } from '../../store/slice/neverlandUserSlice';
import getAxiosInstance from '../../services/axios';

const OverviewPage = () => {
  const [book, setBook] = useState('');
  const { bookId } = useParams();
  const { token } = useSelector(getUserData);
  const [count, setCount] = useState(1)
  // console.log(bookId)

  const fetch = async () => {
    const response = await getAxiosInstance(token).get(
      `api/v1/book/overview/${ bookId }`,
    )
    console.log(response)
    if (response.data.status === 'success') {
      console.log(response.data)
      setBook(response.data.data)
      // if (count)
      // count -= 1;
    }
  }

  // do {
  //   setTimeout(() => {
  //     window.location.reload(false)
  //   }, 2000);
  //   // setCount(count - 1);
  // } while ( bookId !== null )

  useEffect(() => {
    fetch()
    console.log('heeey', bookId)
  }, [])

  return (
    <div>
      <Header label='overviewPage' />
      {book ? (
        <>
          <section className={ styles.upperDiv }>
            <div className={ styles.containerDiv }>
              <div className={ styles.imageDiv }>
                <img
                  src={ book.bookImg }
                  alt={ book.name }
                />
              </div>
              <div className={ styles.textDiv }>
                <h3>{book.name}</h3>
                <p>{book.author}</p>
                <span className={ styles.spanTags }>
                  <p>{book.tags.join(' • ')}</p>
                </span>
                <ReadingButton />
              </div>
            </div>
          </section>
          <section className={ styles.bottomDiv }>
            <div className={ styles.headingDiv }>
              <h3> Synopsis </h3>
              <div className={ styles.bottomLine } />
            </div>
            <div className={ styles.textArea }>
              <p>{book.description}</p>
            </div>
            <div className={ styles.buttonDiv }>
              {' '}
              <ReadingButton />
              {' '}
            </div>
          </section>
        </>
      ) : (
        <div />
      )}
      <Footer />
    </div>
  );
}

export default OverviewPage;
