import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: theme.spacing(5),
  },
  formContainer: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    margin: theme.spacing(10),
    padding: theme.spacing(14, 70),
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
