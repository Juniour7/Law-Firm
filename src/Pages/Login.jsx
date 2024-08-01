import React from 'react';
import { Link } from 'react-router-dom';

//icons
import { IoChevronForwardOutline } from "react-icons/io5";


//Log In Image
import sculpture from "../assets/sculpture.jpg";


const Login = () => {
  return (
    <>
        <section className='h-screen bg-[#F9F7F8] py-[70px]'>
            <div className='w-[80%] mx-auto bg-white shadow-md flex justify-center'>
                <div className='basis-[45%] h-[85vh] relative'>
                    <img src={sculpture} alt='' className='w-full h-full object-cover' />
                    <div className='absolute top-0 w-full h-full bg-[#1B3452] bg-opacity-80 flex flex-col justify-center items-center'>
                        <div>
                            <h3 className='text-md text-[#E49F27] font-semibold text-left'>Guardian Law Firm</h3>
                            <h1 className='text-white font-medium text-5xl font-playfair'>WELCOME BACK</h1>
                            <div className='flex flex-col justify-center items-center'>
                                <Link to="/">
                                    <button className='text-white'>
                                        <div className='flex justify-center items-center gap-1'>
                                            Back Home
                                            <span>
                                                <IoChevronForwardOutline />
                                            </span>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='basis-[60%] p-5 font-lato'>
                    <div className='w-[90%] mx-auto p-10'>
                        <h2 className='font-medium text-3xl'>Log In</h2>
                        <p className='text-sm text-[#716363]'>Welcome back. Please login to your account.</p>
                        <div className='my-[30px]'>
                            <form className='text-[#716363] w-[90%] flex flex-col justify-center '>
                                <div>
                                    <label>Username</label>
                                    <input type='text' placeholder='username@gmail.com' className='block border border-[#1B3452] px-3 py-2 rounded-md w-full my-[15px]' required />
                                </div>
                                <div>
                                    <label>password</label>
                                    <input type='password' placeholder='password' className='block border border-[#1B3452] px-3 py-2 rounded-md w-full my-[15px]' required/>
                                </div>
                                <div className='text-center text-[#716363] text-sm my-[15px]'>
                                    <p className='cursor-pointer hover:text-[#E49F27]'>Forgot password ?</p>
                                </div>
                                <button type='submit' className='bg-[#1B3452] text-white font-semibold text-xl w-[60%] mx-auto py-2 rounded-md hover:bg-black transition-colors duration-300'>Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Login;