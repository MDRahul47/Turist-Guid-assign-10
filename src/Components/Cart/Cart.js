import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ user }) => {
    const { name, price, img, ratings } = user;

    return (
        <div class="card-group ">

            <div class="card shadow rounded">
                <img src={img} class="card-img-top photo" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Place Name: {name}</h5>
                    <p class="card-text">Price: {price}$</p>
                    <p class="card-text">Rating: {ratings}</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam officia perspiciatis debitis impedit reprehenderit, adipisci illum dolorem suscipit deserunt incidunt!</p>
                    <Link to='/recheak'> <button className='ms-5'>Booking</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Cart;