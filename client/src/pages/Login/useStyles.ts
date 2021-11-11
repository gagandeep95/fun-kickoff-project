import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    margin: theme.spacing(10),
    padding: theme.spacing(30, 70),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      boxShadow: 'none',
      padding: theme.spacing(5, 15),
    },
  },
  welcome: {
    fontSize: 26,
    color: '#000000',
    fontWeight: 700,
    paddingTop: theme.spacing(15),
    fontFamily: "'Open Sans'",
    textAlign: 'center',
  },
}));

export default useStyles;
