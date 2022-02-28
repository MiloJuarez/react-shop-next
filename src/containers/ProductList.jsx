import React from 'react';
import styles from '@styles/ProductList.module.scss';
import ProductCard from '@components/ProductCard';
import useGetProducts from '@hooks/useGetProdutcs';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const products = useGetProducts(API);
    return (
        <section className={styles['ProductList-container']}>
            <div className={styles['ProductList-cards']}>
                {products.map((item) => {
                    if (item.images.length > 0 && item.images[0] !== '') {
                        return <ProductCard product={item} key={item.id} />;
                    }
                })}
            </div>
        </section>
    );
};

export default ProductList;
