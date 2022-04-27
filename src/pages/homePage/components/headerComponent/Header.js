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
import { useSelector } from 'react-redux';
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
import { getUserData } from '../../../../store/slice/neverlandUserSlice';

const Header = ({ label }) => {
  const navLinks = [
    { name: 'Comics', path: 'comics' },
    { name: 'Manga', path: 'mangas' },
    { name: 'Novels', path: 'novels' },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const isAuth = useSelector(getUserData)?.token

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
          <nav className={ styles.navbar }>
            <Link to='/' className={ styles.logo }>
              <img src={ navLogo } alt='NeverLand-orange-color-logo' />
            </Link>
            <ul className={ styles.navbarList }>
              {label && navLinks.map(({ name, path }) => (
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
                    <PopoverContent fontSize='1.6rem' marginTop='2.8rem' border='none' outline='0'>
                      <PopoverArrow />
                      <PopoverCloseButton p={ 10 } />
                      <PopoverBody border='none' padding={ 10 }>
                        <List gap='10' p='4'>
                          <Link
                            as='button'
                            to=''
                            className={ styles.navLink }
                            activeClassName={ styles.active }
                            onClick={ () => { } }
                          >
                            <ListItem padding='2' fontSize='20px' marginTop='20px' _hover={ { cursor: 'pointer' } }>
                              <Image src={ lib } alt='library' width='1.2rem' display='inline' marginRight='1rem' />
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
                            <ListItem padding='2' fontSize='20px' _hover={ { cursor: 'pointer', bg: 'white' } }>
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
                <SecondaryButton label='Get Started' />
              )}
            </div>
          </nav>
          <div className={ styles.burger } onClick={ toggleMenu }>
            <img src={ icon } alt='menu' />
          </div>
        </NavContainer>
        {isMenuOpen && (<div />)}
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
