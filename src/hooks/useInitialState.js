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

    return {
        state,
        addToCart,
        removeFromCart,
        inCart,
    };
};

export default useInitialState;
