import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import register from '../../helpers/APICalls/register';
import SignUpForm from './SignUpForm/SignUpForm';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { Link } from 'react-router-dom';

export default function Register(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { username, email, password }: { email: string; password: string; username: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string; username: string }>,
  ) => {
    register(username, email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid container component="main">
      <CssBaseline />
      <Grid xs={12}>
        <Grid item xs={12}>
          <Box className={classes.authWrapper}>
            <Box width="100%" className={classes.formContainer} maxWidth={650} p={2} alignSelf="center">
              <Grid container>
                <Grid item xs>
                  <Typography className={classes.welcome} component="h1" variant="h5">
                    Create an account
                  </Typography>
                </Grid>
              </Grid>
              <SignUpForm handleSubmit={handleSubmit} />
              <Typography className={classes.loginLink}>
                Already a member?
                <Link to="/login" style={{ color: '#f14140' }}>
                  Login
                </Link>
              </Typography>
            </Box>
            <Box p={1} alignSelf="center" />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
