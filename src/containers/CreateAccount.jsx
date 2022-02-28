import React from 'react';
import PrimaryInputSubmit from '@components/PrimaryInputSubmit';
import Title from '@components/Title';
import styles from '@styles/CreateAccount.module.scss';

const CreateAccount = () => {
    return (
        <div className={styles.CreateAccount}>
            <div className={styles['CreateAccount-container']}>
                <Title title={'Create account'} />

                <form action="/" className={styles['CreateAccount-form']}>
                    <div>
                        <label htmlFor="name" className={styles['CreateAccount-form__label']}>
                            Name
                        </label>
                        <input type="text" name="name" id="name" placeholder="Milo" className={(styles['CreateAccount-form__input'], styles[' CreateAccount-form__input--mb22'])} />

                        <label htmlFor="email" className={styles['CreateAccount-form__label']}>
                            Email address
                        </label>
                        <input type="email" name="email" id="email" placeholder="platzi@example.com" className={(styles['CreateAccount-form__input'], styles[' CreateAccount-form__input--mb22'])} />

                        <label htmlFor="password" className={styles['CreateAccount-form__label']}>
                            Password
                        </label>
                        <input type="password" name="password" id="password" placeholder="*********" className={(styles['CreateAccount-form__input'], styles[' CreateAccount-form__input--mb22'])} />
                    </div>

                    <PrimaryInputSubmit value={'Create'} />
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
