/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import PrimaryInputSubmit from '@components/PrimaryInputSubmit';
import SecondaryButton from '@components/SecondaryButton';
import logo from '@logos/logo_yard_sale.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/Login.module.scss';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password'),
        };
        console.log(data);
    };

    return (
        <div className={styles.Login}>
            <div className={styles['Login-container']}>
                <Image src={logo} alt="Logo" className="Login__icon" />

                <form action="/" className={styles['Login-form']} ref={form}>
                    <label htmlFor="email" className={styles['Login-form__label']}>
                        Email address
                    </label>
                    <input type="email" name="email" className={(styles['Login-form__input'], styles['Login-form__input--mb22'])} placeholder="camilayokoo@gmail.com" />

                    <label htmlFor="password" className={styles['Login-form__label']}>
                        Password
                    </label>
                    <input type="password" name="password" placeholder="*********" className={(styles['Login-form__input'], styles['Login-form__input--mb22'])} />

                    <PrimaryInputSubmit value={'Log in'} handle={handleSubmit} />

                    <Link href="/">
                        <a className={styles['Login-form__link']}>Forgot my password</a>
                    </Link>
                </form>

                <SecondaryButton label={'Sign up'} />
            </div>
        </div>
    );
};

export default Login;
