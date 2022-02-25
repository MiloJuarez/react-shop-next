import React from "react";
import "@styles/SecondaryButton.scss";

const SecondaryButton = ({ label }) => {
    return <button className="SecondaryButton">{label}</button>;
};

export default SecondaryButton;
