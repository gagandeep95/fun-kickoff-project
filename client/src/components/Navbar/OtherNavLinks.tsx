import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import AuthMenu from '../AuthMenu/AuthMenu';

const AuthNavLinks = (): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Button className={classes.navLinks} variant="text">
        Become a sitter
      </Button>
      <Button className={classes.navLinks} variant="text">
        Notifications
      </Button>
      <Button component={Link} to="/bookings" variant="text" className={classes.navLinks}>
        Bookings
      </Button>
      <Button className={classes.navLinks} variant="text">
        Messages*
      </Button>
      <AuthMenu />
    </>
  );
};

export default AuthNavLinks;
