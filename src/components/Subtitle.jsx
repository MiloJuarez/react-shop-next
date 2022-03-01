import React from 'react';
import styles from '@styles/Subtitle.module.scss';

const Subtitle = ({ subtitle }) => {
    return <p className={styles.Subtitle}>{subtitle}</p>;
};

export default Subtitle;
