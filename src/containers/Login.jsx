import React, { useRef } from "react";
import "@styles/Login.scss";
import PrimaryInputSubmit from "@components/PrimaryInputSubmit";
import SecondaryButton from "@components/SecondaryButton";
import logo from "@logos/logo_yard_sale.svg";

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const data = {
            username: formData.get("email"),
            password: formData.get("password"),
        };
        console.log(data);
    };

    return (
        <div className="Login">
            <div className="Login-container">
                <img src={logo} alt="Logo" className="Login__icon" />

                <form action="/" className="Login-form" ref={form}>
                    <label htmlFor="email" className="Login-form__label">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="Login-form__input Login-form__input--mb22"
                        placeholder="camilayokoo@gmail.com"
                    />

                    <label htmlFor="password" className="Login-form__label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="*********"
                        className="Login-form__input Login-form__input--mb22"
                    />

                    <PrimaryInputSubmit
                        value={"Log in"}
                        handle={handleSubmit}
                    />

                    <a href="/" className="Login-form__link">
                        Forgot my password
                    </a>
                </form>

                <SecondaryButton label={"Sign up"} />
            </div>
        </div>
    );
};

export default Login;
