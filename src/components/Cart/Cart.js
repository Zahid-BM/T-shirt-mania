import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleClearBtn }) => {
    // console.log(cart);
    return (
        <div className='sticky-md-top bg-success rounded pt-3 pb-4'>
            <h4 className='pt-3 text-white pb-3 fs-5'>Shopping Cart</h4>
            <h5 className='pb-3 fs-6'>Ordered items : {cart?.length}</h5>
            {
                cart?.map(item => <p key={item.id}>{item.name} <FontAwesomeIcon onClick={() => handleClearBtn(item)} className='ms-3 fs-5 text-danger icon' icon={faTrashAlt}></FontAwesomeIcon></p>)
            }
            {
                cart?.length !== 0 ? <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-warning" type="button">Checkout</button>
                    <button className="btn btn-danger" type="button">Clear cart</button>
                </div> : <h5>Please add items </h5>
            }
        </div>
    );
};

export default Cart;