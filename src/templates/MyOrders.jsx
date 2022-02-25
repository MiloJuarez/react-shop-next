import React from "react";
import "@styles/MyOrders.scss";
import Title from "@components/Title";
import OrderItem from "@components/OrderItem";
import ButtonOrderDetails from "@components/ButtonOrderDetails";

const MyOrders = () => {
    return (
        <div className="MyOrders">
            <div className="MyOrders-container">
                <Title title={"My orders"} />

                <div className="MyOrders-content">
                    <OrderItem
                        order={{
                            date: "04.25.21",
                            total_items: 3,
                            total_price: 115.0,
                        }}
                        canNavigateToDetails={true}
                    >
                        <ButtonOrderDetails />
                    </OrderItem>

                    <OrderItem
                        order={{
                            date: "04.25.21",
                            total_items: 3,
                            total_price: 115.0,
                        }}
                        canNavigateToDetails={true}
                    >
                        <ButtonOrderDetails />
                    </OrderItem>

                    <OrderItem
                        order={{
                            date: "04.25.21",
                            total_items: 3,
                            total_price: 115.0,
                        }}
                        canNavigateToDetails={true}
                    >
                        <ButtonOrderDetails />
                    </OrderItem>

                    <OrderItem
                        order={{
                            date: "04.25.21",
                            total_items: 3,
                            total_price: 115.0,
                        }}
                        canNavigateToDetails={true}
                    >
                        <ButtonOrderDetails />
                    </OrderItem>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
