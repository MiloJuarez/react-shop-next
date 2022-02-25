import React from "react";
import "@styles/AccountDetails.scss";
import SecondaryInputSubmit from "@components/SecondaryInputSubmit";
import Title from "@components/Title";

const AccountDetails = () => {
    return (
        <div className="AccountDetails">
            <div className="AccountDetails-container">
                <Title title={"My account"} />

                <form action="/" className="AccountDetails-form">
                    <div>
                        <label
                            htmlFor="name"
                            className="AccountDetails-form--label"
                        >
                            Name
                        </label>
                        <p className="AccountDetails-form--value">
                            Camila Yokoo
                        </p>

                        <label
                            htmlFor="email"
                            className="AccountDetails-form--label"
                        >
                            Email address
                        </label>
                        <p className="value">camilayokoo@gmail.com</p>

                        <label
                            htmlFor="password"
                            className="AccountDetails-form--label"
                        >
                            Password
                        </label>
                        <p className="AccountDetails-form--value">*********</p>
                    </div>

                    <SecondaryInputSubmit value={"Edit"} />
                </form>
            </div>
        </div>
    );
};

export default AccountDetails;
