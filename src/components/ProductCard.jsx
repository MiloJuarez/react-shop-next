import React, { useContext } from "react";
import "@styles/ProductCard.scss";
import addToCartIcon from "@icons/bt_add_to_cart.svg";
import addedToCartIcon from "@icons/bt_added_to_cart.svg";
import AppContext from "@context/AppContext";

const ProductCard = ({ product }) => {
    const { addToCart, inCart } = useContext(AppContext);

    const handleClick = (item) => {
        addToCart(item);
    };

    return (
        <article className="ProductCard">
            <img
                src={product.images[0]}
                alt={product.title}
                className="ProductCard__image"
            />
            <div className="ProductCard-info">
                <div>
                    <p className="ProductCard-info__text ProductCard-info__text--bold">
                        ${product.price}
                    </p>
                    <p className="ProductCard-info__text ProductCard-info__text--gray">
                        {product.title}
                    </p>
                </div>
                <figure className="ProductCard-info__figure">
                    {inCart(product) == false ? (
                        <img
                            src={addToCartIcon}
                            alt="Add to cart"
                            className="ProductCard-info__figure--icon-add"
                            onClick={() => handleClick(product)}
                        />
                    ) : (
                        <img
                            src={addedToCartIcon}
                            alt="Added to cart"
                            className="ProductCard-info__figure--icon-added"
                        />
                    )}
                </figure>
            </div>
        </article>
    );
};

export default ProductCard;
