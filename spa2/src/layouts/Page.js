import React from 'react'
import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import AdminPage from '../pages/AdminPage'
import ContactPage from '../pages/ContactPage'
import ProductPage from '../pages/ProductPage'
import LoginPage from '../pages/LoginPage'
import ProductListPage from '../pages/ProductListPage'
const Page = () => {
    return (
        <>
            <Route path="/" exact component={HomePage} />
            <Route path="/products" component={ProductListPage} />
            <Route path="/product/:name" component={ProductPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/login" component={LoginPage} />
            {/* <Route component={ErrorPage} /> */}
        </>
    );
}

export default Page
