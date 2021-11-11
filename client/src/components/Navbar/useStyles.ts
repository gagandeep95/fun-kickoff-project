import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    minHeight: '60px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(5, 0),
    },
    [theme.breakpoints.up('sm')]: { justifyContent: 'center' },
  },
  navbarBanner: {
    padding: theme.spacing(0, 0, 0, 15),
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 0, 5, 10),
      padding: theme.spacing(0, 0, 0, 0),
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  menu: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  links: {
    justifyContent: 'flex-end',
    margin: theme.spacing(0, 10, 0, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 0, 0, 0),
      justifyContent: 'flex-start',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
  navLinks: {
    fontWeight: 'bold',
    textDecoration: 'underline',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(3, 0, 0, 0),
      justifyContent: 'start',
    },
  },
  bookingLink: {
    color: '#000',
  },
  authNavLinks: {
    textDecoration: 'none',
    margin: theme.spacing(0, 0, 0, 5),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(3, 0, 0, 5),
    },
  },

  title: {
    flexGrow: 1,
  },
}));

export default useStyles;
