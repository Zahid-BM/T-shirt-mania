import React from 'react';

const TShirt = ({ asProps, handleAddToCart }) => {
    const { name, picture, price, greeting, rating } = asProps;
    return (
        <div className="card g-3 mx-2" style={{ width: '18rem' }}>
            <img src={picture} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted fw-bolder fs-4">{price}</h6>
                <h5 className="card-subtitle mb-2 text-warning fw-bolder fs-4"> Rating :{rating}</h5>
                <p className="card-text"><u><b>Comment :</b></u> {greeting}</p>
                <button onClick={() => handleAddToCart(asProps)} className="btn btn-primary">Add to cart</button>
            </div>
        </div>
    );
};

export default TShirt;