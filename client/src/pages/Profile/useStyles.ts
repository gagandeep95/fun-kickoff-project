import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(25),
  },
  sidebar: {
    [theme.breakpoints.down('sm')]: {},
  },
}));

export default useStyles;
