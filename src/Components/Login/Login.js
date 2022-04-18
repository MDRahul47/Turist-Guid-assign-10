
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Googlebtn from '../Google&github/googlebtn';
import './Login.css';



const auth = getAuth();
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');

    const chlickSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
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
    }

    const passwordClick = event => {
        setpassword(event.target.value);
    }

    const emailClick = event => {
        setEmail(event.target.value);
    }

    return (

        <div className="container-froms">
            <form onSubmit={chlickSubmit}>
                <h1 className='title'>Login</h1>
                <input onBlur={emailClick} type="email" placeholder='Your Email' /> <br />
                <input onBlur={passwordClick} type="password" placeholder='Your Password' /> <br />
                <button type="submit">Login</button>

                <p className='allready'>Not a member?<Link className='singup' to='/singup'>sing-up</Link></p>
                <p className='or'>Or login with</p>
                <Googlebtn></Googlebtn>
            </form>
        </div>

    );
};

export default Login;