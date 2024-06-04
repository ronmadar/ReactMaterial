import React from 'react';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer: React.FC = () => {
  return (
    <Box sx={{ mt: 'auto', py: 6, px: 2, bgcolor: 'background.paper', textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © 2024 My Material App.
        <Link href="/privacy-policy" color="inherit" underline="none" sx={{ ml: 2 }}>
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" color="inherit" underline="none" sx={{ ml: 2 }}>
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
