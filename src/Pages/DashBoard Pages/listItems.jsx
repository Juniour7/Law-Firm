import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom'; // Import Link from React Router
import SmsIcon from '@mui/icons-material/Sms';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AddCardIcon from '@mui/icons-material/AddCard';
import CalculateIcon from '@mui/icons-material/Calculate';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

// React Icons
import { FaHome } from "react-icons/fa";
import { IoMdFiling } from "react-icons/io";

const SearchBar = () => (
  <TextField
    variant="outlined"
    placeholder="Search..."
    fullWidth
    sx={{ mb: 2, maxWidth: 400, margin: 'auto' }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />
);

export const mainListItems = (
  // <React.Fragment>
  //   <ListItemButton component={Link} to="/dashboard/dashboard-home">
  //     <ListItemIcon>
  //       <DashboardIcon />
  //     </ListItemIcon>
  //     <ListItemText primary="Home" />
  //   </ListItemButton>

  //   <ListItemButton component={Link} to="/dashboard/dashboard-home">
  //     <ListItemIcon>
  //       <DashboardIcon />
  //     </ListItemIcon>
  //     <ListItemText primary="E-filing" />
  //   </ListItemButton>

  // </React.Fragment>
  <>
    <nav className='divide-y-2'>
      <Link to='/dashboard/dashboard-home'>
        <div className='flex items-center gap-2 text-xl py-3 px-4 hover:rounded-xl hover:shadow-xl border-b-[0.5px]'>
          <span className='text-3xl'>
            <FaHome />
          </span>
          <h1>Home</h1>
        </div>
      </Link>

      <Link to='/dashboard/e-filling'>
        <div className='flex items-center gap-2 text-xl py-3 px-4 rounded-xl hover:shadow-xl'>
          <span className='text-3xl'>
            <IoMdFiling />
          </span>
          <h1>E-Filing</h1>
        </div>
      </Link>
    </nav>
  </>
);

export const secondaryListItems = (
  <React.Fragment>
    
  </React.Fragment>
);
