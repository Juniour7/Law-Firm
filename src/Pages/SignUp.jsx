import React, {useState} from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

//Log In Image
import sculpture from "../assets/sculpture.jpg"; 

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password != confirmPassword){
      setError('Passwords do not match');
    } else {
      setError('');
      alert('Passwords Match')
    }
  };


  return (
    <>
      <section className='bg-[#F9F7F8] py-[70px] flex justify-center items-center'>
        <div className='w-[80%] m-auto bg-white shadow-md md:flex flex-row-reverse justify-center'>
          <div className='basis-[50%] h-[95vh] relative hidden'>
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
          <div className='basis-[50%] md:p-5 font-lato'>
            <div className='w-[90%] mx-auto p-3'>
              <h2 className='font-medium text-3xl'>Sign Up</h2>
              <p className='text-sm text-[#716363]'>Sign up to create an account.</p>
              <div className='my-[30px]'>
                <form className='text-[#716363] w-[95%] flex flex-col justify-center '>
                  {/* First And Last Names */}
                  <div className='flex gap-4'>
                    <div>
                      <label>First Name</label>
                      <input type='text' placeholder='First Name' className='block border border-[#1B3452] px-3 py-2 rounded-md w-full my-[10px]' required />
                    </div>
                    <div>
                      <label>Last Name</label>
                      <input type='text' placeholder='Last Name' className='block border border-[#1B3452] px-3 py-2 rounded-md w-full my-[10px]' required />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label>Phone Number</label>
                    <input type='text' placeholder='Phone Number' className='block border border-[#1B3452] px-3 py-2 rounded-md w-full my-[10px]' required />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label>Email Address</label>
                    <input type='email' placeholder='email@gmail.com' className='block border border-[#1B3452] px-3 py-2 rounded-md w-full my-[10px]' required />
                  </div>


                  <div>
                    <label>password</label>
                    <input type='password' value={password}  onChange={(e) => setPassword(e.target.value)} placeholder='password' className='block border border-[#1B3452] px-3 py-2 rounded-md w-full my-[10px]' required/>
                  </div>
                  <div>
                    <label>Confirm password</label>
                    <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='password' className='block border border-[#1B3452] px-3 py-2 rounded-md w-full my-[10px]' required/>
                  </div>
                  <h4 className='text-center mb-[20px]'>Already have an account? <Link to='/login' className='text-[#E49F27]'>Log In</Link></h4>
                  <button type='submit'  className={`w-full py-2 px-4 rounded-md shadow-sm text-white font-medium ${
                    password && confirmPassword && password === confirmPassword
                    ? 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    : 'bg-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!password || !confirmPassword || password !== confirmPassword}
                  >Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp;