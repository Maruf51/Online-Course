import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const price = props.orderedCourseValue;

    let total = 0;
    for (let i = 0; i < price.length; i++) {
        let element = price[i];
        total = total + parseFloat(element) ;
    }

    return (
        <div>
            <h4 className="text-center total-order">Total Order</h4>
            <h4 className="ordered-course">Ordered Course: {price.length}</h4>
            <h4 className="total-price">Total Price: ${(total).toFixed(2)}</h4>
            <div className="text-center">
                <button className="btn btn-success purchase-btn">Purchase</button>
            </div>
        </div>
    );
};

export default Cart;