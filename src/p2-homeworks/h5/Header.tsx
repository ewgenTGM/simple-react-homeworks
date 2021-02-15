import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from './Routes';
import styles from './Header.module.css';

const Header = () => {
  return (
      <header className={ styles.header }>
        <nav className={ styles.nav }>
          <NavLink
              to={ PATH.PRE_JUNIOR }
              className={ styles.nav_link }
              activeClassName={ styles.active_link }>PRE-JUNIOR</NavLink>
          <NavLink
              to={ PATH.HW1 }
              className={ styles.nav_link }
              activeClassName={ styles.active_link }>Home work 1</NavLink>
          <NavLink
              to={ PATH.HW2 }
              className={ styles.nav_link }
              activeClassName={ styles.active_link }>Home work 2</NavLink>
          <NavLink
              to={ PATH.HW3 }
              className={ styles.nav_link }
              activeClassName={ styles.active_link }>Home work 3</NavLink>
          <NavLink
              to={ PATH.HW4 }
              className={ styles.nav_link }
              activeClassName={ styles.active_link }>Home work 4</NavLink>
        </nav>
      </header>
  );
};

export default Header;
