import React from 'react';
import styles from '@styles/Title.module.scss';

const Title = ({ title }) => {
    return <h1 className={styles.Title}>{title}</h1>;
};

export default Title;
