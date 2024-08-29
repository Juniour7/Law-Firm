import React from 'react';
import { Link } from 'react-router-dom';

//images
import Image1 from "../../assets/Slideshow/labor.jpg";

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
    title: "Real Estate Law",
    path: "/practice-areas/real-estate"
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

const EmploymentRelations = () => {
  return (
    <>
      <div className=''>
        <section className='w-full h-[40vh] md:h-[70vh] bg-fixed bg-no-repeat bg-cover relative'
          style={{ backgroundImage: `url(${Image1})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
        >
          <div className='absolute top-0 w-full h-full bg-[#1B3452] bg-opacity-40 flex flex-col items-center p-2 justify-center font-lato text-white'>
            <h1 className='text-3xl md:text-6xl font-bold subpixel-antialiased'>Employment Relations & Labour Law</h1>
          </div>
          <div className='absolute bottom-0 bg-[#FBFBFB] w-full h-[20%] rounded-tl-full rounded-tr-md'>
            <h2 className='text-center text-xl md:text-4xl font-semibold my-[20px] text-[#1B3452]'>Legal Practice Areas</h2>
            <div className='p-4 flex gap-4 text-sm'>
              <Link to='/' className='hover:text-[#E49F27]'>
                Home >>
              </Link>
              <Link to='' className='text-gray-500 italic'>
                Employment Relations &  Labour Law
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
              <h1 className='text-3xl my-3 font-semibold text-Main-900'>Employment Relations &  Labour Law</h1>
            </div>
            <div className='mt-[20px] text-md text-black/75 space-y-3'>
              <p>At Guardian Law Firm, our Employment Relations and Labour Law practice is committed to helping both employers and employees navigate the complexities of workplace regulations in Kenya. We provide comprehensive legal services that include drafting and reviewing employment contracts, advising on compliance with the Employment Act, and guiding clients through the intricacies of workplace policies and procedures. Our team works with businesses across various industries to ensure that their employment practices are legally sound, fair, and aligned with best practices. For employees, we offer expert advice on matters such as contract negotiations, wrongful termination, and workplace rights, ensuring their interests are fully protected.</p>
              <p>In addition to transactional and advisory services, Guardian Law Firm excels in dispute resolution within the realm of employment and labour law. We represent clients in matters before the Industrial Court of Kenya, handling cases related to unfair dismissal, discrimination, harassment, and wage disputes. Our attorneys are skilled negotiators and litigators who strive to resolve conflicts efficiently while safeguarding our clients' reputations and financial interests. Whether through mediation, arbitration, or litigation, we work tirelessly to achieve favorable outcomes that promote a positive and compliant workplace environment.</p>
              <p>Guardian Law Firm also provides strategic guidance on collective bargaining and labour relations. We assist employers in negotiating with trade unions and managing industrial relations to prevent and resolve labour disputes. Our firm is well-versed in the Labour Relations Act and other relevant legislation, enabling us to offer sound advice on union matters, strikes, lockouts, and collective agreements. For businesses navigating the complexities of employment relations in Kenya, Guardian Law Firm is a trusted partner, offering practical solutions that foster productive and legally compliant workplaces.</p>
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

export default EmploymentRelations;

