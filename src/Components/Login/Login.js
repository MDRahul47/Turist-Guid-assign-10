import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Googlebtn from '../Google&github/googlebtn';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {

        errorElement =
            <p className='text-danger'>Error: {error?.message} </p>

    }

    const chlickSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }





    return (

        <div className="container-froms">
            <form onSubmit={chlickSubmit}>
                <h1 className='title'>Login</h1>
                <input ref={emailRef} type="email" placeholder='Your Email' /> <br />
                <input ref={passwordRef} type="password" placeholder='Your Password' /> <br />
                <button type="submit">Login</button>
                {errorElement}
                <p className='allready'>Not a member?<Link className='singup' to='/singup'>sing-up</Link></p>
                <p className='or'>Or login with</p>
                <Googlebtn></Googlebtn>
            </form>
        </div>

    );
};

export default Login;