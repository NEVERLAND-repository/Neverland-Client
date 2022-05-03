import React, { useState } from 'react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import styles from './SearchBar.module.css';

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
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
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div key={ key } className={ styles.dataResultItem }>
                <img src={ value.imageLink } alt={ value.title } />
                <div className={ styles.dataResultItemText }>
                  <h3>
                    <a className={ styles.dataItem } href={ value.link } target='_blank' rel='noreferrer'>
                      { value.title }
                      {' '}
                      &rarr;
                    </a>
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
