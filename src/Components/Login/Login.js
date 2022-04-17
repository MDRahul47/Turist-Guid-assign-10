import React from 'react';
import Googlebtn from '../Google&github/googlebtn';
import './Login.css';

const Login = () => {
    return (

        <div className="container-from">
            <form>
                <h1 className='title'>Login</h1>
                <input type="email" placeholder='Your Email' /> <br />
                <input type="password" placeholder='Your Password' /> <br />
                <button type="submit">Login</button>
                <p className='allready'>Not a member? sing-up</p>
                <p className='or'>Or login with</p>
                <Googlebtn></Googlebtn>
            </form>
        </div>

    );
};

export default Login;