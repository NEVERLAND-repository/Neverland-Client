/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import burger from '../../assets/icons/burger.svg';
import close from '../../assets/icons/cross.svg';
import { Container } from '../container/Container';
import styles from './Header.module.css';

function Header() {
    const navLinks = [
        { name: 'Comics', path: '/comics' },
        { name: 'Mangas', path: '/mangas' },
        { name: 'Novels', path: '/novels' },
    ];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen, () => {
            document.addEventListener('click', toggleMenu);
        });
    };
    const icon = isMenuOpen ? close : burger;
    return (
        <>
            <header className={styles.header}>
                <Container>
                    <Link to="/" className={styles.logo}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            {navLinks.map(({ name, path }) => (
                                <li key={name} className={styles.navItem}>
                                    <NavLink
                                        to={path}
                                        className={styles.navLink}
                                        activeClassName={styles.active}
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.navBtn}>
                            <button className={styles.navBtnLink}>
                                <Link to="/signup">Get Started</Link>
                            </button>
                        </div>
                    </nav>
                    <div className={styles.burger} onClick={toggleMenu}>
                        <img src={icon} alt="menu" />
                    </div>
                </Container>
                {isMenuOpen && (
                    <span
                        className={styles.menu_bg}
                        onClick={toggleMenu}
                        onKeyDown={toggleMenu}
                        role="button"
                    >
                        <span className={styles.menu}>
                            <div className={styles.menu_container}>
                                <div className={styles.menu_body}>
                                    <div className={styles.menu_item}>
                                        <p>Features</p>
                                    </div>
                                    <div className={styles.menu_item}>
                                        <p>About</p>
                                    </div>
                                </div>
                                <div
                                    className={styles.menu_footer}
                                    onClick={toggleMenu}
                                    onKeyDown={toggleMenu}
                                    role="login_button"
                                >
                                    <Link
                                        to="/login"
                                        className={styles.menu_link}
                                        onClick={toggleMenu}
                                        onKeyDown={toggleMenu}
                                        role="button"
                                    >
                                        <p>Get Started</p>
                                    </Link>
                                </div>
                            </div>
                        </span>
                    </span>
                )}
            </header>
            <span
                className={styles.menu_bg}
                onClick={toggleMenu}
                onKeyDown={toggleMenu}
                role="menu_bg"
            />
        </>
    );
}

export default Header;
