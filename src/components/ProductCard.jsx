import React, { useContext } from 'react';
import styles from '@styles/ProductCard.module.scss';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import addedToCartIcon from '@icons/bt_added_to_cart.svg';
import AppContext from '@context/AppContext';
import Image from 'next/image';

const ProductCard = ({ product }) => {
    const { addToCart, inCart } = useContext(AppContext);

    const handleClick = (item) => {
        addToCart(item);
    };

    const customLoader = ({ src, width, quality }) => {
        return `${src}&w=${width}&q=${quality || 75}`;
    };

    return (
        <article className={styles.ProductCard}>
            <Image loader={customLoader} src={product?.images[0]} alt={product?.title} className={styles.ProductCard__image} width="100" height="100" layout="responsive" />
            <div className={styles['ProductCard-info']}>
                <div>
                    <p className={(styles['ProductCard-info__text'], styles['ProductCard-info__text--bold'])}>${product.price}</p>
                    <p className={(styles['ProductCard-info__text'], styles['ProductCard-info__text--gray'])}>{product.title}</p>
                </div>
                <figure className={styles['ProductCard-info__figure']}>
                    {inCart(product) == false ? (
                        <Image src={addToCartIcon} alt="Add to cart" className={styles['ProductCard-info__figure--icon-add']} onClick={() => handleClick(product)} />
                    ) : (
                        <Image src={addedToCartIcon} alt="Added to cart" className={styles['ProductCard-info__figure--icon-added']} />
                    )}
                </figure>
            </div>
        </article>
    );
};

export default ProductCard;
