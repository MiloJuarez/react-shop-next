import React from 'react';
import styles from '@styles/ProductItem.module.scss';
import Image from 'next/image';

const ProductItem = ({ product, children }) => {
    return (
        <article className={styles.ProductItem}>
            <figure className={styles.ProductItem__figure}>
                <Image loader={() => product.images[0]} src={product.images[0]} alt={product.title} className={styles.ProductItem__image} width="70" height="70" />
            </figure>
            <p className={styles['ProductItem__text--light']}>{product.title}</p>
            <p className={styles['ProductItem__text--bold']}>${product.price}</p>
            {children}
        </article>
    );
};

export default ProductItem;
