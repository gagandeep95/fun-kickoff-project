import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    minHeight: '60px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      margin: theme.spacing(5, 0),
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
    },
  },
  navbarBanner: {
    margin: theme.spacing(0, 0, 0, 20),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 0, 5, 0),
    },
  },
  links: {
    margin: theme.spacing(0, 20, 0, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 0, 5, 0),
    },
  },
  sitterLink: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  navLink: {
    textDecoration: 'none',
  },
}));

export default useStyles;
