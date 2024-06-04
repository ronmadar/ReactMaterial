import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FormIcon from '@mui/icons-material/ThreeSixty';

interface NavbarProps { 
  role?: string; 
}

const Navbar: React.FC<NavbarProps> = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawerContent = (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem button component={Link} href="/" tabIndex={0}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} href="/services" tabIndex={1}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component={Link} href="/products" tabIndex={2}>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button component={Link} href="/contact" tabIndex={3}>
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={Link} href="/form" tabIndex={4}>
          <ListItemIcon>
            <FormIcon />
          </ListItemIcon>
          <ListItemText primary="Form" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: 'flex', md: 'none' }  }} // Display hamburger menu on all screens
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            My Material App
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link href="/" color="inherit" underline="none" >
              Home
            </Link>
            <Link href="/services" color="inherit" underline="none" sx={{ ml: 2 }}>
              Services
            </Link>
            <Link href="/products" color="inherit" underline="none" sx={{ ml: 2 }}>
              Products
            </Link>
            <Link href="/contact" color="inherit" underline="none" sx={{ ml: 2 }}>
              Contact
            </Link>
            <Link href="/form" color="inherit" underline="none" sx={{ ml: 2 }}>
              Form
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
