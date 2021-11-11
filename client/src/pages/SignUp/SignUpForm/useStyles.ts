import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    margin: theme.spacing(5, 0),
  },
  label: {
    fontSize: 19,
    color: 'rgb(0,0,0,0.4)',
    paddingLeft: theme.spacing(2.5),
  },
  inputs: {
    marginTop: theme.spacing(1),
    height: '2rem',
    padding: theme.spacing(2.5),
  },
  forgot: {
    paddingRight: theme.spacing(5),
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: theme.spacing(5),
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(15),
    fontSize: 16,
    fontWeight: 'bold',
  },
}));

export default useStyles;
