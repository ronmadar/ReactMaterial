import React from 'react';
import CustomButton from './Button'; // Import the CustomButton component
import Typography from '@mui/material/Typography';

const Services: React.FC = () => {
  return (
    <div className='service-component'>
      <Typography variant="h2" component="h2">
        Our Services
      </Typography>
      <CustomButton label="Button Component" />
    </div>
  );
};

export default Services;
