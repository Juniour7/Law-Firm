import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

//icons
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";


const MenuItem = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="relative">
      <button 
        className="w-full text-left p-2 rounded-md transition-colors duration-200"
        onClick={toggleSubmenu}
      >
        {label}
      </button>
      {children && (
        <ul 
          className={`pl-3 mt-1  space-y-1 transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[300px]' : 'max-h-0'
          }`}
        >
          {children}
        </ul>
      )}
    </li>
  );
};

const NavSm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closemenu = () => {
    setIsOpen(false);
  }

  return (
      <>
        <nav className="bg-[#1B3452] fixed top-0 z-50 w-full  shadow-xl">
          <div className="h-[70px] px-3 flex justify-between items-center">
            <div className="text-white text-2xl font-bold">
              <Link to="/" onClick={() => handleClick('home')}>MySite</Link>
            </div>
            <div onClick={toggleMenu} className="cursor-pointer text-[white] text-3xl transition-all duration-1000">
              {isOpen ? <IoMdClose /> : <FaBarsStaggered />}
            </div>
          </div>
            <div className="relative">
              <div
                className={`absolute top-0 right-0 w-full h-screen bg-white text-black z-50 text-lg shadow-lg transition-all transform duration-500 overflow-hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
              >
                <ul className="flex flex-col p-2 space-y-2">
                  <NavLink to="/" onClick={closemenu}><MenuItem label="Home" /></NavLink>
                  <NavLink to="/about-Us" onClick={closemenu}><MenuItem label="About Us" /></NavLink>
                  <MenuItem label="Our Practice Areas">
                    <NavLink to="/practice-areas/banking-financing" onClick={closemenu}><MenuItem label="Banking & Financing" /></NavLink>
                    <NavLink to="/practice-areas/real-estate" onClick={closemenu}><MenuItem label="Real Estate Law" /></NavLink>
                    <NavLink to="/practice-areas/probate-administration" onClick={closemenu}><MenuItem label="Probate & Administration" /></NavLink>
                    <NavLink to="/practice-areas/employment-relations" onClick={closemenu}><MenuItem label="Employment Relations & Labor Law" /></NavLink>
                    <NavLink to="/practice-areas/debt-recovery" onClick={closemenu}><MenuItem label="Debt Recovery" /></NavLink>
                    <NavLink to="/practice-areas/cooprate" onClick={closemenu}><MenuItem label="Corporate, Mergers & Acquisitions" /></NavLink>
                    <NavLink to="/practice-areas/risk-compliance" onClick={closemenu}><MenuItem label="Risk & Compliance" /></NavLink>
                    <NavLink to="/practice-areas/private-client" onClick={closemenu}><MenuItem label="Private Client" /></NavLink>
                  </MenuItem>
                  <NavLink to="/contact-us" onClick={closemenu}><MenuItem label="Contact Us" /></NavLink>
                  <div>
                    <Link to="/booking"><button onClick={closemenu} className="bg-[#00ADEF]  text-white text-lg font-bold px-5 py-2 transition-colors duration-300 rounded-full">Sign Up</button></Link>
                  </div>
                  <div>
                    <Link to="/booking"><button onClick={closemenu} className="bg-[#00ADEF]  text-white text-lg font-bold px-5 py-2 transition-colors duration-300 rounded-full">Log In</button></Link>
                  </div>
                </ul>
              </div>
            </div>
        </nav>
    </>
  );
}

export default NavSm;