import React from "react";
import "@styles/ProductDetail.scss";
import ProductInfo from "@components/ProductInfo";
import close from "@icons/icon_close.png";

const ProductDetail = () => {
    return (
        <aside className="ProductDetail">
            <div className="ProductDetail__close-icon">
                <img src={close} alt="close" />
            </div>
            <ProductInfo
                product={{
                    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                    name: "Bike",
                    price: 60.0,
                    description:
                        "Suitable for your adventurer spirit, which make you feel free running across the world.",
                }}
            />
        </aside>
    );
};

export default ProductDetail;
