import React, { useState } from 'react';
import {
  NavLink,
  Link,
  useNavigate,
  useParams,
  useLocation,
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
import logout from '../../../../assets/icons/log-out.svg';
import burger from '../../../../assets/icons/burger.svg';
import close from '../../../../assets/icons/cross.svg';
import profile from '../../../../assets/icons/profile-icon.svg';
import { NavContainer } from '../../../../components/container/NavContainer';
import navLogo from '../../../../assets/images/neverLandLogo-orange.png';
import styles from './Header.module.css';
import SecondaryButton from '../../../../components/buttonComponent/SecondaryButton';
import {
  deleteUser,
  getUserData,
} from '../../../../store/slice/neverlandUserSlice';
import { USER_DATA } from '../../../../constants';
// import utils from '../../../../services/utils';

const Header = ({ label }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const activePath = pathname.split('/')[2];

  const navLinks = [
    { name: 'Comics', path: 'comics' },
    { name: 'Manga', path: 'manga' },
    { name: 'Novels', path: 'novels' },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const isAuth = useSelector(getUserData)?.token;

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
    dispatch(deleteUser());
    navigate('/home');
  };

  const icon = isMenuOpen ? close : burger;

  return (
    <>
      <header className={ styles.header }>
        <NavContainer>
          <nav className={ styles.navbar }>
            <Link to='/home' className={ styles.logo }>
              <img
                src={ navLogo }
                alt='NeverLand-orange-color-logo'
                className={ styles.imgLogo }
              />
            </Link>
            <ul className={ styles.navbarList }>
              {label
                && navLinks.map(({ name, path }) => (
                  <li key={ name } className={ styles.navbarItem }>
                    <NavLink
                      to={ `/home/${ path }` }
                      className={ `${ styles.navLink } ${ path === activePath ? styles.active : ''
                      }` }
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
            </ul>
            <div className={ styles.navBtn }>
              {isAuth ? (
                <Popover
                  arrowSize='10px'
                  zIndex='20000'
                  placement='bottom-end'
                  marginTop='0'
                  border='none'
                >
                  <PopoverTrigger>
                    <Wrap>
                      <WrapItem>
                        <Avatar size='md' name='User' src={ profile } />
                      </WrapItem>
                    </Wrap>
                  </PopoverTrigger>
                  <Portal zIndex='20000'>
                    <PopoverContent
                      fontSize='1.5rem'
                      marginTop='2.5rem'
                      border='none'
                      outline='0'
                      _focus={ { boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' } }
                    >
                      <PopoverArrow />
                      <PopoverCloseButton p={ 10 } />
                      <PopoverBody border='none' padding={ 4 }>
                        <List gap='10' p='4'>
                          <Link
                            as='button'
                            to='/dashboard'
                            className={ styles.navLink }
                            activeClassName={ styles.active }
                            onClick={ () => { } }
                          >
                            <ListItem
                              padding='2'
                              fontSize='2rem'
                              marginTop='20px'
                              _hover={ { cursor: 'pointer' } }
                              display='flex'
                              justifyContent='center'
                              alignItems='center'
                            >
                              <Image
                                src={ lib }
                                alt='library'
                                width='2rem'
                                display='inline'
                                marginRight='1rem'
                                fill='red'
                              />
                              My Library
                            </ListItem>
                          </Link>
                          <Link
                            as='button'
                            to=''
                            className={ styles.navLink }
                            activeClassName={ styles.active }
                            onClick={ () => { } }
                          >
                            <ListItem
                              onClick={ signout }
                              padding='2'
                              marginTop='2rem'
                              fontSize='2rem'
                              _hover={ { cursor: 'pointer', bg: 'white' } }
                              display='flex'
                              justifyContent='flex-start'
                              alignItems='center'
                            >
                              <Image
                                src={ logout }
                                alt='logout'
                                width='2.3rem'
                                display='inline'
                                marginRight='1rem'
                                marginLeft='1rem'
                              />
                              Logout
                            </ListItem>
                          </Link>
                        </List>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
              ) : (
                <span className={ styles.btn }>
                  <SecondaryButton label='Get Started' navigation='/login' />
                </span>
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
              <div className={ styles.menu_body }>
                <ul className={ styles.menu_list }>
                  {navLinks.map(({ name, path }) => (
                    <li key={ name } className={ styles.menu_item }>
                      <NavLink
                        to={ `/home/${ path }` }
                        className={ styles.menu_link }
                        activeClassName={ styles.active }
                      >
                        {name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </span>
          </span>
        )}
      </header>
    </>
  );
};

export default Header;
