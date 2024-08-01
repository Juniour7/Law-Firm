import React from 'react';
import Slider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Carousel Images
import Image1 from "../../assets/Slideshow/lawfirm1.jpeg";
import Image2 from "../../assets/Slideshow/lawfirm2.jpg";
import Image3 from "../../assets/Slideshow/lawfirm4.jpg";

const HeroCarousel = () => {
    const settings = {
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 2000,
        infinte: true,
        pauseOnHover: false,
        autoplaySpeed: 6000,
        cssEase: "linear"
    };

    return (
        <>
            <div className='w-full h-screen overflow-hidden mt-[90px]'>
                <Slider {...settings}>
                    <div className='w-full lg:h-screen relative'>
                        <img src="https://plus.unsplash.com/premium_photo-1695942301094-472c4dbf9130?q=80&w=1434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='Hero' className='w-full h-full object-cover' />
                        <div className='absolute top-0 h-full w-full bg-[#1B3452] bg-opacity-30 flex flex-col justify-center items-center'>
                            <div className='w-[80%] mx-auto'>
                                <h3>Guardian Law Firm</h3>
                                <h1 className='font-playfair text-white text-7xl font-semibold w-[70%]'>BEST LAW FIRM SINCE 1968</h1>
                                <div className='mt-[30px]'>
                                    <button className='text-white text-lg bg-transparent border px-4 py-2 border-white'>Book a Consultation</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-screen relative'>
                        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='Hero' className='w-full h-full object-cover' />
                        <div className='absolute top-0 h-full w-full bg-[#1B3452] bg-opacity-50 flex flex-col justify-center items-center'>
                            <div className='w-[80%] mx-auto'>
                                <h3>Guardian Law Firm</h3>
                                <h1 className='font-playfair text-white text-7xl font-semibold '>BEST FIRM SINCE 1968</h1>
                                <div>
                                    <button className='text-white text-lg bg-transparent border px-4 py-2  border-white'>Book a Consultation</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-screen'>
                        <img src="https://plus.unsplash.com/premium_photo-1661540409860-fe00bb21a51c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='Hero' className='w-full h-full object-cover' />
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default HeroCarousel;