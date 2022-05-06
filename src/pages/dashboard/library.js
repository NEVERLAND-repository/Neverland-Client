import React, { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import { useSelector } from 'react-redux';
import { LibraryWapper } from './library.styles';
import SearchBar from '../../components/SearchComponent/SearchBar';
import Footer from '../homePage/components/footerSection/Footer';
import BookCard from '../../components/bookCardComponent/BookCard';
import getAxiosInstance from '../../services/axios';
import { getUserData } from '../../store/slice/neverlandUserSlice';

const Library = () => {
  const token = useSelector(getUserData)?.token;
  const [keepReading, setKeepReading] = useState(null);
  const [yetToRead, setYetToRead] = useState(null);

  const getLibrary = async () => {
    const response = await getAxiosInstance(token).get(
      'api/v1/user/library',
    )

    if (response.data.status === 'success') {
      setKeepReading(response.data.data.keepReading);
      setYetToRead(response.data.data.yetToRead);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getLibrary()
  }, [])

  return (
    <>
      <LibraryWapper>
        <div className='library-search'>
          <SearchBar placeholder='Search for books in your Library' query='user' />
        </div>
        <div className='tab-group'>
          <h1 className='title library-title'>Library</h1>
          <Tab.Group>
            <Tab.List className='tab-list'>
              <Tab
                className={ ({ selected }) => (selected ? 'active' : 'no-active') }
              >
                <span
                  className='tab-content padding-r'
                >
                  Keep Reading
                </span>
              </Tab>
              <Tab
                className={ ({ selected }) => (selected ? 'active' : 'no-active') }
              >
                <span
                  className='tab-content padding-l'
                >
                  Yet To Read
                </span>
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className='read-books'>
                {
                  keepReading && keepReading.map((book) => (
                    <BookCard
                      library
                      id={ book.bookId._id }
                      imageUrl={ book.bookId.bookImg }
                      title={ book.bookId.name }
                      author={ book.bookId.author }
                      type={ book.bookId.category }
                      genre={ book.bookId.tags.join(' • ') }
                      description={ book.bookId.description }
                    />
                  ))
                }
              </Tab.Panel>
              <Tab.Panel className='read-books'>
                {
                  yetToRead && yetToRead.map((book) => (
                    <BookCard
                      library
                      id={ book.bookId._id }
                      imageUrl={ book.bookId.bookImg }
                      title={ book.bookId.name }
                      author={ book.bookId.author }
                      type={ book.bookId.category }
                      genre={ book.bookId.tags.join(' • ') }
                      description={ book.bookId.description }
                    />
                  ))
                }
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </LibraryWapper>
      <Footer />
    </>
  );
};

export default Library;
