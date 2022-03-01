import React from 'react';
import addToCard from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductInfo.module.scss';
import Image from 'next/image';

const ProductInfo = ({ product }) => {
    return (
        <>
            <Image src={product.image[0]} alt={product.title} className={styles.ProductInfo__image} />
            <div className={styles.ProductInfo}>
                <p className={(styles['ProductInfo__text'], styles['ProductInfo__text--small'], styles['ProductInfo__text--bold'], styles['ProductInfo__text--mb4'])}>${product.price}</p>
                <p
                    className={
                        (styles['ProductInfo__text'], styles['ProductInfo__text--medium'], styles['ProductInfo__text--bold'], styles['ProductInfo__text--light'], styles['ProductInfo__text--mb36'])
                    }
                >
                    {product.title}
                </p>
                <p className={(styles['ProductInfo__text'], styles['ProductInfo__text--small'], styles['ProductInfo__text--mb36'])}>{product.description}</p>
                <button className={(styles['ProductInfo__button'], styles['ProductInfo__button--flex'])}>
                    <Image src={addToCard} alt="add to cart" />
                    Add to cart
                </button>
            </div>
        </>
    );
};

export default ProductInfo;
