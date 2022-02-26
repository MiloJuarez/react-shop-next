import React from 'react';
import styles from '@styles/ProductItem.module.scss';
import Image from 'next/image';

const ProductItem = ({ product, children }) => {
    return (
        <article className={styles.ProductItem}>
            <figure className="ProductItem__figure">
                <Image src={product.images[0]} alt={product.title} />
            </figure>
            <p className="ProductItem__text--light">{product.title}</p>
            <p className="ProductItem__text--bold">${product.price}</p>
            {children}
        </article>
    );
};

export default ProductItem;
