import React from "react";
import Header from "@components/Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="Layout">{children}</div>
        </div>
    );
};

export default Layout;
