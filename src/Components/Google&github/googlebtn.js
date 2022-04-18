import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './googlebtn.css';





const Googlebtn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    let errorElement;

    if (error || error1) {

        errorElement =
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>

    }

    if (user || user1) {
        navigate('/checkout')
    }


    return (
        <div className='btn-container'>
            <button className='btn-g' onClick={() => signInWithGoogle()}>Google</button> <br />
            {errorElement}
            <button className='btn-g' onClick={() => signInWithGithub()}>Github</button>
        </div>
    );
};

export default Googlebtn;