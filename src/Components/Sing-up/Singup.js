import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import Googlebtn from '../Google&github/googlebtn';
import './Singup.css';

const auth = getAuth();
const Singup = () => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');


    const chlickSubmit = event => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })



        event.preventDefault();
    }

    const clickEmail = event => {
        setEmail(event.target.value);
    }

    const clickPassword = event => {
        setpassword(event.target.value);
    }



    return (
        <div>
            <div className="container-from">
                <form onSubmit={chlickSubmit}>
                    <h1 className='title'>Sing-up</h1>
                    <input className='td' type="text" placeholder='Your Name' /> <br />
                    <input onBlur={clickEmail} type="email" placeholder='Your Email' /> <br />
                    <input onBlur={clickPassword} type="password" placeholder='Your Password' /> <br />
                    <button type="submit">Sing-up</button>
                    <p className='allready'>Already have an account? <Link className='login' to='/login' > Login</Link> </p>
                    <p className='or'>Or login with</p>
                </form>
                <Googlebtn></Googlebtn>
            </div>
        </div >
    );
};

export default Singup;