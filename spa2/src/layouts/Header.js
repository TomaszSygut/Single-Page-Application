import React from 'react'
import { Route, Switch } from 'react-router-dom'
import img1 from '../images/street.jpg';
import img2 from '../images/laguna.jpg';
import img3 from '../images/sunset.jpg';
import '../styles/Header.css';

const Header = () => {

    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <img src={img1} alt="miasto" />
                )} />
                <Route path="/products" render={() => (
                    <img src={img3} alt="miasto" />
                )} />
                <Route path="/contact" render={() => (
                    <img src={img2} alt="miasto" />
                )} />
                <Route path="/admin" render={() => (
                    <img src={img1} alt="miasto" />
                )} />
                <Route render={() => (
                    <img src={img3} alt="miasto" />
                )} />
            </Switch>


        </>
    )
}

export default Header
