import React from 'react';

import { Tab } from '@headlessui/react';
import { LibraryWapper } from './library.styles';
import SearchBar from '../../components/SearchComponent/SearchBar';
import Footer from '../homePage/components/footerSection/Footer';

const Library = () => {
  return (
    <>
      <LibraryWapper>
        <div className='library-search'>
          <SearchBar placeholder='Search for books' />
        </div>
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
      <Footer />
    </>
  );
};

export default Library;
