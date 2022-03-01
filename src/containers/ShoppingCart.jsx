import Head from 'next/head';
import React, { useContext } from 'react';
import styles from '@styles/ShoppingCart.module.scss';
import AppContext from '@context/AppContext';
import ButtonRemoveProduct from '@components/ButtonRemoveProduct';
import PrimaryButton from '@components/PrimaryButton';
import ProductItem from '@components/ProductItem';
import Title from '@components/Title';
import arrowBack from '@icons/arrow.svg';
import Image from 'next/image';

const ShoppingCart = ({ onTapBack }) => {
    const { state, removeFromCart, sumTotal } = useContext(AppContext);

    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <aside className={styles.ShoppingCart}>
                <div className={styles.ShoppingCart__title}>
                    <div className={styles.ShoppingCart__back}>
                        <Image src={arrowBack} alt="arrow" onClick={onTapBack} />
                    </div>
                    <Title title={'My Shopping Cart'} />
                </div>

                <div className={styles.ShoppingCart__container}>
                    {state.cart.map((product) => (
                        <ProductItem product={product} key={`productItem-${product.id}`}>
                            <ButtonRemoveProduct handleClick={() => removeFromCart(product)} />
                        </ProductItem>
                    ))}

                    <div className={styles.ShoppingCart__ca}>
                        <article className={styles['ShoppingCart-orderItem--flex']}>
                            <p className={styles['ShoppingCart-orderItem__text']}>
                                <span className={styles['ShoppingCart-orderItem__text--medium']}>Total</span>
                            </p>
                            <p className={(styles['ShoppingCart-orderItem__text'], styles['ShoppingCart-orderItem__text--end'])}>${sumTotal()}</p>
                        </article>

                        <PrimaryButton label={'Checkout'} link={'/checkout'} />
                    </div>
                </div>
            </aside>
        </>
    );
};

export default ShoppingCart;
