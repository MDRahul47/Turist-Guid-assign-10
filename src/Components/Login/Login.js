
import { Link } from 'react-router-dom';
import Googlebtn from '../Google&github/googlebtn';
import './Login.css';

const Login = () => {


    const chlickSubmit = event => {

        event.preventDefault();
    }

    const passwordClick = event => {
        console.log(event.target.value);
    }

    const emailClick = event => {
        console.log(event.target.value);
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