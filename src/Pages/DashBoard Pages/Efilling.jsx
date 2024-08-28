import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Title from './Title';
import CsvImport from './CsvImport';

const Efilling = () => {
    const [showCsvImport, setShowCsvImport] = useState(false);

    const handleImportClick = () => {
        setShowCsvImport(true);
    };
  return (
    <React.Fragment>
      {showCsvImport ? (
        <CsvImport />
      ) : (
        <>
          <Title>E-Filing Form</Title>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              type='text'
              required
              id="firstName"
              label="First Name"
              name="fullName"
              autoComplete="given-name"
              autoFocus
              sx={{ mb: 2, mr: 2, fontSize: '0.9rem', width: '40%' }}
            />

            <TextField
              margin="normal"
              type='text'
              required
              id="lastName"
              label="Last Name"
              name="fullName"
              autoComplete="given-name"
              autoFocus
              sx={{ mb: 2, fontSize: '0.9rem', width: '40%' }}
            />

            <TextField
              margin="normal"
              type='text'
              required
              id="idNumber"
              label="Id Number"
              name="idNumber"
              autoComplete="given-name"
              autoFocus
              sx={{ mb: 2, mr: 2, fontSize: '0.9rem', width: '40%' }}
            />

            <TextField
              margin="normal"
              type='date'
              required
              id="dob"
              label="Date Of Birth"
              name="dob"
              autoComplete="given-name"
              autoFocus
              sx={{ mb: 2, fontSize: '0.9rem', width: '40%' }}
            />

          
            <TextField
              margin="normal"
              type='text'
              required
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              autoComplete="tel"
              sx={{ mb: 2, mr: 2, fontSize: '0.9rem', width: '40%' }}
            />

            <TextField
              margin="normal"
              type='email'
              required
              id="emailAddress"
              label="Email Address"
              name="emailAddress"
              autoComplete="tel"
              sx={{ mb: 2, fontSize: '0.9rem', width: '40%' }}
            />
            

            <TextField
              margin="normal"
              type='text'
              required
              id="crime"
              label="Crime"
              name="crime"
              autoComplete="tel"
              sx={{ mb: 2, mr: 2, fontSize: '0.9rem', width: '40%' }}
            />
            
            <TextField
              margin="normal"
              type='date'
              required
              id="date"
              name="date"
              autoComplete="date"
              sx={{ mb: 2, fontSize: '0.9rem', width: '40%' }}
            />

            
            <Box sx={{ display: 'flex', justifyContent: 'space-end', mt: 3, width: '65%' }}>
              <Button 
                type="submit"
                variant="contained"
                sx={{ bgcolor: 'black', color: 'white', textTransform: 'capitalize' }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </>
      )}
    </React.Fragment>
  );
}

export default Efilling;