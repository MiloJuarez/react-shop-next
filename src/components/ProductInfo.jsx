import React from "react";
import "@styles/ProductInfo.scss";
import addToCard from "@icons/bt_add_to_cart.svg";

const ProductInfo = ({ product }) => {
    return (
        <>
            <img
                src={product.image[0]}
                alt={product.title}
                className="ProductInfo__image"
            />
            <div className="ProductInfo">
                <p className="ProductInfo__text ProductInfo__text--small ProductInfo__text--bold ProductInfo__text--mb4">
                    ${product.price}
                </p>
                <p className="ProductInfo__text ProductInfo__text--medium ProductInfo__text--bold ProductInfo__text--light ProductInfo__text--mb36">
                    {product.title}
                </p>
                <p className="ProductInfo__text ProductInfo__text--small ProductInfo__text--mb36">
                    {product.description}
                </p>
                <button className="ProductInfo__button ProductInfo__button--flex">
                    <img src={addToCard} alt="add to cart" />
                    Add to cart
                </button>
            </div>
        </>
    );
};

export default ProductInfo;
