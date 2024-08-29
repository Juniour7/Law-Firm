import React from 'react';
import { Link } from 'react-router-dom';

//images
import Image1 from "../../assets/Slideshow/real esate.jpg";

//icons
import { GoChevronRight } from "react-icons/go";

const PracticeAreas = [
  {
    title: "Banking & Financing",
    path: "/practice-areas/banking-financing"
  },
  {
    title: "Probate & Administration",
    path: "/practice-areas/probate-administration"
  },
  {
    title: "Employement Relations & Labor Law",
    path: "/practice-areas/employment-relations"
  },
  {
    title: "Debt Recovery",
    path: "/practice-areas/debt-recovery"
  },
  {
    title: "Corporate, Mergers & Acquisitions",
    path: "/practice-areas/cooprate"
  },
  {
    title: "Risk & Compliance",
    path: "/practice-areas/risk-compliance"
  },
  {
    title: "Private Client",
    path: "/practice-areas/private-client"
  },
]

const RealEstate = () => {
  return (
    <>
      <div className=''>
        <section className='w-full h-[40vh] md:h-[70vh] bg-fixed bg-no-repeat bg-cover relative'
          style={{ backgroundImage: `url(${Image1})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
        >
          <div className='absolute top-0 w-full h-full bg-[#1B3452] bg-opacity-40 flex flex-col items-center justify-center font-lato text-white'>
            <h1 className='text-3xl md:text-6xl font-bold subpixel-antialiased'>Real Estate Law</h1>
          </div>
          <div className='absolute bottom-0 bg-[#FBFBFB] w-full h-[20%] rounded-tl-full rounded-tr-md'>
            <h2 className='text-center text-xl md:text-4xl font-semibold my-[20px] text-[#1B3452]'>Legal Practice Areas</h2>
            <div className='p-4 flex gap-4 text-sm'>
              <Link to='/' className='hover:text-[#E49F27]'>
                Home >>
              </Link>
              <Link to='/practice-areas/banking-financing' className='text-gray-500 italic'>
                Real Estate Law
              </Link>
            </div>
          </div>
        </section>
        <section className='mt-[70px] mb-[50px] md:flex justify-center gap-[20px] w-[90%] mx-auto'>
          <div className='basis-[70%] '>
            <div className='w-full h-[270px] md:h-[500px]'>
              <img src={Image1} alt='Banking And financing' className='w-full h-full object-cover' />
            </div>
            <div className='border-b border-Main-900'>
              <h1 className='text-3xl my-3 font-semibold text-Main-900'>Real Estate Law</h1>
            </div>
            <div className='mt-[20px] text-md text-black/75 space-y-3'>
              <p >At Guardian Law Firm, our real estate law practice is designed to support clients through every stage of property transactions in Kenya’s dynamic real estate market. We offer comprehensive legal services, including property acquisition, due diligence, contract negotiation, and title registration. Our team has extensive experience working with developers, investors, corporations, and individual property owners, ensuring that every transaction is legally sound and strategically advantageous. We are committed to safeguarding our clients’ interests, providing clear and practical advice that helps them make informed decisions in the complex world of real estate.</p>
              <p>In addition to transactional support, Guardian Law Firm provides expert guidance on regulatory compliance and land use planning. Understanding the intricate web of laws governing land ownership, zoning, environmental regulations, and property development is crucial for success in Kenya’s real estate sector. Our attorneys are well-versed in the Land Act, Land Registration Act, and other key pieces of legislation, ensuring that our clients remain compliant with all legal requirements. We assist in navigating the regulatory approval processes and resolving any legal challenges that may arise, allowing our clients to proceed with confidence in their real estate endeavors.</p>
              <p>Dispute resolution is another cornerstone of our real estate practice at Guardian Law Firm. Whether dealing with boundary disputes, breaches of contract, or landlord-tenant conflicts, our skilled litigators are equipped to protect our clients’ property rights. We offer representation in negotiations, mediation, arbitration, and litigation, aiming to achieve the best possible outcomes while minimizing disruptions to our clients’ real estate projects. With Guardian Law Firm, clients benefit from a full-service legal partner who is dedicated to their success in Kenya’s ever-evolving real estate landscape.</p>
            </div>
          </div>
          <div className='basis-[30%]'>
            <h4 className='font-playfair text-2xl'>Our Practice Areas</h4>
            <div className='grid grid-cols-1 justify-center items-center'>
              {PracticeAreas.map((Data,Index) => (
                <div key={Index} className='border border-gray-500 text-gray-500 p-4 mt-[20px] font-playfair group hover:bg-[#E49F27] hover:text-white hover:border-none transition-all duration-300 ease-in-out'>
                  <Link to={Data.path}>
                    <h1 className='text-lg md:text-xl font-semibold'>{Data.title}</h1>
                  </Link>
                </div>
              ))}
            </div>
            <div className='mt-[20px]'>
              <h1 className='text-2xl font-semibold'>Contact Us</h1>
              <ol className='mt-4'>
                <li className='flex gap-1 items-center jutsify-center text-lg cursor-pointer group transition-colors duration-300'>
                  <span className='text-2xl group-hover:text-[#E49F27]'>
                    <GoChevronRight />
                  </span>
                  <a href='tel:'>
                    <h4 className='text-gray-800 group-hover:text-[#E49F27] delay-100'>+2547xxxxxx</h4>
                  </a>
                </li>
                <li className='flex gap-1 items-center jutsify-center text-lg cursor-pointer group transition-colors duration-300'>
                  <span className='text-2xl group-hover:text-[#E49F27]'>
                    <GoChevronRight />
                  </span>
                  <a href='tel:'>
                    <h4 className='text-gray-800 group-hover:text-[#E49F27] delay-100'>guardianlawfirm@gmail.com</h4>
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default RealEstate;