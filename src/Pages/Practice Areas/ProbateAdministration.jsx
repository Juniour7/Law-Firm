import React from 'react';
import { Link } from 'react-router-dom';

//images
import Image1 from "../../assets/Slideshow/administration.jpg";

//icons
import { GoChevronRight } from "react-icons/go";

const PracticeAreas = [
  {
    title: "Real Estate Law",
    path: "/practice-areas/real-estate"
  },
  {
    title: "Banking & Financing",
    path: "/practice-areas/banking-financing"
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

const ProbateAdministration = () => {
  return (
    <>
      <div className=''>
        <section className='w-full h-[70vh] bg-fixed bg-no-repeat bg-cover relative'
          style={{ backgroundImage: `url(${Image1})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
        >
          <div className='absolute top-0 w-full h-full bg-[#1B3452] bg-opacity-40 flex flex-col items-center justify-center font-lato text-white'>
            <h1 className='text-6xl font-bold subpixel-antialiased'>Probate & Administration</h1>
          </div>
          <div className='absolute bottom-0 bg-[#FBFBFB] w-full h-[20%] rounded-tl-full rounded-tr-md'>
            <h2 className='text-center text-4xl font-semibold my-[20px] text-[#1B3452]'>Legal Practice Areas</h2>
            <div className='p-4 flex gap-4 text-sm'>
              <Link to='/' className='hover:text-[#E49F27]'>
                Home >>
              </Link>
              <Link to='/practice-areas/banking-financing' className='text-gray-500 italic'>
                Probate & Administration
              </Link>
            </div>
          </div>
        </section>
        <section className='mt-[70px] mb-[50px] flex justify-center gap-[20px] w-[90%] mx-auto'>
          <div className='basis-[70%] '>
            <div className='w-full h-[500px]'>
              <img src={Image1} alt='Banking And financing' className='w-full h-full object-cover' />
            </div>
            <div className='border-b border-Main-900'>
              <h1 className='text-3xl my-3 font-semibold text-Main-900'>Probate & Administration</h1>
            </div>
            <div className='mt-[20px] text-md text-black/75 space-y-3'>
              <p>At Guardian Law Firm, our probate and administration practice is dedicated to guiding clients through the often complex and emotional process of managing a loved one’s estate in accordance with Kenyan law. We provide comprehensive legal services that cover the entire probate process, from obtaining grants of probate or letters of administration to distributing assets to beneficiaries. Our team works closely with executors, administrators, and beneficiaries to ensure that the estate is managed efficiently, transparently, and in full compliance with the Law of Succession Act. We are committed to alleviating the legal burdens during this challenging time, providing clear and compassionate advice every step of the way.</p>
              <p>In addition to managing the probate process, Guardian Law Firm offers expert counsel on estate planning and administration to help clients proactively manage their assets and prepare for the future. Our attorneys assist in drafting wills, setting up trusts, and advising on the best strategies to minimize tax liabilities and protect assets. We ensure that our clients’ wishes are clearly documented and legally binding, reducing the potential for disputes among beneficiaries. By providing tailored estate planning solutions, we help our clients secure their legacy and ensure a smooth transition of assets to the next generation.</p>
              <p>When disputes arise in the administration of an estate, Guardian Law Firm is equipped to provide strong representation in resolving conflicts. Whether dealing with contested wills, challenges to the validity of a will, or disagreements over asset distribution, our experienced litigators work diligently to protect our clients’ rights and interests. We approach each case with sensitivity and a focus on finding amicable solutions, but we are fully prepared to advocate aggressively in court if necessary. With Guardian Law Firm’s expertise in probate and administration, clients can navigate these complex legal processes with confidence and peace of mind.</p>
            </div>
          </div>
          <div className='basis-[30%]'>
            <h4 className='font-playfair text-2xl'>Our Practice Areas</h4>
            <div className='grid grid-cols-1 justify-center items-center gap-2'>
              {PracticeAreas.map((Data,Index) => (
                <div key={Index} className='border border-gray-500 text-gray-500 p-4 mt-[20px] font-playfair group hover:bg-[#E49F27] hover:text-white hover:border-none transition-all duration-300 ease-in-out'>
                  <Link to={Data.path}>
                    <h1 className='text-xl font-semibold'>{Data.title}</h1>
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

export default ProbateAdministration;