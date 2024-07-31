import React from 'react'
import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  return (
    <>
      <section className="body">
        <div className="signContainer">
          <div className="signup">
            <div className="form">
              <h2>Sign in</h2>
              <div className="inputbox">
                <input type="text" required="required" />
                <span>email address</span>
              </div>
              <div className="inputbox">
                <input type="password" required="required" />
                <span> password</span>
              </div>
              <div className="inputbox">
                <Link to='/'><input type="submit" value='Login' /></Link>
              </div>
              <p>
              Not Registered? 
              <Link to='/register' >Create Account</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
