import React from 'react';

//icon
import { CiMail } from "react-icons/ci";
import { GiHeadphones } from "react-icons/gi";


//HeroImage
import Image1 from "../assets/Slideshow/contact.jpg"

const Contact = () => {
  return (
    <>
        <div className='bg-[#F9F7F8] w-full'>
            <section className='w-full h-[70vh] bg-fixed bg-no-repeat bg-cover relative'
                style={{ backgroundImage: `url(${Image1})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
            >
                <div className='absolute top-0 w-full h-full bg-[#1B3452] bg-opacity-40 flex flex-col items-center justify-center font-lato text-white'>
                    <h1 className='text-6xl font-bold subpixel-antialiased'>Contact Us</h1>
                </div>
                <div className='absolute bottom-0 bg-[#F9F7F8] w-full h-[20%] rounded-tl-full rounded-tr-full'/>
            </section>
            <section className='bg-[#F9F7F8] w-full font-lato pb-[50px]'>
                <div className='bg-white w-[80%] lg:min-h-[85vh] mx-auto flex justify-between'>
                    <div className='p-6 pl-[30px] basis-[70%]'>
                        <div className='w-[70%] space-y-5'>
                            <h2 className='text-4xl font-semibold'>Reach Out</h2>
                            <p className='font-light text-[#716363] text-sm w-[70%]'>Feel free to contact us any time. We will get back to you as soon as we can</p>
                        </div>
                        <div className='mt-[50px] w-[65%]'>
                            <form>
                                <div className='space-y-[50px]'>
                                    <input type='text' name='' placeholder='Full Name' className='border-b-[1px] border-black w-full outline-none p-2' required/>
                                    <input type='email' name='' placeholder='Email Address' className='border-b-[1px] border-black w-full outline-none p-2' required/>
                                    <textarea type='email' name='' rows="3" placeholder='Message' className='border-b-[1px] border-black w-full outline-none p-2' required/>
                                    <div className='flex flex-col items-center justify-center'>
                                        <input type='submit' value='SEND' className='bg-[#1B3452] text-white w-[50%] py-2 cursor-pointer' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='basis-[15%] bg-[#E49F27] text-white flex flex-col items-center justify-center relative'>
                        <div className='absolute right-0 bg-[#1B3452] text-white h-[60%] w-[500px] p-4'>
                            <h1 className='text-3xl font-semibold'>Info</h1>
                            <div className='flex gap-3 mt-[40px]'>
                                <span className='my-auto text-2xl border border-[#E49F27] rounded-full p-2 cursor-pointer bg-[#E49F27]'>
                                    <CiMail />
                                </span>
                                <a href='mailto:' className='text-sm my-auto hover:text-[#E49F27] transition-colors duration-500'>
                                    guardianlawfirm@gmail.com
                                </a>
                            </div>
                            <div className='flex gap-3 mt-[10px]'>
                                <span className='my-auto text-2xl border border-[#E49F27] rounded-full p-2 cursor-pointer bg-[#E49F27]'>
                                    <GiHeadphones />
                                </span>
                                <a href='tel:' className='text-sm my-auto hover:text-[#E49F27] transition-colors duration-500'>
                                    07xxxxxx
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Contact;