
import axios from 'axios'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    const name = useRef()
    const email = useRef()
    const password = useRef()
    const confirm_password = useRef()

    const handleclick = (e) => {
        e.preventDefault()

        const obj = {
            "name": name.current.value,
            "email": email.current.value,
            "password": password.current.value,
            "confirm_password": confirm_password.current.value
        }
        console.log(obj);
        axios.post('http://localhost:4000/insert', obj)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <>

            <div className="register-main row">
                <div className="item col-lg-6 col-md-12 col-sm-12">
                    <div className="img-content">
                        <img src="assets/Images/register.jpg" alt="" />
                        <div className="text-content">
                            <h3>Travio Tours</h3>
                            <p>Discover your next great adventure</p>
                        </div>
                    </div>

                </div>
                <div className="item col-lg-6 col-md-12 col-sm-12">
                    <div className="title">
                        <h3>Signup</h3>
                        <p></p>
                    </div>

                    <form method='post' onSubmit={handleclick}>
                        <div className="form-group">
                            <input type="text" ref={name} name='name' required />
                            <label htmlFor="">Name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" ref={email} name='email' required />
                            <label htmlFor="">Email</label>
                        </div>
                        <div className="form-group">
                            <input type="password" ref={password} name='password' required />
                            <label htmlFor="">Password</label>
                        </div>
                        <div className="form-group">
                            <input type="password" ref={confirm_password} name='confirm_password' required />
                            <label htmlFor="">Confirm Password</label>
                        </div>

                        <div className="accept">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">I accept <Link>terms</Link> and <Link>conditions</Link> and general policy</label>
                        </div>

                        <div className="message-btn">
                            <button type="submit" className="theme-btn"><Link to="/">Submit</Link></button>
                        </div>
                    </form>
                    <p>
                        Already have an account? <Link to=''>Sign In</Link>
                    </p>

                </div>
            </div>

        </>
    )
}

export default Register