import React from "react";
import "@styles/MyOrder.scss";
import Title from "@components/Title";
import OrderItem from "@components/OrderItem";
import ProductItem from "@components/ProductItem";

const MyOrder = () => {
    return (
        <div className="MyOrder">
            <div className="MyOrder-container">
                <Title title={"My order"} />

                <div className="MyOrder-content">
                    <OrderItem
                        order={{
                            date: "04.25.21",
                            total_items: 3,
                            total_price: 115.0,
                        }}
                    />

                    <ProductItem
                        product={{
                            image: [
                                "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                            ],
                            title: "Bike",
                            price: 60.0,
                        }}
                    />

                    <ProductItem
                        product={{
                            image: [
                                "https://images.pexels.com/photos/4922619/pexels-photo-4922619.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                            ],
                            title: "Helmet",
                            price: 15.0,
                        }}
                    />

                    <ProductItem
                        product={{
                            image: [
                                "https://images.pexels.com/photos/10110754/pexels-photo-10110754.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                            ],
                            title: "Biker",
                            price: 40.0,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
