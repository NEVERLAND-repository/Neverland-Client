import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
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
import lib from '../../../../assets/icons/book.svg';
import pro from '../../../../assets/icons/pro-icon.svg';
import logout from '../../../../assets/icons/log-out.svg';
import logo from '../../../../assets/images/logo.svg';
import burger from '../../../../assets/icons/burger.svg';
import close from '../../../../assets/icons/cross.svg';
import profile from '../../../../assets/icons/profile-icon.svg';
import { NavContainer } from '../../../../components/container/NavContainer';
import styles from './Header.module.css';

const Header = () => {
  const navLinks = [
    { name: 'Comics', path: 'comics' },
    { name: 'Mangas', path: 'mangas' },
    { name: 'Novels', path: 'novels' },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

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

  const icon = isMenuOpen ? close : burger;
  return (
    <>
      <header className={ styles.header }>
        <NavContainer>
          <Link to='/' className={ styles.logo }>
            <img src={ logo } alt='logo' />
          </Link>
          <nav className={ styles.navbar }>
            <ul className={ styles.navbarList }>
              {navLinks.map(({ name, path }) => (
                <li key={ name } className={ styles.navbarItem }>
                  <NavLink
                    to={ path }
                    className={ styles.navLink }
                    activeClassName={ styles.active }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className={ styles.navBtn }>
              {!isAuth ? (

                <Popover arrowSize='16' zIndex='10000' placement='bottom-end'>
                  <PopoverTrigger>
                    <Wrap>
                      <WrapItem>
                        <Avatar size='lg' name='User' src={ profile } />
                      </WrapItem>
                    </Wrap>
                  </PopoverTrigger>
                  <Portal zIndex='10000'>
                    <PopoverContent fontSize='1.6rem'>
                      <PopoverArrow />
                      <PopoverHeader>Menu</PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <List gap='6' p='4'>
                          <NavLink to='/library' className={ styles.navLink } activeClassName={ styles.active }>
                            <ListItem padding='4'>
                              <Image src={ lib } alt='library' width='1.2rem' display='inline' marginRight='1rem' />
                              My Library
                            </ListItem>
                          </NavLink>
                          <NavLink to='/profile' className={ styles.navLink } activeClassName={ styles.active }>
                            <ListItem padding='4'>
                              <Image src={ pro } alt='profile' width='1.2rem' display='inline' marginRight='1rem' />
                              My Profile
                            </ListItem>
                          </NavLink>
                          <Link
                            as='button'
                            to=''
                            className={ styles.navLink }
                            activeClassName={ styles.active }
                            onClick={ () => { } }
                          >
                            <ListItem padding='4'>
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
                <button className={ styles.navBtnLink }>
                  <Link to='/signup'>Get Started</Link>
                </button>
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
      <span
        className={ styles.menu_bg }
        onClick={ () => {
          setIsMenuOpen(false);
        } }
        onKeyDown={ () => {
          setIsMenuOpen(false);
        } }
        role='menu_bg'
      />
    </>
  );
}

export default Header;
