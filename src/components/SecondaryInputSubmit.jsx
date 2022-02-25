import React from "react";
import "@styles/SecondaryInputSubmit.scss";

const SecondaryInputSubmit = ({ value }) => {
    return (
        <input type="submit" value={value} className="SecondaryInputSubmit" />
    );
};

export default SecondaryInputSubmit;
