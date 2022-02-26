import React from 'react';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ order, children }) => {
    return (
        <article className={styles.OrderItem}>
            <p>
                <span>{order.date}</span>
                <span>{order.total_items} articles</span>
            </p>
            <p>${order.total_price}</p>
            {children}
        </article>
    );
};

export default OrderItem;
