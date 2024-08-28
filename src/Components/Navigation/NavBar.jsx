import React from 'react';

//NavBar Components
import NavSm from './NavSm';
import NavMd from './NavMd';
import NavLg from './NavLg';

const NavBar = () => {
  return (
    <>
      <div className='md:hidden'>
        <NavSm />
      </div>
      <div className='hidden md:block lg:hidden'>
        <NavMd />
      </div>
      <div className='hidden lg:block'>
        <NavLg />
      </div>
    </>
  )
}

export default NavBar;