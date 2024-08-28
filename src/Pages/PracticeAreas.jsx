import React from 'react';
import { Link } from 'react-router-dom';


//images
import Image1 from "../assets/Slideshow/lawfirm1.jpeg";
import Background from "../assets/Slideshow/Background1.jpg";


//links
import { LuScale } from "react-icons/lu";
import { CiBank, CiMail } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { FaRegHandshake, FaSuperpowers  } from "react-icons/fa";
import { GiHandcuffs } from "react-icons/gi";

const PracticeData = [
    {
        url: "banking-financing",
        icon: <CiBank />,
        title: "Banking & Financing",
        content: "Anti-Bribery & Anti-Corruption In today’s global business environment, where integrity and compliance are more critical than ever, our specialized team."
    },
    {
        url: "real-estate",
        icon: <LuScale />,
        title: "Real Estate Law",
        content: "Anti-Bribery & Anti-Corruption In today’s global business environment, where integrity and compliance are more critical than ever, our specialized team."
    },
    {
        url: "probate-administration",
        icon: <CiBank />,
        title: "Probate & Administration",
        content: "Anti-Bribery & Anti-Corruption In today’s global business environment, where integrity and compliance are more critical than ever, our specialized team."
    },
    {
        url: "employment-relations",
        icon: <GoPeople />,
        title: "Employment Relations & Labour Law",
        content: "Anti-Bribery & Anti-Corruption In today’s global business environment, where integrity and compliance are more critical than ever, our specialized team."
    },
    {
        url: "debt-recovery",
        icon: <CiBank />,
        title: "Debt Recovery",
        content: "Anti-Bribery & Anti-Corruption In today’s global business environment, where integrity and compliance are more critical than ever, our specialized team."
    },
    {
        url: "cooprate",
        icon: <CiBank />,
        title: "Corporate, Mergers & Acquisitions",
        content: "Anti-Bribery & Anti-Corruption In today’s global business environment, where integrity and compliance are more critical than ever, our specialized team."
    },
    {
        url: "risk-compliance",
        icon: <CiBank />,
        title: "Risk & Complince",
        content: "Anti-Bribery & Anti-Corruption In today’s global business environment, where integrity and compliance are more critical than ever, our specialized team."
    },
    {
        url: "/",
        icon: <GiHandcuffs />,
        title: "Private Client",
        content: "Anti-Bribery & Anti-Corruption In today’s global business environment, where integrity and compliance are more critical than ever, our specialized team."
    },
]

const PracticeAreas = () => {
  return (
    <>
        <div className='bg-fixed bg-cover h-vdh'
            style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover',backgroundPosition: 'center'}}
        >
            <section className='w-full h-[70vh] bg-fixed bg-no-repeat bg-cover relative'
                style={{ backgroundImage: `url(${Image1})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
            >
                <div className='absolute top-0 w-full h-full bg-[#1B3452] bg-opacity-40 flex flex-col items-center justify-center font-lato text-white'>
                    <h1 className='text-6xl font-bold subpixel-antialiased'>Practice Areas</h1>
                </div>
                <div className='absolute bottom-0 bg-[#FBFBFB] w-full h-[20%] rounded-tl-full rounded-tr-full'>
                    <h2 className='text-center text-4xl font-semibold my-[20px] text-[#1B3452]'>Legal Practice Areas</h2>
                </div>
            </section>
            <section className='my-[50px]'>
                <div className='w-[80%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-3 pb-[70px]'>
                    {PracticeData.map((Data,Index) => (
                        <div key={Index} className='bg-white shadow-md px-3 py-5 flex flex-col justify-center items-center text-center font-laro group hover:bg-[#1B3452] transition-all duration-500'>
                            <Link to={Data.url}>
                                <div className='text-6xl text-[#E49F27] flex flex-col justify-center items-center group-hover:text-white'>
                                    {Data.icon}
                                </div>
                                <div>
                                    <h3 className='text-2xl font-semibold antialiased group-hover:text-[#E49F27]'>{Data.title}</h3>
                                    <p className='text-sm my-[10px] text-[#716363] font-lato w-[90%] mx-auto group-hover:text-white'>{Data.content}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </>
  );
}

export default PracticeAreas;