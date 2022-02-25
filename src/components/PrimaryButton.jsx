import React from 'react';
import styles from '@styles/PrimaryButton.module.scss';

const PrimaryButton = ({ label }) => {
    return <button className={styles.PrimaryButton}>{label}</button>;
};

export default PrimaryButton;
