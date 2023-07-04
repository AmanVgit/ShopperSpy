import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./mix.css"

const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setcPassShow] = useState(false);
  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p>We are glad that you will be using ShopperSpy!
              <br />
              We hope that you like it.</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <div className="two">
                <input type="text" name="fname" id="fname" placeholder='Enter your name' />

              </div>
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <div className="two">
                <input type="email" name="email" id="email" placeholder='Enter Your Email Address' />

              </div>
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input type={!passShow ? "password" : "text"} name="password" id="password" placeholder='Enter Your password' />
                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <div className="form_input">
              <label htmlFor="password">Confirm Password</label>
              <div className="two">
                <input type={!cpassShow ? "password" : "text"} name="cpassword" id="cpassword" placeholder='Enter Your Confirm password' />
                <div className="showpass" onClick={() => setcPassShow(!cpassShow)}>
                  {!cpassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className='btn'>Login</button>
            <p>Already have an Account? <NavLink to="/">Sign In</NavLink></p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register