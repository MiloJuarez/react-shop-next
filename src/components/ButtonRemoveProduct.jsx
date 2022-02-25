import React from 'react';
import close from '@icons/icon_close.png';
import styles from '@styles/ButtonRemoveProduct.module.scss';
import Image from 'next/image';

const ButtonRemoveProduct = ({ handleClick }) => {
    return <Image className={styles.ButtonRemoveProduct} src={close} alt="close" onClick={handleClick} />;
};

export default ButtonRemoveProduct;
