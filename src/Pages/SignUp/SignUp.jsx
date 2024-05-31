import React, { useContext, useEffect, useState } from 'react';
import './SignUp.css'
import Logo from '../../assets/logo1.webp'
import { MyContext } from '../../App';
import Pattern from '../../assets/loginBackground.webp'
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoMdEye, IoMdEyeOff, IoMdHome } from 'react-icons/io';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Google from "../../assets/google.png"
import { FaUserCircle } from 'react-icons/fa';
import { IoShieldCheckmark } from 'react-icons/io5';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const SignUp = () => {

    const context = useContext(MyContext);
    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setisShowConfirmPassword] = useState(false);

    useEffect(() => {
        context.setisHiddenSidebarAndHeader(true);
        window.scrollTo(0, 0);
    }, [context]);

    const focusInput = (index) => {
        setInputIndex(index);
    }
    return (
        <>
            <img src={Pattern} alt="" className='loginPattern' />
            <section className='loginSection signUpSection'>

                <div className="row">
                    <div className="col-md-8 d-flex align-items-center flex-column justify-content-center part1">
                        <h1>BEST UX/UI FASHION <span className="text-sky">ECOMMERCE DASHBOARD</span> & ADMIN PANEL</h1>
                        <p>Elit Iusto dolore libero recusandae dolor dolores explicabo ullam cum facilis aperiam alias odio quam excepturi molestiae omnis inventore. Repudiandae officia placeat amet consectetur dicta dolorem quo</p>

                        <div className='w-100 mt-4'>
                            <Link to={'/'}> <Button className='btn-blue btn-lg btn-big'><IoMdHome /> Go To Home</Button></Link>
                        </div>
                    </div>
                    <div className="col-md-4 pr-0">
                        <div className="loginBox">
                            <div className="logo text-center">
                                <img src={Logo} alt="" width="60px" />
                                <h5 className='font-weight-bold'>Register a new account</h5>
                            </div>
                            <div className="wrapper mt-3 card border">
                                <form action="">
                                    <div className={`form-group position-relative ${inputIndex === 0 ? 'focus' : ''}`}>
                                        <span className='icon'><FaUserCircle /></span>
                                        <input
                                            type="text"
                                            className='form-control'
                                            placeholder='Enter Your Name'
                                            onFocus={() => focusInput(0)}
                                            onBlur={() => setInputIndex(null)}
                                            autoFocus />
                                    </div>
                                    <div className={`form-group position-relative ${inputIndex === 1 ? 'focus' : ''}`}>
                                        <span className='icon'><MdEmail /></span>
                                        <input
                                            type="text"
                                            className='form-control'
                                            placeholder='Enter Your Email'
                                            onFocus={() => focusInput(1)}
                                            onBlur={() => setInputIndex(null)}
                                        />
                                    </div>

                                    <div className={`form-group position-relative ${inputIndex === 2 ? 'focus' : ''}`}>
                                        <span className='icon'><RiLockPasswordFill /></span>
                                        <input
                                            type={isShowPassword ? 'text' : 'password'}
                                            className='form-control'
                                            placeholder='Enter Your Password'
                                            onFocus={() => focusInput(2)}
                                            onBlur={() => setInputIndex(null)}
                                        />
                                        <span
                                            className="toggleShowPassword"
                                            onClick={() => setIsShowPassword(!isShowPassword)}
                                        >
                                            {isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                        </span>
                                    </div>


                                    <div className={`form-group position-relative ${inputIndex === 3 ? 'focus' : ''}`}>
                                        <span className='icon'><IoShieldCheckmark /></span>
                                        <input
                                            type={isShowConfirmPassword ? 'text' : 'password'}
                                            className='form-control'
                                            placeholder='Confirm Your Password'
                                            onFocus={() => focusInput(3)}
                                            onBlur={() => setInputIndex(null)}
                                        />
                                        <span
                                            className="toggleShowPassword"
                                            onClick={() => setisShowConfirmPassword(!isShowConfirmPassword)}
                                        >
                                            {isShowConfirmPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                        </span>
                                    </div>

                                    <FormControlLabel control={<Checkbox />} label="I agree to the all Terms & Condiotions" />

                                    <div className="from-group">
                                        <Button className='btn-blue btn-lg w-100'>Sign Up</Button>
                                    </div>

                                    <div className="from-group text-center mb-0">

                                        <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                                            <span className='line'></span>
                                            <span className='txt'>or</span>
                                            <span className='line'></span>
                                        </div>

                                        <Button variant='outlined' className='w-100btn-lg btn-big loginWithGoogle'> <img src={Google} alt="" className='googleImg mr-2' />
                                            Sign In With Google</Button>
                                    </div>
                                </form>
                                <span className="text-center mt-3 d-block">Already have an account?
                                    <Link to={'/login'} className='link color ml-2'> Login</Link></span>
                            </div>


                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default SignUp;