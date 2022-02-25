import React from 'react';
import styles from '@styles/MobileMenu.module.scss';
import closeIcon from '@icons/icon_close.png';

const MobileMenu = ({ handleClick }) => {
    return (
        <div className={styles.MobileMenu}>
            <img className="MobileMenu__close" src={closeIcon} alt="close" onClick={handleClick} />
            <ul className="MobileMenu__categories">
                <li>
                    <a href="/">CATEGORIES</a>
                </li>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furniture</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
            </ul>

            <ul className="MobileMenu__account">
                <li>
                    <a href="/">My orders</a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
            </ul>

            <ul className="MobileMenu__profile">
                <li>
                    <a href="/" className="email">
                        platzi@example.com
                    </a>
                </li>
                <li>
                    <a href="/" className="sign-out">
                        Sign up
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default MobileMenu;
