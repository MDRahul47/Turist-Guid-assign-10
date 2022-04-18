import React from 'react';
import './About.css';
import mySelf from './img/myself.png';

const About = () => {
    return (
        <div>
            <div className="card m-5 p-3 m-auto mt-5 mb-5  mainia" style={{ width: "18rem" }}>
                <div className='myself'>
                    <img src={mySelf} className="card-img-top w-100 myimage " alt="..." />
                </div>
                <div className="card-body">
                    <h4 class="card-title">MD: Rahul Bhuayin</h4>
                    <h5 class="card-title mt-4">Web Developer</h5>
                    <p className="card-text">
                        I will try my best to learn as much as I can. I still have a lot left to learn. the next three months i will try to learn to the end with my maximum.</p>
                </div>
            </div>
        </div>
    );
};

export default About;