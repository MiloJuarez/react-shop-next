import React from 'react';
import styles from '@styles/SecondaryInputSubmit.module.scss';

const SecondaryInputSubmit = ({ value }) => {
    return <input type="submit" value={value} className={styles.SecondaryInputSubmit} />;
};

export default SecondaryInputSubmit;
