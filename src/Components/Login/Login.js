import React from 'react';
import './Login.css';

const Login = () => {
    return (

        <div className="container-from">
            <form>
                <h1 className='title'>Login</h1>
                <input type="email" placeholder='Your Email' /> <br />
                <input type="password" placeholder='Your Password' /> <br />
                <button type="submit">Login</button>
                <p className='or'>Not a member</p>
                <p className='or'>Or login with</p>
                <button>Google</button> <br />
                <button>Github</button>
            </form>
        </div>

    );
};

export default Login;