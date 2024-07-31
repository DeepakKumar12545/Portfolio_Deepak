import React from "react";
import { Link } from "react-router-dom";
import './register.css'

function Register() {

    return (
        <>
            <section className="body">
                <div className="signContainer">
                    <div className="signup">
                        <div className="form">
                            <h2>Sign up</h2>
                            <div className="inputbox">
                                <input type="text" required="required" />
                                <span>Name</span>
                            </div>
                            <div className="inputbox">
                                <input type="number" required="required" />
                                <span>Number</span>
                            </div>
                            <div className="inputbox">
                                <input type="email" required="required" />
                                <span>email address</span>
                            </div>
                            <div className="inputbox">
                                <input type="password" required="required" />
                                <span> password</span>
                            </div>
                            <div className="inputbox">
                                <Link to='/'><input type="submit" value='Register' /></Link>
                            </div>
                            <p>
                                if any account?
                                <Link to='/login' >Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Register;