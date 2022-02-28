import React, { useState, useContext } from 'react';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCartIcon from '@icons/icon_shopping_cart.svg';
import ShoppingCart from '@containers/ShoppingCart';
import MobileMenu from '@components/MobileMenu';
import styles from '@styles/Header.module.scss';
import Image from 'next/image';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleMM, setToggleMM] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleToggleMM = () => {
        setToggleMM(!toggleMM);
    };

    return (
        <nav className={styles.Navbar}>
            <div className={styles.Navbar__menu}>
                <Image src={menu} alt="menu" onClick={() => handleToggleMM()} />
            </div>
            {toggleMM && <MobileMenu handleClick={() => handleToggleMM()} />}
            <div className={styles['Navbar-left']}>
                <Image src={logo} alt="logo" className={styles['Navbar-left__logo']} priority={true} />
                <ul className={styles['Navbar-left__items']}>
                    <li>
                        <a href="/" className={styles.Navbar__item}>
                            All
                        </a>
                    </li>
                    <li>
                        <a href="/" className={styles.Navbar__item}>
                            Clothes
                        </a>
                    </li>
                    <li>
                        <a href="/" className={styles.Navbar__item}>
                            Electronics
                        </a>
                    </li>
                    <li>
                        <a href="/" className={styles.Navbar__item}>
                            Furnitures
                        </a>
                    </li>
                    <li>
                        <a href="/" className={styles.Navbar__item}>
                            Toys
                        </a>
                    </li>
                    <li>
                        <a href="/" className={styles.Navbar__item}>
                            Others
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles['Navbar-right']}>
                <ul className={styles['Navbar-right__items']}>
                    <li className={styles['Navbar-right__email']}>
                        <div onClick={handleToggle} onKeyPress={handleToggle} role="button" tabIndex={0}>
                            platzi@example.com
                        </div>
                    </li>
                    <li className={styles['Navbar-right__cart']}>
                        <Image src={shoppingCartIcon} alt="cart" onClick={() => setToggleOrders(!toggleOrders)} onKeyPress={() => setToggleOrders(!toggleOrders)} />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
                {toggle && <Menu />}
                {toggleOrders && <ShoppingCart onTapBack={() => setToggleOrders(!toggleOrders)} />}
            </div>
        </nav>
    );
};

export default Header;
