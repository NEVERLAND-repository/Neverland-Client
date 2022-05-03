import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import getAxiosInstance from '../../services/axios';
import { getUserData } from '../../store/slice/neverlandUserSlice';
import styles from './SearchBar.module.css';

const SearchBar = ({ placeholder }) => {
  const token = useSelector(getUserData)?.token;
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = async (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const response = await getAxiosInstance(token).get(
      `api/v1/home/search?searchQuery=${ searchWord?.toLowerCase() || '' }`,
    )
    console.log(response.data.data)

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(response.data.data);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  return (
    <div className={ styles.search }>
      <div className={ styles.searchInputs }>
        <input
          type='text'
          placeholder={ placeholder }
          value={ wordEntered }
          onChange={ handleFilter }
        />
        <div className={ styles.searchIcon }>
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id='clearBtn' onClick={ clearInput } />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className={ styles.dataResult }>
          {filteredData.map((value, key) => {
            return (
              <div key={ key } className={ styles.dataResultItem }>
                <img src={ value.bookImg } alt={ value.title } />
                <div className={ styles.dataResultItemText }>
                  <h3>
                    <Link className={ styles.dataItem } to={ `/overview/${ value._id }` } target='_blank' rel='noreferrer'>
                      {value.name }
                      {' '}
                      &rarr;
                    </Link>
                  </h3>
                  <p>{ value.author }</p>
                </div>
              </div>

            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
