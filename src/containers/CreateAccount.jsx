import React from "react";
import "@styles/CreateAccount.scss";
import PrimaryInputSubmit from "@components/PrimaryInputSubmit";
import Title from "@components/Title";

const CreateAccount = () => {
    return (
        <div className="CreateAccount">
            <div className="CreateAccount-container">
                <Title title={"Create account"} />

                <form action="/" className="CreateAccount-form">
                    <div>
                        <label
                            htmlFor="name"
                            className="CreateAccount-form__label"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Milo"
                            className="CreateAccount-form__input CreateAccount-form__input--mb22"
                        />

                        <label
                            htmlFor="email"
                            className="CreateAccount-form__label"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="platzi@example.com"
                            className="CreateAccount-form__input CreateAccount-form__input--mb22"
                        />

                        <label
                            htmlFor="password"
                            className="CreateAccount-form__label"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="*********"
                            className="CreateAccount-form__input CreateAccount-form__input--mb22"
                        />
                    </div>

                    <PrimaryInputSubmit value={"Create"} />
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
