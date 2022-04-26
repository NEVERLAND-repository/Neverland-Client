import React from 'react';

import { Tab } from '@headlessui/react';
import { LibraryWapper } from './library.styles';
import SearchBar from '../../components/SearchComponent/SearchBar';

const Library = () => {
  return (
    <LibraryWapper>
      <SearchBar placeholder='Search for books' className='library-search' />
      <Tab.Group>
        <Tab.List>
          <Tab
            className={ ({ selected }) => (selected ? 'bg-blue-500 text-white' : 'bg-white text-black') }
          >
            Tab 1
          </Tab>
          <Tab
            className={ ({ selected }) => (selected ? 'bg-blue-500 text-white' : 'bg-white text-black') }
          >
            Tab 2
          </Tab>
          {/* ...  */}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          {/* ... */}
        </Tab.Panels>
      </Tab.Group>
    </LibraryWapper>
  );
};

export default Library;
