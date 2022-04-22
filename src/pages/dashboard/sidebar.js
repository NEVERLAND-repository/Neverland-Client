import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dashLogo from '../../assets/dashboard/mobile-logo.svg';
import sidebarData from './sidebar-data';
import './dashboard.module.css'
import logoutIcon from '../../assets/icons/log-out.svg';
import styles from './sidebar.module.css';
import sharedStyles from './dashboard.module.css';

const allCategories = [...new Set(sidebarData.map((item) => item))];

const Sidebar = () => {
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState(allCategories);
  const { component } = categories[value];

  return (
    <section className={ styles.sidebar__container }>
      <section className={ styles.navigation }>
        <header className={ styles.header }>
          <nav className={ styles.sidebar__navbar }>
            <Link to='/home' className={ styles.nav__logo }>
              <img src={ dashLogo } alt={ dashLogo } />
            </Link>
          </nav>
        </header>
        <main className={ styles.main }>
          <h1 className={ sharedStyles.title }>Hi, Jess</h1>
          <section className={ styles.sidebar__navlinks__container }>
            <div className={ styles.sidebar__navlinks }>
              {categories.map((category, index) => {
                return (
                  <div
                    className={ ` ${ styles.links } ${
                      index === value && styles.active
                    }` }
                    key={ index }
                    onClick={ () => setValue(index) }
                  >
                    <img
                      src={ category.img }
                      className={ `${ index === value && styles.image__active }` }
                      alt={ category.img }
                    />
                    {category.category}
                  </div>
                );
              })}
            </div>
            <div className={ `${ styles.links }`} onClick={ () => {} }>
              <img
                src={ logoutIcon }
                alt={ logoutIcon }
              />
              Logout
            </div>
          </section>
        </main>
      </section>

      {component}
    </section>
  );
};

export default Sidebar;
