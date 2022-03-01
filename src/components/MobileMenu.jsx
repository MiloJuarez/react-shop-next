/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import closeIcon from '@icons/icon_close.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/MobileMenu.module.scss';

const MobileMenu = ({ handleClick }) => {
    return (
        <div className={styles.MobileMenu}>
            <div className={styles.MobileMenu__close}>
                <Image src={closeIcon} alt="close" onClick={handleClick} />
            </div>
            <ul className={styles.MobileMenu__categories}>
                <li>
                    <Link href="/" passHref>
                        <a>CATEGORIES</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a>All</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a>Clothes</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a>Electronics</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a>Furniture</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a>Toys</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a>Others</a>
                    </Link>
                </li>
            </ul>

            <ul className={styles.MobileMenu__account}>
                <li>
                    <Link href="/" passHref>
                        <a>My orders</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a>My account</a>
                    </Link>
                </li>
            </ul>

            <ul className={styles.MobileMenu__profile}>
                <li>
                    <Link href="/" passHref>
                        <a className={styles.email}>platzi@example.com</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a className={styles['sign-out']}>Sign up</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default MobileMenu;
