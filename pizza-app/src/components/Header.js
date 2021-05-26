import React from 'react';
import logo from '../icons/logo.png';
import call from '../icons/call.svg';
import pizzaSlice from '../img/pizza-slice.png';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-4">
                        <ul className="d-flex">
                            <li><a href="/" className="header__menu-item">Payment</a></li>
                            <li><a href="/" className="header__menu-item">About us</a></li>
                            <li><a href="/" className="header__menu-item">Contacts</a></li>
                        </ul>
                    </div>
                    <div className="col-4 justify-content-center d-flex">
                        <div className="logo"><img src={logo} alt="Logo" /></div>
                    </div>
                    <div className="col-4">
                        <div className="header__menu_right-side d-flex">
                            <div className="d-flex">
                                <div className="header__green-dot align-self-center"></div>
                                <a href="/" className="header__menu-item">Daily 11am - 9pm</a>
                            </div>
                            <div>
                                <a href="tel:0800330898" className="header__menu-item f-weight-7">
                                    <img className="header__call-icon" src={call} alt="Call" />
                                    0800 33 08 98
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="title title__header">Food delivery in Kovel</h1>
                <p className="header__subtitle">
                    If you decide to relax or have unexpected guests, call us. We make <br />
                    sure that your vacation is comfortable, enjoyable and delicious
                </p>
                <div className="header__img">
                    <img src={pizzaSlice} alt="Pizza-slice" />
                </div>
            </div>
        </header>
    );
}

export default Header;