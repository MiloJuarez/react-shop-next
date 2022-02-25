import React from "react";
import "@styles/PrimaryInputSubmit.scss";

const PrimaryInputSubmit = ({ value, handle }) => {
    return (
        <button type="submit" className="PrimaryInputSubmit" onClick={handle}>
            {value}
        </button>
    );
};

export default PrimaryInputSubmit;
