import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: 15,
  },
  formContainer: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    padding: theme.spacing(30, 70),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      boxShadow: 'none',
      padding: theme.spacing(5, 15),
    },
  },
  welcome: {
    fontSize: 26,
    marginTop: theme.spacing(5),
    color: '#000000',
    fontWeight: 700,
    textAlign: 'center',
    fontFamily: "'Open Sans'",
  },
  loginLink: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: theme.spacing(10, 0),
  },
}));

export default useStyles;
