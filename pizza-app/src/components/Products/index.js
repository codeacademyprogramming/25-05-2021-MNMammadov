import shoppingBagOrangeImg from '../../icons/shopping-bag-orange.svg';
import Basket from '../Basket';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../../store/pizzasSlice';
import { basketSlice } from '../../store/basketSlice';
import React from 'react';


function Products() {
    const dispatch = useDispatch();
    const pizzasState = useSelector((state) => state.pizzas);

    React.useEffect(
        () => {
            dispatch(fetchPizzas());
        },
        [dispatch]
    );

    if (pizzasState.status === 'loading' || pizzasState.status === 'idle') {
        return <div>Loading...</div>;
    }

    if (pizzasState.status === 'error') {
        return <div>Error happened: {JSON.stringify(pizzasState.error)}</div>
    }

    function handleAddClick(pizza) {
        dispatch(basketSlice.actions.addToBasket(pizza));
    }

    function handleChange(size) {
        console.log(size.target.value);
    }


    return (
        <section className="products">
            <Basket />
            <h2 className="title title__product">Popular dishes</h2>
            <div className="container">
                <div className="row">
                    {pizzasState.data.map((pizza) => (
                        <div className="col-3" key={pizza.id}>
                            <div className="product mb-5">
                                <div>
                                    <button className="button button__small">Хіт</button>
                                    <div className="product__img">
                                        <img src={pizza.imageUrl} alt="Pizza foto" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <h4 className="product__title">{pizza.name}</h4>
                                    <p className="product__desc">{pizza.sizes[0]}cm</p>
                                </div>
                                <p className="product__desc mt-02">Dough, Mozzarella, Cheddar, Blue, Parmesan</p>
                                <h3 className="product__price">{pizza.price} UAH</h3>
                                <div className="product__border-romb">
                                    <button className="button__ghost-smal_rotate">
                                        <img src={shoppingBagOrangeImg} alt="Add to basket" />
                                    </button>
                                </div>
                                <div className="product__overlay">
                                    <h4 className="product__title mb-02">Sizes:</h4>
                                    {pizza.sizes.map((element) => (
                                        <div className="form-check mb-03" key={Math.random()}>
                                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                value={element}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                sizes - {element}cm
                                        </label>
                                        </div>
                                    ))}
                                    <button className="button button__medium" onClick={() => handleAddClick(pizza)}>Add to basket</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Products;
