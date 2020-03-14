import React, { useState } from 'react';
import fakeData from '../../fake-user-data';
import css from './Users.css';
import Employee from '../Employee/Employee';
import Cart from '../Cart/Cart';

const Users = () => {
    const first15 = fakeData.slice(0, 15);
    const [employee, setEmployee] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddEmployee = (employee) =>{
        const newCart = [...cart, employee];
        setCart(newCart);
    }


    return (
        <div className="users-container">
            <div className="employee-container">           
                {
                    employee.map(pd =><Employee 
                        handleAddEmployee = {handleAddEmployee}
                        Employee={pd}></Employee>)
                }  
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
             </div>    
        </div>
    );
   };

export default Users;