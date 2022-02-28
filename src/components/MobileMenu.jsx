import React from 'react';
import closeIcon from '@icons/icon_close.png';
import Image from 'next/image';
import styles from '@styles/MobileMenu.module.scss';

const MobileMenu = ({ handleClick }) => {
    return (
        <div className={styles.MobileMenu}>
            <div className={styles.MobileMenu__close}>
                <Image src={closeIcon} alt="close" onClick={handleClick} />
            </div>
            <ul className={styles.MobileMenu__categories}>
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

            <ul className={styles.MobileMenu__account}>
                <li>
                    <a href="/">My orders</a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
            </ul>

            <ul className={styles.MobileMenu__profile}>
                <li>
                    <a href="/" className={styles.email}>
                        platzi@example.com
                    </a>
                </li>
                <li>
                    <a href="/" className={styles['sign-out']}>
                        Sign up
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default MobileMenu;
