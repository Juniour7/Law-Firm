import React from 'react';
import { Link } from 'react-router-dom';

//images
import Image1 from "../../assets/Slideshow/bank.jpg";

//icons
import { GoChevronRight } from "react-icons/go";


const PracticeAreas = [
  {
    title: "Real Estate Law",
    path: "/practice-areas/real-estate"
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

const BankingFinancing = () => {
  return (
    <>
      <div className=''>
        <section className='w-full h-[70vh] bg-fixed bg-no-repeat bg-cover relative'
          style={{ backgroundImage: `url(${Image1})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
        >
          <div className='absolute top-0 w-full h-full bg-[#1B3452] bg-opacity-40 flex flex-col items-center justify-center font-lato text-white'>
            <h1 className='text-6xl font-bold subpixel-antialiased'>Banking & Financing</h1>
          </div>
          <div className='absolute bottom-0 bg-[#FBFBFB] w-full h-[20%] rounded-tl-full rounded-tr-md'>
            <h2 className='text-center text-4xl font-semibold my-[20px] text-[#1B3452]'>Legal Practice Areas</h2>
            <div className='p-4 flex gap-4 text-sm'>
              <Link to='/' className='hover:text-[#E49F27]'>
                Home >>
              </Link>
              <Link to='/practice-areas/banking-financing' className='text-gray-500 italic'>
                Banking & Financing 
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
              <h1 className='text-3xl my-3 font-semibold text-Main-900'>Banking & Financing</h1>
            </div>
            <div className='mt-[20px] text-md text-black/75 space-y-3'>
              <p >At Guardian Law Firm, our banking and finance practice is rooted in a deep understanding of Kenya’s legal and regulatory framework. We specialize in advising clients on a wide range of financial transactions, including corporate lending, project finance, and asset-based lending. Our team works closely with banks, financial institutions, and corporate entities to structure deals that align with both their strategic goals and the stringent requirements set forth by the Central Bank of Kenya. We ensure that every transaction is meticulously reviewed to mitigate risks and ensure compliance with all relevant laws and regulations.</p>
              <p>In addition to transaction structuring, Guardian Law Firm offers robust legal support in regulatory compliance and risk management. Navigating the complexities of financial regulation in Kenya requires not only legal expertise but also a nuanced understanding of the evolving regulatory landscape. Our attorneys stay ahead of changes in legislation, ensuring that our clients remain compliant with laws related to anti-money laundering, consumer protection, and capital markets. We provide ongoing advisory services to help clients anticipate regulatory shifts and adjust their operations accordingly, minimizing legal risks and protecting their financial interests.</p>
              <p>Guardian Law Firm also excels in dispute resolution and litigation within the banking and finance sector. When conflicts arise, our experienced litigators are prepared to defend our clients’ interests in court or through alternative dispute resolution methods. We have successfully represented clients in cases involving loan defaults, enforcement of security interests, and other financial disputes. Our goal is to resolve conflicts efficiently and effectively, allowing our clients to focus on their core business activities. With Guardian Law Firm by your side, you can navigate Kenya’s banking and finance landscape with confidence and peace of mind.</p>
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

export default BankingFinancing;