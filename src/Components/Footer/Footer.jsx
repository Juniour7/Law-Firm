import React, {useState} from 'react';
import { Link } from "react-router-dom";

//icons
import { FaBuilding, FaMapMarked, FaRegCopyright } from "react-icons/fa";
import { MdOutlineMoveToInbox } from "react-icons/md";

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());
  return (
    <>
        <footer className=" font-body">
                <div className="bg-[#1B3452] md:h-80  text-gray-300 md:flex justify-center">
                    <div className="pl-9 md:pt-7 md:w-1/3 ">
                        <h1 className="mb-5 text-gray-100 text-xl pt-5 mx-auto">Get In Touch</h1>
                        <p className="text-md mb-3 mx-auto">Find Us On</p>
                        <div className="flex gap-4 mx-auto">
                            <div className="w-9 h-9 hover:scale-125 duration-300 ease-in-out">
                                <a href="" target="blank">
                                    <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
                                    className="w-full h-full"/>
                                </a>
                            </div>
                            <div className="w-9 h-9 hover:scale-125 duration-300 ease-in-out">
                                <a href="https://wa.me/" target="_blank">
                                    <img 
                                    src="https://as1.ftcdn.net/v2/jpg/05/32/20/62/1000_F_532206245_N1xYEHrZVIWU1ihamWwmDbh1gZWGU7Jl.webp"
                                    alt="whatsapp logo"
                                    className="w-full h-full transition  "/>
                                </a>
                            </div>
                            {/* <div className="w-9 h-7 hover:scale-125 duration-300 ease-in-out">
                                <a href="fedadmin@finiteelementdesignsltd.com" target="_blank">
                                    <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/640px-Gmail_icon_%282020%29.svg.png"
                                    className="w-full h-full transition  "/>
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <div className="mt-10 md:pt-5 mx-auto w-[90%] md:w-1/3">
                        <h1 className="mb-5 text-xl text-gray-100">Our Location</h1>
                        <div className="flex mb-3">
                            <div className="w-8 h-8">
                                <FaBuilding className="w-full h-full"/>
                            </div>
                            <p className="text-sm ml-3">Guardian Lawfirn</p>
                        </div>
                        <div className="flex mb-3">
                            <div className="w-8 h-8">
                                <FaMapMarked className="w-full h-full"/>
                            </div>
                            <p className="text-sm ml-3">Deep Blue Building, 2nd Floor Room 32, Kahawa Wendani, Along Thika Road</p>
                        </div>
                        <div className="flex">
                            <div className="w-8 h-8">
                                <MdOutlineMoveToInbox className="w-full h-full"/>
                            </div>
                            <p className="text-sm ml-3">P.O.BOX 197-00618-Ruaraka, Kenya</p>
                        </div>
                    </div>
                    <div className="mt-10 md:pt-5 md:w-1/3 pl-7">
                        <h1 className="text-xl mb-5 text-gray-100">Useful Links</h1>
                        <button className="px-3 block py-2 hover:text-white animate-pulse"><Link to="/about-Us">About Us</Link></button>
                        <button className="px-3 block py-2 hover:text-white animate-pulse"><Link to="/practice-areas">Our Practice Areas</Link></button>
                        <button className="px-3 block py-2 hover:text-white animate-pulse"><Link to="/contact-us">Contact Us</Link></button>
                    </div>
                    <div className='w-[90px] h-[90px]  bottom-[1%] right-[0.5%] fixed'>
                        <a href='https://wa.me/' target='_blank'>
                            <img src='' alt='' className='w-full h-full rounded-full' />
                        </a>
                    </div>
                </div>
                <div className="bg-[#02051A] text-gray-500 flex justify-center p-3 ">
                    <a href="https://wa.me/" className="my-auto" target="_blank">
                        <div className="w-5 h-5 mr-3 my-auto">
                            <FaRegCopyright className="w-full h-full"/>
                        </div>
                    </a>
                    <div className="my-auto">
                        <h1 suppressHydrationWarning={true} className="text-sm">Guardian Lawfirn {year}. All Rights Reserved.</h1>
                    </div>
                </div>
            </footer>
    </>
  )
}

export default Footer;