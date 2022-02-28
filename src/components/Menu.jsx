/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import styles from '@styles/Menu.module.scss';

const Menu = () => {
    return (
        <div className={styles.Menu}>
            <ul>
                <li>
                    <Link href="/">
                        <a>My orders</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>My account</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Sign up</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
