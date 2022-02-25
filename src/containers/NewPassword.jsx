import React from "react";
import "@styles/NewPassword.scss";
import PrimaryInputSubmit from "@components/PrimaryInputSubmit";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";
import logo from "@logos/logo_yard_sale.svg";

const NewPassword = () => {
    return (
        <div className="NewPassword">
            <div className="NewPassword-container">
                <img src={logo} alt="Logo" className="NewPassword__icon" />

                <Title title={"Create a new password"} />
                <Subtitle subtitle={"Enter a new password for your account"} />

                <form action="/" className="NewPassword-form">
                    <label
                        htmlFor="password"
                        className="NewPassword-form__label"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="*********"
                        className="NewPassword-form__input NewPassword-form__input--mb22"
                    />

                    <label
                        htmlFor="new-password"
                        className="NewPassword-form__label"
                    >
                        New password
                    </label>
                    <input
                        type="password"
                        name="new-password"
                        id="new-password"
                        placeholder="*********"
                        className="NewPassword-form__input NewPassword-form__input--mb22"
                    />

                    <PrimaryInputSubmit value={"Confirm"} />
                </form>
            </div>
        </div>
    );
};

export default NewPassword;
