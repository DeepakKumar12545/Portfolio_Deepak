import React from 'react'
import './carousel.css'

export default function Carousel() {
    return (
        <div>
            <div className="crouselHeading">
                <h2>Crousel Section</h2>
            </div>

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/land.jpg" className="d-block w-100 crouselImg" alt="slider" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Land images</h5>
                            <p>Nothing to think any word.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/lalten.jpg" className="d-block w-100 crouselImg" alt="slider2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide lalten</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/mustang.jpg" className="d-block w-100 crouselImg" alt="slider3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide mustang</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/sadimage.jpg" className="d-block w-100 crouselImg" alt="slider4" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide beautyGirl</h5>
                            <p>Some representative placeholder content for the third slide.</p>
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
    )
}
