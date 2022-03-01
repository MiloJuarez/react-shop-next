import { useState } from 'react';

const initialState = {
    cart: [],
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter((items) => items.id !== payload.id),
        });
    };

    const inCart = (payload) => {
        const items = state.cart.find((item) => item.id == payload.id);
        if (items) {
            return true;
        }
        return false;
    };

    const sumTotal = () => {
        const reducer = (acumulador, currentValue) => acumulador + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };

    return {
        state,
        addToCart,
        removeFromCart,
        inCart,
        sumTotal,
    };
};

export default useInitialState;
