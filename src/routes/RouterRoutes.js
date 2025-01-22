import React from 'react';
import { Route, Routes } from 'react-router';
import useScrollRestore from '../hooks/useScrollRestore';
import AllProducts from '../pages/AllProducts';
import Cart from '../pages/Cart';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';

const RouterRoutes = () => {

    useScrollRestore();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/product-details/:productId" element={<ProductDetails />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default RouterRoutes;