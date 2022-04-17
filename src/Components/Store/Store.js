import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Store.css';


const Store = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className="carts">

            {
                users.map(user => <Cart
                    kay={user.id}
                    user={user}

                ></Cart>)
            }
        </div>
    );
};
export default Store;