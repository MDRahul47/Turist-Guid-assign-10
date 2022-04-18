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
    const [error, setError] = useState('');


    const chlickSubmit = event => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setEmail('');
                setpassword('');
            })
            .catch(error => {
                console.error(error);

            })

        if (!/(?=.*?[0-9])/.test(password)) {
            setError("At least one digit");
            return;
        }

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
                    <input className="is-valid" id="validationServer01" type="text" placeholder='Your Name' required /> <br />
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">
                        Please choose a username.
                    </div>
                    <input onBlur={clickEmail} type="email" placeholder='Your Email' required /> <br />
                    <input onBlur={clickPassword} type="password" placeholder='Your Password' required /> <br />
                    <p>{error}</p>
                    <button className='btn-g' type="submit">Sing-up</button>
                    <p className='allready'>Already have an account? <Link className='login' to='/login' > Login</Link> </p>
                    <p className='or'>Or login with</p>
                </form>
                <Googlebtn></Googlebtn>
            </div>
        </div >
    );
};

export default Singup;