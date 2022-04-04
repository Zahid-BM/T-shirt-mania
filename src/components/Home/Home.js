import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTShirt from '../hook/useTShirt';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const [tShirts, setTShirts] = useTShirt();
    const [cart, setCart] = useState([]);

    const handleAddToCart = clickedItem => {
        const sameItem = cart.find(item => item.id === clickedItem.id);
        if (!sameItem) {
            const newCart = [...cart, clickedItem];
            setCart(newCart);
        }
        else {
            alert('same item is in the cart')
        }

    };

    const handleClearBtn = clickedItem => {
        const remainingItemsOnCart = cart.filter(item => item.id !== clickedItem.id);
        if (remainingItemsOnCart) {
            setCart(remainingItemsOnCart);
        }

    }

    return (
        <div className='d-flex'>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className="row row-col-3 ">
                                {
                                    tShirts.map(tShirt => <TShirt key={tShirt.id} asProps={tShirt} handleAddToCart={handleAddToCart}></TShirt>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3 p-3">
                <Cart cartAsProps={cart} handleClearBtn={handleClearBtn} ></Cart>
            </div>
        </div>
    );
};

export default Home;