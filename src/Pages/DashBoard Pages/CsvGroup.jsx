import React from 'react';
import { Box, Typography, TextField, Radio, RadioGroup, FormControlLabel, InputAdornment, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CsvGroup = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Navbar */}
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
        <Box sx={{ height: 1, bgcolor: 'grey.400', mb: 3, filter: 'blur(1px)' }}></Box>
      </Box>

      {/* Automatically Group By Section */}
      <Box sx={{ bgcolor: 'white', p: 3, borderRadius: '10px' }}>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Automatically group by:
        </Typography>

        <RadioGroup defaultValue="newGroup">
          <Box display="flex" alignItems="center" mb={2}>
            <FormControlLabel value="newGroup" control={<Radio />} label="Create a group from new file" />
            <TextField
              variant="outlined"
              placeholder="Group Name: Group name"
              size="small"
              sx={{ ml: 2, width: '300px' }}
            />
          </Box>

          <Box display="flex" alignItems="center">
            <FormControlLabel value="existingGroup" control={<Radio />} label="Select Existing group" />
            <TextField
              variant="outlined"
              placeholder="Group Name: Group name"
              size="small"
              sx={{ ml: 2, width: '300px' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <ArrowDropDownIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default CsvGroup;
