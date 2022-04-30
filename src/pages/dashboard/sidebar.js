import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import dashLogo from '../../assets/dashboard/mobile-logo.svg';
import sidebarData from './sidebar-data';
import logoutIcon from '../../assets/icons/log-out.svg';

import {
  SidebarWrapper,
  SidebarNavigationButtons,
  NavLinkLogo,
  Main,
} from './sidebar-styles';
import Navigation from './mobile/navigation';
import { getUserData } from '../../store/slice/neverlandUserSlice';
import { USER_DATA } from '../../constants';
import { logout } from '../../store/slice/aysncThunkActions';

const allCategories = [...new Set(sidebarData.map((item) => item))];

const Sidebar = () => {
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState(allCategories);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { component } = categories[value];
  const data = useSelector(getUserData)?.data;
  const [isShowing, setIsShowing] = useState(false)

  const showSidebar = () => setIsShowing(!isShowing);
  const handleResize = () => window.innerWidth > 768 && isShowing && setIsShowing(false);

  const signout = () => {
    localStorage.removeItem(USER_DATA);
    dispatch(logout())
    navigate('/home')
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })
  return (
    <SidebarWrapper>
      <SidebarNavigationButtons isShowing={ isShowing }>
        <header className='header margin-b padding-l'>
          <nav className='sidebar__navbar padding-l'>
            <NavLinkLogo to='/home'>
              <img src={ dashLogo } alt={ dashLogo } />
            </NavLinkLogo>
          </nav>
        </header>
        <Main>
          <h1 className='title margin-b padding-l'>
            Hi,
            {' '}
            {data && data.username}
          </h1>
          <section className='sidebar__navlinks__container'>
            <div className='sidebar__navlinks'>
              {categories.map((category, index) => {
                return (
                  <div
                    className={ ` links padding-l  ${ index === value && 'active' }` }
                    key={ index }
                    onClick={ () => { setValue(index); setIsShowing(false) } }
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
            <div className='links padding-l' onClick={ signout }>
              <img src={ logoutIcon } alt={ logoutIcon } />
              Logout
            </div>
          </section>
        </Main>
      </SidebarNavigationButtons>
      <div className='side-component-wrapper'>
        <Navigation showSidebar={ showSidebar } />
        {component}
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
