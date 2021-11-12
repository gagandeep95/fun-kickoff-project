import Grid from '@material-ui/core/Grid';
import Sidebar from '../../../components/ProfileSidebar/Sidebar';
import Box from '@material-ui/core/Box';
import useStyles from '../useStyles';
import Typography from '@material-ui/core/Typography';

const EditProfile = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid xs={12} sm={3} item className={classes.sidebar}>
        <Sidebar />
      </Grid>
      <Grid xs={12} sm={8}>
        <Box
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
          padding="20px 0px"
          minHeight="250px"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          display="flex"
          textAlign="center"
        >
          <Typography variant="h4">Edit Profile Page... Coming Soon</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EditProfile;
