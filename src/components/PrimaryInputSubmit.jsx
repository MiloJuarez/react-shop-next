import React from 'react';
import styles from '@styles/PrimaryInputSubmit.module.scss';

const PrimaryInputSubmit = ({ value, handle }) => {
    return (
        <button type="submit" className={styles.PrimaryInputSubmit} onClick={handle}>
            {value}
        </button>
    );
};

export default PrimaryInputSubmit;
