import React from 'react';
import ellipse from '../icons/ellipse.svg';
import arrowRight from '../icons/arrow-right.svg';
import carImg from '../img/car.png';
import logo from '../icons/logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <img src={ellipse} alt="More" className="footer__more-icon" />
                <h2 className="title title__footer">
                    Fill out the form <br />
                    and we will call you
                </h2>
                <form className="footer__call-back" action="/">
                    <label htmlFor="mame"></label>
                    <input name="name" placeholder="Your name" type="text" className="footer__call-back_input" />
                    <label htmlFor="phone"></label>
                    <input name="phone" placeholder="Phone number" type="tel" className="footer__call-back_input" />
                    <button className="button button__call-back">
                        Сall back
                        <img src={arrowRight} alt="Call back" className="button__icon_arrow-right" />
                    </button>
                </form>
                <div className="footer__img">
                    <img src={carImg} alt="Delivery car" />
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-end bgc-white pt-03 p-lr-35">
                <p className="footer__subtitle">© Classic Family Restaurant</p>
                <img src={logo} alt="Logo" className="footer__logo" />
                <p className="footer__subtitle">Made with delight by <span>harmuder</span></p>
            </div>
        </footer>
    );
}

export default Footer;