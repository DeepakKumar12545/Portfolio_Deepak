import React from "react";
import './about.css'

const About = () => {

    return (
        <>
            <div className=" aboutBg">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="aboutContent d-flex flex-column  ">
                                <small>Hello</small>
                                <h1>World Copler</h1>
                                <big>Freelancer web designer & devloper</big>
                                <button className="btn  btn-outline-success">Hire Me</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aboutImg">
                                <img src='images/beautyGirl.jpg' alt="devloper " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutme">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="aboutImg">
                                <img src='images/beautyGirl.jpg' alt="devloper " />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aboutmeContent d-flex flex-column justify-content-center" >
                                <h2>About me</h2>
                                <p> laborum consequatur consectetur recusandae? Dolor placeat illo, voluptatibus laudantium unde soluta vel sequi quod, temporibus adipisci nobis perferendis rerum, hic eum! Explicabo obcaecati cupiditate quasi ex voluptatum!</p>
                                <div className="btn btn-outline-warning">Hire me</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="abService py-4">
                <div className="container py-2">
                    <div className="serviceHead d-flex flex-column align-items-center">
                        <small>OUR SERVICE</small>
                        <big>WHAT WE DO</big>
                        <p className="py-2"> Commodi delectus magni blanditiis dolore officia nisi voluptatibus amet quam eum perferendis nostrum quia at, explicabo illo officiis odit ab, ipsam, esse accusamus animi dolores maxime expedita adipisci? Dignissimos animi quasi cum numquam maxime ex recusandae autem?</p>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="brand s-box my-2">
                                <div className="icon"><i className="bi bi-flower2"></i></div>
                                <div className="name">Brand Identifire</div>
                                <div className="text">Tylong is strong kunfu</div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="ui s-box my-2">
                                <div className="icon"><i class="bi bi-menu-button-fill"></i></div>
                                <div className="name">ui & ux</div>
                                <div className="text">  Ui & ux designer</div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="web s-box my-2">
                                <div className="icon"><i class="bi bi-hurricane"></i></div>
                                <div className="name">Wbsite Design</div>
                                <div className="text">bo  Website devlopment</div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="video s-box my-2">
                                <div className="icon"><i class="bi bi-camera-reels-fill"></i></div>
                                <div className="name">marketing video</div>
                                <div className="text"> sham sam same to same</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;