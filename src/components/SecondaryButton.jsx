import React from 'react';
import styles from '@styles/SecondaryButton.module.scss';

const SecondaryButton = ({ label }) => {
    return <button className={styles.SecondaryButton}>{label}</button>;
};

export default SecondaryButton;
