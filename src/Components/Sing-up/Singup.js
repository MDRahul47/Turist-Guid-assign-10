import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Googlebtn from '../Google&github/googlebtn';
import './Singup.css';


const Singup = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const chlickSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password, name);
        createUserWithEmailAndPassword(email, password);
        navigate('/recheak')

    }
    return (
        <div>
            <div className="container-from">
                <form onSubmit={chlickSubmit}>
                    <h1 className='title'>Sing-up</h1>
                    <input name='name' type="text" placeholder='Your Name' /> <br />
                    <input name='email' type="email" placeholder='Your Email' /> <br />
                    <input name='password' type="password" placeholder='Your Password' /> <br />
                    <button type="submit">Sing-up</button>
                    <p className='allready'>Already have an account? <Link className='login' to='/login' > Login</Link> </p>
                    <p className='or'>Or login with</p>
                    <Googlebtn></Googlebtn>
                </form>
            </div>
        </div >
    );
};

export default Singup;