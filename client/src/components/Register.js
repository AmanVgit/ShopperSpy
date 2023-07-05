import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./mix.css"

const Register = () => {

  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setcPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: ""
  })

  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  }

  const addUserdata = async (e) => {
    e.preventDefault();

    const { fname, email, password, cpassword } = inpval;

    if (fname === "") {
      toast.warning("fname is required!", {
        position: "top-center"
      });
    } else if (email === "") {
      toast.error("email is required!", {
        position: "top-center"
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center"
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-center"
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center"
      });
    } else if (cpassword === "") {
      toast.error("Confirm password is required!", {
        position: "top-center"
      });
    }
    else if (cpassword.length < 6) {
      toast.error("confirm password must be 6 char!", {
        position: "top-center"
      });
    } else if (password !== cpassword) {
      toast.error("password and Confirm password are not matching!", {
        position: "top-center"
      });
    } else {
      const data = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname, email, password, cpassword
        })
      });

      const res = await data.json();
      // console.log(res.status);

      if (res.status === 201) {
        toast.success("Registration Successfully done 😃!", {
          position: "top-center"
        });
        setInpval({ ...inpval, fname: "", email: "", password: "", cpassword: "" });
      }
    }
  }



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
                <input type="text" name="fname" id="fname" onChange={setVal} value={inpval.fname} placeholder='Enter your name' />

              </div>
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <div className="two">
                <input type="email" name="email" id="email" onChange={setVal} value={inpval.email} placeholder='Enter Your Email Address' />

              </div>
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input type={!passShow ? "password" : "text"} name="password" id="password" onChange={setVal} value={inpval.password} placeholder='Enter Your password' />
                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <div className="form_input">
              <label htmlFor="password">Confirm Password</label>
              <div className="two">
                <input type={!cpassShow ? "password" : "text"} name="cpassword" id="cpassword" onChange={setVal} value={inpval.cpassword} placeholder='Enter Your Confirm password' />
                <div className="showpass" onClick={() => setcPassShow(!cpassShow)}>
                  {!cpassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className='btn' onClick={addUserdata}>Sign Up</button>
            <p>Already have an Account? <NavLink to="/">Sign In</NavLink></p>
          </form>
          <ToastContainer />
        </div>
      </section>
    </>
  )
}

export default Register