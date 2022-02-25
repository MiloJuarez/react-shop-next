import React from "react";
import "@styles/ProductList.scss";
import ProductCard from "@components/ProductCard";
import useGetProducts from "@hooks/useGetProdutcs";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
    const products = useGetProducts(API);
    return (
        <section className="ProductList-container">
            <div className="ProductList-cards">
                {products.map((item) => (
                    <ProductCard product={item} key={item.id} />
                ))}
            </div>
        </section>
    );
};

export default ProductList;
