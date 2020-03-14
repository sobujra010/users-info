import React from 'react';
import css from './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalS = parseInt(props.salary);
    const total =  cart.reduce((total, emp) => total + emp.totalS, 0);
    
    return (
        <div>
            <h4>Total Employee: {cart.length} </h4>
            <h5>Total Salary:{total} </h5>
        </div>
    );
};

export default Cart;