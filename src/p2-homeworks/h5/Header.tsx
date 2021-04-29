import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from './Routes';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<NavLink
					to={PATH.PRE_JUNIOR}
					className={styles.nav_link}
					activeClassName={styles.active_link}
				>
					PRE-JUNIOR
				</NavLink>
				<NavLink
					to={PATH.JUNIOR}
					className={styles.nav_link}
					activeClassName={styles.active_link}
				>
					JUNIOR
				</NavLink>
				<NavLink
					to={PATH.JUNIOR_PLUS}
					className={styles.nav_link}
					activeClassName={styles.active_link}
				>
					JUNIOR-PLUS
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
