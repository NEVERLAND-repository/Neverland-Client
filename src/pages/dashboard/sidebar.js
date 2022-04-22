import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import dashLogo from '../../assets/dashboard/mobile-logo.svg';
import sidebarData from './sidebar-data';
import logoutIcon from '../../assets/icons/log-out.svg';
import {
  SidebarWrapper,
  SidebarNavigationButtons,
  NavLinkLogo,
  Main,
} from './sidebar-styles';

const allCategories = [...new Set(sidebarData.map((item) => item))];

const Sidebar = () => {
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState(allCategories);
  const { component } = categories[value];
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <SidebarWrapper>
      <SidebarNavigationButtons>
        <header className='header'>
          <nav className='sidebar__navbar'>
            <NavLinkLogo to='/home'>
              <img src={ dashLogo } alt={ dashLogo } />
            </NavLinkLogo>
          </nav>
        </header>
        <Main>
          <h1 className='title'>Hi, Jess</h1>
          <section className='sidebar__navlinks__container'>
            <div className='sidebar__navlinks'>
              {categories.map((category, index) => {
                return (
                  <div
                    className={ ` links  ${ index === value && 'active' }` }
                    key={ index }
                    onClick={ () => setValue(index) }
                  >
                    <img
                      src={ category.img }
                      className={ `${ index === value && 'image__active' }` }
                      alt={ category.img }
                    />
                    {category.category}
                  </div>
                );
              })}
            </div>
            <div className='links' onClick={ () => {} }>
              <img src={ logoutIcon } alt={ logoutIcon } />
              Logout
            </div>
          </section>
        </Main>
      </SidebarNavigationButtons>
      {component}
    </SidebarWrapper>
  );
};

export default Sidebar;
