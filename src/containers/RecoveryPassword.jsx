import React from "react";
import "@styles/RecoveryPassword.scss";
import PrimaryButton from "@components/PrimaryButton";
import Subtitle from "@components/Subtitle";
import Title from "@components/Title";
import logo from "@logos/logo_yard_sale.svg";
import email from "@icons/email.svg";

const RecoveryPassword = () => {
    return (
        <div className="RecoveryPassword">
            <div className="RecoveryPassword-container">
                <img src={logo} alt="Logo" className="RecoveryPassword--logo" />

                <Title />
                <Subtitle
                    subtitle={
                        "Please check your inbox for instructions on how to reseet the password"
                    }
                />

                <div className="RecoveryPassword__image">
                    <img src={email} alt="Email" />
                </div>

                <PrimaryButton label={"Login"} />

                <p className="RecoveryPassword__resend">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
};

export default RecoveryPassword;
