import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dashLogo from '../../assets/dashboard/mobile-logo.svg';
import sidebarData from './sidebar-data';
import styles from './dashboard.module.css'

const allCategories = [...new Set(sidebarData.map((item) => item))];

const Developers = () => {
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState(allCategories);
  const { component } = categories[value];

  return (
    <section className={ styles.sidebar__container }>

      <section className='navigation'>
        <header className={ styles.header }>
          <nav className='sidebar-navbar'>
            <Link to='/'>
              <img src={ dashLogo } alt='Devswallet logo' />
            </Link>
          </nav>
        </header>
        <main className={ styles.main }>
          <h1 className={ styles.title }>Hi, Jess</h1>
          {categories.map((category, index) => {
            return (
              <div
                className={ `${ category.sideclass } ${ index === value && 'active' }` }
                key={ index }
                onClick={ () => setValue(index) }
              >
                {/* {category.img} */}
                <img src={ category.img } className={ `${ category.imgclass } ${ index === value && 'image-active' }` } alt='' />
                {category.category}
              </div>
            );
          })}

        </main>
      </section>

      {component}

    </section>
  );
};

export default Developers;
