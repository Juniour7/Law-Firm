import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavLg = () => {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const handleLogInClick = () => {
    navigate('/login');
  };

  const handlePracticeClick = () => {
    navigate('/practice-areas');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <>
      <nav className={`fixed w-full z-50 top-0 h-[90px] ${scrolling ? 'bg-gray-800' : 'bg-[#1B3452]'} transition-colors duration-300 ease-in-out`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-white text-2xl font-bold">
          <Link to="/" onClick={() => handleClick('home')}>MySite</Link>
        </div>
        <ul className="flex space-x-4 text-lg font-lato"> 
          <li className='py-4'>
            <Link
              to="/"
              className={`text-white  ${activeLink === 'home' ? 'underline underline-offset-4 decoration-2 decoration-[#E49F27]' : ''}`}
              onClick={() => handleClick('home')}
            >
              Home
            </Link>
          </li>
          <li className='py-4'>
            <Link
              to="/about-Us"
              className={`text-white ${activeLink === 'about-Us' ? 'underline underline-offset-4 decoration-2 decoration-[#E49F27]' : ''}`}
              onClick={() => handleClick('about-Us')}
            >
              About Us
            </Link>
          </li>
          <li className="relative group">
            <button onClick={handlePracticeClick} className="text-white py-4">
              Practice Areas
            </button>
            <ul className="absolute -left-[50%] top-[56px] w-[250px] bg-gray-700 text-white hidden group-hover:block transition-opacity duration-300 ease-in-out divide-y">
              <li>
                <Link
                  to="/practice-areas/banking-financing"
                  className={`block px-4 py-2 hover:bg-gray-600 ${activeLink === '/banking-financing' ? '' : ''}`}
                  onClick={() => handleClick('service1')}
                >
                  Banking & Financing
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas/real-estate"
                  className={`block px-4 py-2 hover:bg-gray-600 ${activeLink === 'real-estate' ? 'bg-gray-600' : ''}`}
                  onClick={() => handleClick('service2')}
                >
                  Real Estate Law
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas/probate-administration"
                  className={`block px-4 py-2 hover:bg-gray-600 ${activeLink === 'probate-administration' ? 'bg-gray-600' : ''}`}
                  onClick={() => handleClick('service2')}
                >
                  Probate & Administration
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas/employment-relations"
                  className={`block px-4 py-2 hover:bg-gray-600 ${activeLink === 'employment-relations' ? 'bg-gray-600' : ''}`}
                  onClick={() => handleClick('service2')}
                >
                  Employment Relations & Labour Law
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas/debt-recovery"
                  className={`block px-4 py-2 hover:bg-gray-600 ${activeLink === 'debt-recovery' ? 'bg-gray-600' : ''}`}
                  onClick={() => handleClick('service2')}
                >
                 Debt Recovery
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas/cooprate"
                  className={`block px-4 py-2 hover:bg-gray-600 ${activeLink === 'cooprate' ? 'bg-gray-600' : ''}`}
                  onClick={() => handleClick('service2')}
                >
                  Corporate, Mergers & Acquisitions
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas/risk-compliance"
                  className={`block px-4 py-2 hover:bg-gray-600 ${activeLink === 'risk-compliance' ? 'bg-gray-600' : ''}`}
                  onClick={() => handleClick('service2')}
                >
                  Risk & Compliance
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas/private-client"
                  className={`block px-4 py-2 hover:bg-gray-600 ${activeLink === 'private-client' ? 'bg-gray-600' : ''}`}
                  onClick={() => handleClick('service2')}
                >
                  Private Client
                </Link>
              </li>
            </ul>
          </li>
          <li className='py-4'>
            <Link
              to="/contact-us"
              className={`text-white ${activeLink === 'contact-us' ? 'underline underline-offset-4 decoration-2 decoration-[#E49F27]' : ''}`}
              onClick={() => handleClick('contact-us')}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className='flex gap-4'>
          <button onClick={handleLogInClick} className='text-white font-semibold px-5 py-2 border border-[#E49F27] hover:bg-[#E49F27] transition-colors duration-500'>Log In</button>
          <button onClick={handleSignUpClick} className='text-white font-semibold px-5 py-1 border border-[#E49F27] bg-[#E49F27] transition-colors duration-500'>Sign Up</button>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavLg;