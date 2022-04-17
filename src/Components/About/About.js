import React from 'react';
import './About.css';
import mySelf from './img/myself.png';

const About = () => {
    return (
        <div>
            <div className="card m-5 p-3 m-auto mt-5 mb-5  main" style={{ width: "18rem" }}>
                <div className='myself'>
                    <img src={mySelf} className="card-img-top w-100 myimage " alt="..." />
                </div>
                <div className="card-body">
                    <h5 class="card-title">Web Developer</h5>
                    <p className="card-text"> <span>My Commit :</span>  </p>
                </div>
            </div>
        </div>
    );
};

export default About;