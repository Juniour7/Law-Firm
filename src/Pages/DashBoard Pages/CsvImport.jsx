import React, { useState } from 'react';
import { Box, Button, Typography, Select, IconButton, Checkbox, FormControlLabel, TextField, FormControl, InputLabel, MenuItem } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CsvImport = () => {
  const [step, setStep] = useState(1);
  const [group, setGroup] = useState('');

  const handleContinue = () => {
    setStep(2);
  };

  const handleGroupChange = (event) => {
    setGroup(event.target.value);
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Step Line */}
      <Box display="flex" alignItems="center" mb={3}>
        {/* Step 1 */}
        <Box display="flex" alignItems="center">
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              bgcolor: step === 1 ? 'blue' : 'grey.300',
              color: step === 1 ? 'white' : 'black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mr: 1,
            }}
          >
            1
          </Box>
          <Typography sx={{ mr: 3 }}>Upload</Typography>
        </Box>

        {/* Line */}
        <Box sx={{ flexGrow: 0.7, height: 2, bgcolor: 'grey.500' }}></Box>

        {/* Step 2 */}
        <Box display="flex" alignItems="center" ml={3}>
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              bgcolor: step === 2 ? 'blue' : 'grey.300',
              color: step === 2 ? 'white' : 'black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mr: 1,
            }}
          >
            2
          </Box>
          <Typography>Set Contacts Field</Typography>
        </Box>
      </Box>

      {step === 1 && (
        <>
          {/* Import CSV File Header */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Import CSV File
          </Typography>

          {/* Instructions */}
          <Typography sx={{ mb: 2 }}>
            Make sure the file contains the name and phone number of each contact.
          </Typography>

          {/* File Upload Section */}
          <Box
            sx={{
              border: '2px dashed grey',
              borderRadius: '20px',
              p: 9,
              textAlign: 'center',
              height: 300,
              width: 800,
              mb: 6,
              cursor: 'pointer',
              mt: 5,
            }}
          >
            <IconButton>
              <CloudUploadIcon fontSize="large" />
            </IconButton>
            <Typography>Drag a file or click to browse</Typography>
          </Box>

          {/* Buttons */}
          <Box display="flex" justifyContent="flex-start" mt={3}>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'grey.300',
                color: 'black',
                textTransform: 'lowercase',
                mr: 70,
                borderRadius: '10%',
                fontSize: '16px',
                padding: '10px 24px',
              }}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'blue',
                color: 'white',
                textTransform: 'lowercase',
                fontSize: '16px',
                padding: '10px 24px',
              }}
              onClick={handleContinue}
            >
              continue
            </Button>
          </Box>

          {/* Download Sample CSV */}
          <Box mt={2} textAlign="center">
            <Button variant="text" sx={{ textTransform: 'capitalize', color: 'blue', mr: 45 }}>
              Download a sample CSV file
            </Button>
          </Box>
        </>
      )}

      {step === 2 && (
        <>
          <Box sx={{ bgcolor: 'white', p: 3, borderRadius: '10px', maxWidth: '900px',height: 400,  }}>
            {/* Importing CSV File Navbar */}
            <Box
              sx={{
                bgcolor: 'white',
                p: 2,
                mb: 3,
                boxShadow: 1,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Importing CSV File
              </Typography>
              <Box sx={{ height: 1, bgcolor: 'grey.400', mb: 3 }}></Box>
            </Box>

            {/* Automatically Group By Section */}
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
              Automatically group by:
            </Typography>

            <Box display="flex" alignItems="center" mb={2}>
            <FormControlLabel
              control={<Checkbox />}
              label="Create a group from new file"
              sx={{ mr: 2 }}
            />
            <TextField
              variant="outlined"
              placeholder="Group Name"
              size="small"
              sx={{ width: '200px' }}
            />
          </Box>

          <Box display="flex" alignItems="center">
      <FormControlLabel
        control={<Checkbox />}
        label="Select Existing group"
        sx={{ mr: 9 }} // Adjust margin-right as needed
      />
      <FormControl sx={{ width: '200px' }}>
        <Select
          value={group}
          onChange={handleGroupChange}
          displayEmpty
          renderValue={(selected) => (selected ? selected : <span style={{ color: 'gray' }}>Group Name</span>)}
          IconComponent={ArrowDropDownIcon}
          sx={{ fontSize: '14px', height: '40px', display: 'flex', alignItems: 'center', paddingLeft: 1, paddingRight: 1 }}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 200,
              },
            },
          }}
        >
          <MenuItem value="personal">Personal</MenuItem>
          <MenuItem value="marketing">Marketing</MenuItem>
          <MenuItem value="customer">Customer</MenuItem>
        </Select>
      </FormControl>
    </Box>
          </Box>

          {/* Buttons */}
          <Box display="flex" justifyContent="flex-start" mt={3} mb={2}>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'grey.300',
                color: 'black',
                textTransform: 'lowercase',
                mr: 70,
                borderRadius: '10%',
                fontSize: '16px',
                padding: '10px 24px',
              }}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'blue',
                color: 'white',
                textTransform: 'lowercase',
                fontSize: '16px',
                padding: '10px 24px',
              }}
            >
              continue
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CsvImport;
