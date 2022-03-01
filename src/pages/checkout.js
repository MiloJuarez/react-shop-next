import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import Title from '@components/Title';
import OrderItem from '@components/OrderItem';
import ProductItem from '@components/ProductItem';
import Head from 'next/head';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
    const { state, sumTotal } = useContext(AppContext);
    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <div className={styles.MyOrder}>
                <div className={styles['MyOrder-container']}>
                    <Title title={'My order'} />

                    <div className={styles['MyOrder-content']}>
                        <OrderItem
                            order={{
                                date: '04.25.21',
                                total_items: state.cart.length,
                                total_price: sumTotal(),
                            }}
                        />

                        {state.cart.map((product) => (
                            <ProductItem product={product} key={`productItem-${product.id}`}></ProductItem>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyOrder;
