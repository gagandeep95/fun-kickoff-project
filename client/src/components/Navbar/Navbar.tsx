import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import OtherNavLinks from './OtherNavLinks';
import AuthNavLinks from './AuthNavLinks';

const Navbar = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Grid container className={classes.root}>
      <Grid xs={5} md={3} className={classes.navbarBanner}>
        <img
          src="https://res.cloudinary.com/dz8xmxmly/image/upload/v1636475121/fun_kickoff_project/logo_ddnmxs.png"
          alt="logo"
        />
      </Grid>
      <Grid xs={6} item className={classes.menu}>
        <IconButton edge="start" color="inherit" onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </IconButton>
      </Grid>
      <Grid xs={12} md={9} item>
        <Box
          display={`${isOpen ? 'flex' : 'none'}`}
          flexDirection={{ xs: 'column', sm: 'row' }}
          className={classes.links}
        >
          {!loggedInUser ? <AuthNavLinks /> : <OtherNavLinks />}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Navbar;
