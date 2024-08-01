import React from 'react';
import { Helmet } from 'react-helmet-async';


//icons
import { LuScale } from "react-icons/lu";
import { CiBank, CiMail } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { FaRegHandshake, FaSuperpowers  } from "react-icons/fa";
import { GiHandcuffs } from "react-icons/gi";



//images
import Image1 from "../assets/sculpture.jpg";

//compnents
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel';
import { Link } from 'react-router-dom';


//Practice Areas Data
const PracticeData = [
  {
    url: "",
    icon: <LuScale />,
    title: "Real Estate",
    content: "We work in a variety of industries and our specialist industry knowledge coupled with our intellectual property expertise ensures that we are able to provide cost effective advice that is innovative and adds value. At CR Advocates LLP,"
  },
  {
    url: "",
    icon: <CiBank />,
    title: "Banking & Financing",
    content: "We work in a variety of industries and our specialist industry knowledge coupled with our intellectual property expertise ensures that we are able to provide cost effective advice that is innovative and adds value. At CR Advocates LLP,"
  },
  {
    url: "",
    icon: <GoPeople />,
    title: "Employment Relations",
    content: "We work in a variety of industries and our specialist industry knowledge coupled with our intellectual property expertise ensures that we are able to provide cost effective advice that is innovative and adds value. At CR Advocates LLP,"
  },
  {
    url: "debt-recovery",
    icon: <FaRegHandshake />,
    title: "Debt Recovery",
    content: "We work in a variety of industries and our specialist industry knowledge coupled with our intellectual property expertise ensures that we are able to provide cost effective advice that is innovative and adds value. At CR Advocates LLP,"
  },
  {
    url: "",
    icon: <GiHandcuffs />,
    title: "Risk Compliance",
    content: "We work in a variety of industries and our specialist industry knowledge coupled with our intellectual property expertise ensures that we are able to provide cost effective advice that is innovative and adds value. At CR Advocates LLP,"
  },
  {
    url: "",
    icon: <FaSuperpowers  />,
    title: "Private Client",
    content: "We work in a variety of industries and our specialist industry knowledge coupled with our intellectual property expertise ensures that we are able to provide cost effective advice that is innovative and adds value. At CR Advocates LLP,"
  },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Guardian LawFirm</title>
      </Helmet>
      <HeroCarousel />
      <body className=''>
        {/* Welcoming Section */}
        <section className='w-[95%] mx-auto md:flex justify-center gap-4 p-4'>
          <div className='basis-[50%]'>
            <h3 className='text-[#E49F27] font-semibold'>WECOME TO</h3>
            <h1 className='text-4xl font-semibold antialiased my-[10px]'>Guardian Law Firm</h1>
            <div className='space-y-3 leading-relaxed mb-[30px]'>
              <p className='text-base antialiased'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p className='text-base antialiased'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .</p>
              <p className='text-base antialiased'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .</p>
            </div>
            <div className='flex gap-4'>
              <Link to="/about-Us">
                <button className='text-white bg-[#1B3452] px-4 py-1 text-lg font-semibold'>Learn More</button>
              </Link>
              <Link>
                <button className='text-white bg-[#E49F27] px-4 py-1 text-lg font-semibold'>Contact Us</button>
              </Link>
            </div>
          </div>
          <div className='basis-[30%] h-[500px] relative'>
            <img src={Image1} alt='' className='w-full h-full object-cover z-50 relative shadow-md' />
            <div className='absolute -bottom-[5%] -right-6 bg-[#1B3452] w-full h-[500px]'/>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section className='bg-[#1B3452] w-full my-[20px] text-center p-4'>
          <div className='space-y-3'>
            <h3 className='text-base text-[#E49F27] font-playfair'>What We Do</h3>
            <h1 className='text-white text-4xl font-semibold font-playfair'>Our Practice Areas</h1>
          </div>
          <div className='grid grid-cols-3 justify-center gap-3 w-[90%] mx-auto mt-[20px] mb-[50px]'>
            {PracticeData.map((Data, index) => (
              <div key={index} className='bg-Main-700 p-3 flex gap-3 text-white'>
                <Link to={Data.url}>
                  <div className='text-5xl font-light text-[#E49F27]'>
                    {Data.icon}
                  </div>
                  <div className='my-auto text-left'>
                    <h2 className=' text-2xl font-playfair'>{Data.title}</h2>
                    <p className='text-sm my-[20px] text-gray-300'>{Data.content}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div>
            <Link to="/practice-areas">
              <button className='bg-[#E49F27] text-white text-base font-semibold px-6 py-2 hover:bg-Main-900 transition-colors duration-500'>More Services</button>
            </Link>
          </div>
        </section>

        {/* Proffesional Team */}
        <section className=''>
          <h1 className='text-center text-4xl text-[#1B3452] font-semibold font-playfair'>OUR PROFFESIONAL TEAM</h1>
          <div className='w-[90%] mx-auto my-[25px] text-white flex justify-center items-center gap-2'>
            <div className='h-[550px] basis-[30%] relative'>
              <img src="https://i.pinimg.com/736x/6e/44/f1/6e44f186947b3e3eba6d5517a18079ac.jpg" alt="" className='w-full h-full object-cover' />
              <div className='absolute bottom-[6%] left-[6%] font-laro'>
                <h3 className='text-base'>Lincon Matthews</h3>
                <h4 className='italic text-sm'>Managing Lawyer, CEO</h4>
              </div>
            </div>
            <div className='basis-[70%] h-[550px] grid grid-cols-3 gap-2'>
              <div className=' relative'>
                <img src="https://i.pinimg.com/564x/39/a7/f4/39a7f451c10a4ea8dffc11564432c586.jpg" alt="" className='w-full h-full object-cover' />
                <div className='absolute bottom-[6%] left-[6%] font-laro'>
                  <h3 className='text-base'>Lincon Matthews</h3>
                  <h4 className='italic text-sm'>Managing Lawyer, CEO</h4>
                </div>
              </div>
              <div className=' relative'>
                <img src="https://i.pinimg.com/736x/ef/c5/d4/efc5d4cf54b2acdb5fa247cbc69982cd.jpg" alt="" className='w-full h-full object-cover' />
                <div className='absolute bottom-[6%] left-[6%] font-laro'>
                  <h3 className='text-base'>Lincon Matthews</h3>
                  <h4 className='italic text-sm'>Managing Lawyer, CEO</h4>
                </div>
              </div>
              <div className=' relative'>
                <img src="https://i.pinimg.com/736x/ef/c5/d4/efc5d4cf54b2acdb5fa247cbc69982cd.jpg" alt="" className='w-full h-full object-cover' />
                <div className='absolute bottom-[6%] left-[6%] font-laro'>
                  <h3 className='text-base'>Lincon Matthews</h3>
                  <h4 className='italic text-sm'>Managing Lawyer, CEO</h4>
                </div>
              </div>
              <div className=' relative'>
                <img src="https://i.pinimg.com/564x/39/a7/f4/39a7f451c10a4ea8dffc11564432c586.jpg" alt="" className='w-full h-full object-cover' />
                <div className='absolute bottom-[6%] left-[6%] font-laro'>
                  <h3 className='text-base'>Lincon Matthews</h3>
                  <h4 className='italic text-sm'>Managing Lawyer, CEO</h4>
                </div>
              </div>
              <div className=' relative'>
                <img src="https://i.pinimg.com/736x/ef/c5/d4/efc5d4cf54b2acdb5fa247cbc69982cd.jpg" alt="" className='w-full h-full object-cover' />
                <div className='absolute bottom-[6%] left-[6%] font-laro'>
                  <h3 className='text-base'>Lincon Matthews</h3>
                  <h4 className='italic text-sm'>Managing Lawyer, CEO</h4>
                </div>
              </div>
              <div className=' relative'>
                <img src="https://i.pinimg.com/736x/ef/c5/d4/efc5d4cf54b2acdb5fa247cbc69982cd.jpg" alt="" className='w-full h-full object-cover' />
                <div className='absolute bottom-[6%] left-[6%] font-laro'>
                  <h3 className='text-base'>Lincon Matthews</h3>
                  <h4 className='italic text-sm'>Managing Lawyer, CEO</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mailing List */}
        <section className='py-[20px] w-full mt-[70px]'>
          <div className='w-[70%] mx-auto bg-[#1B3452] text-white rounded-md font-lato flex flex-col justify-center items-center relative'>
            <div className='absolute bg-[#E49F27] w-[100px] h-[100px]  -top-[50px] flex justify-center items-center rounded-full'>
              <span className='text-7xl border-2 border-white rounded-full p-2'>
                <CiMail />
              </span>
            </div>
            <div className='mt-[70px] text-center'>
              <h3 className='text-5xl '>NewsLetter</h3>
              <p className='text-sm font-light my-[10px] text-[#D9D9D9]'>Stay up to date with all our latest news and products.</p>
            </div>
            <div className='my-[20px] w-[90%] mx-auto'>
              <form>
                <div className='flex justify-center items-center gap-4'>
                  <input type="email" name='' placeholder='Your Email Address' className='w-[50%] px-3 py-3 rounded-md text-black outline-none' required />
                  <input type='submit' value='Subscribe' className='bg-[#E49F27] px-8 py-3 text-base rounded-md cursor-pointer' />
                </div>
              </form>
              <p className='text-sm text-center font-light my-[10px] text-[#D9D9D9]'>Your email is safe with us, we don’t spam</p>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Home;