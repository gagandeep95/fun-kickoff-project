import Grid from '@material-ui/core/Grid';
import Stack from '@mui/material/Stack';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles';
import { Link } from 'react-router-dom';

const Navbar = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.navbarBanner}>
        <img src="https://res.cloudinary.com/dz8xmxmly/image/upload/v1636475121/fun_kickoff_project/logo_ddnmxs.png" />
      </Grid>
      <Stack direction="row" spacing={1} className={classes.links}>
        <Button className={classes.sitterLink} variant="text">
          BECOME A SITTER
        </Button>
        <Link to="/login" className={classes.navLink}>
          <Button color="primary" variant="outlined">
            LOGIN
          </Button>
        </Link>
        <Link to="/signup" className={classes.navLink}>
          <Button color="primary" variant="contained">
            SIGNUP
          </Button>
        </Link>
      </Stack>
    </Grid>
  );
};

export default Navbar;
