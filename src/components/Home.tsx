import React from 'react';
import { Typography, Box } from '@mui/material';

const Home: React.FC = () => {
  return (
    <>  
    <div className='home-component'>
      <Box component="main" role="main" sx={{ padding: 4 }}>
        <Typography variant="h2" component="h2"> 
          Welcome to My Material App!
        </Typography>
        <Typography variant="body1" component="p">
          This is a sample React application using Material-UI.
        </Typography>
        <Typography variant="body1" component="p">
          Feel free to explore the different sections by clicking on the navigation links above.
        </Typography>
      </Box>
    </div>
    </>

  );
};

export default Home;
