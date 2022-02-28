import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await axios(API);
            setProducts(response.data);
        }

        getProducts();
    });

    return products;
};

export default useGetProducts;
