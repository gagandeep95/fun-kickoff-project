import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

const AuthNavLinks = (): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Button component={Link} to="/login" color="primary" className={classes.authNavLinks} variant="outlined">
        Login
      </Button>

      <Button component={Link} to="/signup" color="primary" className={classes.authNavLinks} variant="contained">
        Signup
      </Button>
    </>
  );
};

export default AuthNavLinks;
