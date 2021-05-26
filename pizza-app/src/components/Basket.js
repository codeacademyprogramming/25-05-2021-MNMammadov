import shoppingBagImg from '../icons/shopping-bag-ghost.svg';
import closeOutlineImg from '../icons/close-outline.svg';
import { basketSlice } from '../store/basketSlice';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

function Basket() {
    const [isBasketVisible, setIsBasketVisible] = React.useState(false);
    const dispatch = useDispatch();

    function handleToggleBasket() {
        setIsBasketVisible((prevState) => !prevState);
    }

    const basketState = useSelector((state) => state.basket);
    const totalCountPizza = React.useMemo(() => {
        return basketState.reduce((accumulator, current) => accumulator + current.count, 0);
    }, [basketState])

    const subtotalPizzaPrice = React.useMemo(() => {
        return basketState.reduce((accumulator, current) => accumulator + current.count * current.price, 0);
    }, [basketState])

    function handleCloseClick(element) {
        dispatch(basketSlice.actions.deleteFromBasket(element));
    }

    return (
        <div className="products__basket d-flex align-items-end flex-column">
            <button type="button" className="button__basket align-self-end" onClick={handleToggleBasket}>
                <img src={shoppingBagImg} alt="Baskket of products" />
            </button>
            <span className="count-order">{totalCountPizza}</span>
            {isBasketVisible && (
                <div className="basket mt-10">
                    <div className="container">
                        <h3 className="basket__title">Your Cart</h3>
                        {basketState.map((element) => (
                            <div className="d-flex align-items-center basket__item" key={element.id}>
                                <div
                                    onClick={() => handleCloseClick(element)}
                                    className="basket__item-delete">
                                    <img src={closeOutlineImg} alt="Delete order" />
                                </div>
                                <div className="basket__item__left d-flex align-items-center">
                                    <div className="basket-img">
                                        <img src={element.imageUrl} alt="Order Pizza" />
                                    </div>
                                    <span className="basket__desc">x{element.count}</span>
                                </div>
                                <div className="basket__item__right">
                                    <div className="d-flex justify-content-between">
                                        <p className="basket__desc w1">{element.name}</p>
                                        <p className="basket__order-price">{element.price} <sup className="price-currency">UAH</sup></p>
                                    </div>
                                    <p className="basket__desc mt-02 f-weight-7">size: {element.sizes[0]}cm</p>
                                </div>
                            </div>
                        ))}
                        <div>
                            <div className="d-flex justify-content-between basket__border_top">
                                <div className="basket__subtotal d-flex">
                                    <p className="basket__subtotal">Subtotal</p>
                                    <p className="basket__subtotal_items align-self-end">({totalCountPizza} Items)</p>
                                </div>
                                <p className="basket__total-price">{subtotalPizzaPrice} <sup className="price-currency">UAH</sup></p>
                            </div>
                            <button className="button__basket-check m-auto">Checkout</button>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default Basket;