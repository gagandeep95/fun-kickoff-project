import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
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
  loginTypo: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: theme.spacing(10, 0),
  },
  loginLink: {
    color: '#f14140',
  },
}));

export default useStyles;
