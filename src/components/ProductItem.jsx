import React from "react";
import "@styles/ProductItem.scss";

const ProductItem = ({ product, children }) => {
    return (
        <article className="ProductItem">
            <figure className="ProductItem__figure">
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p className="ProductItem__text--light">{product.title}</p>
            <p className="ProductItem__text--bold">${product.price}</p>
            {children}
        </article>
    );
};

export default ProductItem;
