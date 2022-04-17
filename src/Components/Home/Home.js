import React from 'react';
import bannerimg from '../banner-img/banner-1.jpg';
import bannerimgTwo from '../banner-img/banner-22.jpg';
import bannerimgthree from '../banner-img/banner-3.jpg';


const Home = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={bannerimg} className="d-block w-100" alt="..." />
                        <div className="carousel-caption  d-md-block">
                            <h5>There are no foreign lands. It is the traveller only who is foreign. </h5>
                            <p>May the road rise up to meet you. May the wind be always at your back.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bannerimgTwo} className="d-block w-100" alt="..." />
                        <div className="carousel-caption  d-md-block">
                            <h5>On the World </h5>
                            <p>Where, having stayed a while, I pay Her lavish bills, and go my way. </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bannerimgthree} className="d-block w-100" alt="..." />
                        <div className="carousel-caption  d-md-block">
                            <h5>Give me the long, straight road before me, A clear,</h5>
                            <p>A heart that is light and free from care.Then let me go!  I care not whither </p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>




        </div>
    );
};

export default Home;