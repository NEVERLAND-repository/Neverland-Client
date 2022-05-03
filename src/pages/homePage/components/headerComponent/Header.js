import React, { useState } from 'react';
import {
  NavLink, Link, useNavigate, useParams,
} from 'react-router-dom';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  List,
  Image,
  ListItem,
  Portal,
  Wrap,
  WrapItem,
  Avatar,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import lib from '../../../../assets/icons/book.svg';
import pro from '../../../../assets/icons/pro-icon.svg';
import logout from '../../../../assets/icons/log-out.svg';
import burger from '../../../../assets/icons/burger.svg';
import close from '../../../../assets/icons/cross.svg';
import profile from '../../../../assets/icons/profile-icon.svg';
import { NavContainer } from '../../../../components/container/NavContainer';
import navLogo from '../../../../assets/images/neverLandLogo-orange.png';
import styles from './Header.module.css';
import SecondaryButton from '../../../../components/buttonComponent/SecondaryButton';
import { deleteUser, getUserData } from '../../../../store/slice/neverlandUserSlice';
import { USER_DATA } from '../../../../constants';
// import { signout } from '../../../../services/utils';

const Header = ({ label }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Comics', path: 'comics' },
    { name: 'Manga', path: 'manga' },
    { name: 'Novels', path: 'novels' },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const isAuth = useSelector(getUserData)?.token

  // document.addEventListener('scroll', (e) => {
  //   if (window.scrollY > 1) {
  //     document.getElementById('header').style.position = 'fixed';
  //   } else {
  //     document.getElementById('header').style.position = 'relative';
  //   }
  // })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen, () => {
      document.addEventListener('click', toggleMenu);
    });
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen, () => {
      document.addEventListener('click', toggleProfile);
    });
  };

  const signout = () => {
    localStorage.removeItem(USER_DATA);
    dispatch(deleteUser())
    navigate('/home')
  }

  const icon = isMenuOpen ? close : burger;

  return (
    <>
      <header className={ styles.header } id='header'>
        <NavContainer>
          <nav className={ styles.navbar }>
            <Link to='/' className={ styles.logo }>
              <img src={ navLogo } alt='NeverLand-orange-color-logo' />
            </Link>
            <ul className={ styles.navbarList }>
              {label
                && navLinks.map(({ name, path }) => (
                  <li key={ name } className={ styles.navbarItem }>
                    <NavLink
                      to={ `/home/${ path }` }
                      className={ styles.navLink }
                      activeClassName={ styles.active }
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
            </ul>
            <div className={ styles.navBtn }>
              {isAuth ? (
                <Popover arrowSize='16' zIndex='10000' placement='bottom-end'>
                  <PopoverTrigger>
                    <Wrap>
                      <WrapItem>
                        <Avatar size='lg' name='User' src={ profile } />
                      </WrapItem>
                    </Wrap>
                  </PopoverTrigger>
                  <Portal zIndex='10000'>
                    <PopoverContent
                      fontSize='1.6rem'
                      marginTop='2.8rem'
                      border='none'
                      outline='0'
                    >
                      <PopoverArrow />
                      <PopoverCloseButton p={ 10 } />
                      <PopoverBody border='none' padding={ 10 }>
                        <List gap='10' p='4'>
                          <Link
                            as='button'
                            to='/dashboard'
                            className={ styles.navLink }
                            activeClassName={ styles.active }
                            onClick={ () => {} }
                          >
                            <ListItem
                              padding='2'
                              fontSize='20px'
                              marginTop='20px'
                              _hover={ { cursor: 'pointer' } }
                            >
                              <Image
                                src={ lib }
                                alt='library'
                                width='1.2rem'
                                display='inline'
                                marginRight='1rem'
                              />
                              My Library
                            </ListItem>
                          </Link>
                          <Link
                            as='button'
                            to=''
                            className={ styles.navLink }
                            activeClassName={ styles.active }
                            onClick={ () => {} }
                          >
                            <ListItem onClick={ signout } padding='2' fontSize='20px' _hover={ { cursor: 'pointer', bg: 'white' } }>
                              <Image src={ logout } alt='logout' width='1.2rem' display='inline' marginRight='1rem' />
                              Logout
                            </ListItem>
                          </Link>
                        </List>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
              ) : (
                <SecondaryButton label='Get Started' navigation='/login' />
              )}
            </div>
          </nav>
          <div className={ styles.burger } onClick={ toggleMenu }>
            <img src={ icon } alt='menu' />
          </div>
        </NavContainer>
        {isMenuOpen && (
          <span
            className={ styles.menu_bg }
            onClick={ toggleMenu }
            onKeyDown={ toggleMenu }
            role='button'
          >
            <span className={ styles.menu }>
              <div className={ styles.menu_container }>
                <div className={ styles.menu_body }>
                  <ul className={ styles.menu_list }>
                    {navLinks.map(({ name, path }) => (
                      <li key={ name } className={ styles.menu_item }>
                        <NavLink
                          to={ path }
                          className={ styles.menu_link }
                          activeClassName={ styles.active }
                        >
                          {name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={ styles.menu_footer }
                  onClick={ toggleMenu }
                  onKeyDown={ toggleMenu }
                  role='get_started_button'
                >
                  <div className={ styles.navBtn }>
                    <button className={ styles.navBtnLink }>
                      <Link to='/signup'>Get Started</Link>
                    </button>
                  </div>
                </div>
              </div>
            </span>
          </span>
        )}
      </header>
      {/* <span
        className={ styles.menu_bg }
        onClick={ () => {
          setIsMenuOpen(false);
        } }
        onKeyDown={ () => {
          setIsMenuOpen(false);
        } }
        role='menu_bg'
      /> */}
    </>
  );
}

export default Header;
