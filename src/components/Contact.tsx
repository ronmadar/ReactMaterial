import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';

const Contact: React.FC = () => {
  return (
    <div className='contact-component'>
      <Typography variant="h2" component="h2">
        Contact Us
      </Typography>
      <List>
        <ListItem
          disableGutters={true} // Remove default padding for better spacing
          button // Make the list item clickable (optional)
        >
          <IconButton aria-label="Email us">
            <MailIcon />
          </IconButton>
          <ListItemText primary="Email: Ronmadar9@gmail.com" />
        </ListItem>
        <ListItem
          disableGutters={true}
          button // Make the list item clickable (optional)
        >
          <IconButton aria-label="Call us">
            <PhoneIcon />
          </IconButton>
          <ListItemText primary="Phone: (054) 227-8366" />
        </ListItem>
        <ListItem
          disableGutters={true}
          button // Make the list item clickable (optional)
        >
          <IconButton aria-label="Our address">
            <PlaceIcon />
          </IconButton>
          <ListItemText primary="Address: Gisin Main Street, Petah-Tikva, Em Hamoshavot" />
        </ListItem>
      </List>
    </div>
  );
};

export default Contact;
