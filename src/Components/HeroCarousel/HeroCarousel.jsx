import React from 'react';
import Slider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Carousel Images
import Image1 from "../../assets/Slideshow/lawfirm1.jpeg";
import Image2 from "../../assets/Slideshow/lawfirm2.jpg";
import Image3 from "../../assets/Slideshow/lawfirm4.jpg";

//icons
import { GoChevronLeft } from 'react-icons/go';
import { FiChevronRight } from 'react-icons/fi';

const HeroCarousel = () => {
    const CustomPrevArrow = ({ onClick }) => {
        return (
          <div
            className="absolute left-[5%] w-[40px] h-[40px] md:w-[60px] md:h-[60px] top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-2 cursor-pointer hover:bg-opacity-60 z-10"
            onClick={onClick}
          >
            <span className='text-2xl md:text-4xl'>
                <GoChevronLeft />
            </span>
          </div>
        );
    };

    const CustomNextArrow = ({ onClick }) => {
        return (
          <div
            className="absolute right-[5%] w-[40px] h-[40px] md:w-[60px] md:h-[60px] top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-2 cursor-pointer hover:bg-opacity-60 z-10"
            onClick={onClick}
          >
            <span className='text-4xl'>
                <FiChevronRight />
            </span>
          </div>
        );
    };

    const settings = {
        fade: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        speed: 1000,
        cssEase: "linear",
        autoplaySpeed: 5000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    return (
        <>
            <div className='w-full h-[400px] lg:h-screen overflow-hidden mt-[70px] md:mt-0'>
                <Slider {...settings}>
                    <div className='w-full h-[300px] lg:h-screen relative'>
                        <img src="https://plus.unsplash.com/premium_photo-1695942301094-472c4dbf9130?q=80&w=1434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='Hero' className='w-full h-full object-cover' />
                        <div className='absolute inset-0 flex flex-col justify-center items-center h-full w-full bg-black bg-opacity-50'>
                            <div className='w-[80%] md:w-[60%] mx-auto text-center absolute'>
                                <h1 className=' text-white text-3xl md:text-8xl font-semibold'>Lawyer assistance and advice</h1>
                                <p className='text-md text-gray-200'>Receive expert legal guidance and personalized advice from experienced attorneys dedicated to protecting your rights and interests.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[300px] md:h-screen relative'>
                        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='Hero' className='w-full h-full object-cover' />
                        <div className='absolute inset-0 flex flex-col justify-center items-center h-full w-full bg-black bg-opacity-50'>
                            <div className='w-[90%] md:w-[60%] mx-auto text-center absolute'>
                                <h1 className=' text-white text-2xl md:text-6xl font-semibold'>Comprehensive Legal Support for Every Step of Your Journey</h1>
                                <p className='text-md text-gray-200'>Our team provides thorough legal representation, ensuring you're informed and empowered throughout every stage of your case.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[300px] md:h-screen relative'>
                        <img src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='Hero' className='w-full h-full object-cover' />
                        <div className='absolute inset-0 flex flex-col justify-center items-center h-full w-full bg-black bg-opacity-50'>
                            <div className='w-[80%] md:w-[70%] mx-auto text-center absolute'>
                                <h1 className=' text-white text-2xl md:text-7xl font-semibold'>Trusted Advocates Committed to Your Success.</h1>
                                <p className='text-md text-gray-200'>Our dedicated attorneys are here to champion your cause and achieve the best possible outcome for your legal matters.</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default HeroCarousel;