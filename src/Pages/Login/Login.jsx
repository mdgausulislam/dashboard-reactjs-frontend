import React, { useContext, useEffect, useState } from 'react';
import './Login.css'
import Logo from '../../assets/logo1.webp'
import { MyContext } from '../../App';
import Pattern from '../../assets/loginBackground.webp'
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Google from "../../assets/google.png"

const Login = () => {

    const context = useContext(MyContext);
    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);

    useEffect(() => {
        context.setisHiddenSidebarAndHeader(true);
    }, [context]);

    const focusInput = (index) => {
        setInputIndex(index);
    }

    return (
        <>
            <img src={Pattern} alt="" className='loginPattern' />
            <section className='loginSection'>
                <div className="loginBox">
                    <div className="logo text-center">
                        <img src={Logo} alt="" width="60px" />
                        <h5 className='font-weight-bold'>Login to Hotash</h5>
                    </div>
                    <div className="wrapper mt-3 card border">
                        <form action="">
                            <div className={`form-group position-relative ${inputIndex === 0 ? 'focus' : ''}`}>
                                <span className='icon'><MdEmail /></span>
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Enter Your Email'
                                    onFocus={() => focusInput(0)}
                                    onBlur={() => setInputIndex(null)}
                                />
                            </div>

                            <div className={`form-group position-relative ${inputIndex === 1 ? 'focus' : ''}`}>
                                <span className='icon'><RiLockPasswordFill /></span>
                                <input
                                    type={isShowPassword ? 'text' : 'password'}
                                    className='form-control'
                                    placeholder='Enter Your Password'
                                    onFocus={() => focusInput(1)}
                                    onBlur={() => setInputIndex(null)}
                                />
                                <span
                                    className="toggleShowPassword"
                                    onClick={() => setIsShowPassword(!isShowPassword)}
                                >
                                    {isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                </span>
                            </div>

                            <div className="from-group">
                                <Button className='btn-blue btn-lg w-100'>SignIn</Button>
                            </div>

                            <div className="from-group text-center mb-0">
                                <Link to={'/forget-Password'} className='link '>FORGOT PASSWORD</Link>

                                <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                                    <span className='line'></span>
                                    <span className='txt'>or</span>
                                    <span className='line'></span>
                                </div>

                                <Button variant='outlined' className='w-100btn-lg btn-big loginWithGoogle'> <img src={Google} alt="" className='googleImg mr-2' />
                                    Sign In With Google</Button>
                            </div>
                        </form>
                    </div>

                    <div className="wrapper mt-3 card border footer p-3">
                        <span className="text-center">Don't have an account?
                            <Link to={'/signUp'} className='link color ml-2'> Register</Link></span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
