import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import css from './Employee.css';

const Employee = (props) => {
    const {img, name, salary, email, address} = props.Employee;
    return (
        
            <div className="employee">
                <div>
                    <img src={img} alt=""/>
                </div>
                <div className="info">
                    <h3>{name}</h3>
                    <p>Salary : <b>{salary}</b></p>
                    <p>Email : {email}</p>
                    <p>Address : {address}</p>
                    <button 
                        className="main-button"
                        onClick={() => props.handleAddEmployee(props.Employee)}
                        >
                            <FontAwesomeIcon icon={faUserPlus} /> add me</button>                   
                </div>
        </div>
    );
};

export default Employee;