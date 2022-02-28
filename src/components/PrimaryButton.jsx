/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import styles from '@styles/PrimaryButton.module.scss';

const PrimaryButton = ({ label, link }) => {
    return (
        <div className={styles.PrimaryButton}>
            <Link href={link}>{label}</Link>
        </div>
    );
};

export default PrimaryButton;
