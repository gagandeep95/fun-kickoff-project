import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from '../useStyles';
import Sidebar from '../../../components/ProfileSidebar/Sidebar';
import Avatar from '@material-ui/core/Avatar';

function Profile(): JSX.Element {
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
          justifyContent="space-evenly"
          flexDirection="column"
          alignItems="center"
          display="flex"
        >
          <Typography variant="h4">Profile Photo</Typography>
          <Avatar alt="Profile Image" src={`https://robohash.org.png`} />
          <Typography>Be sure to upload photo that clearly show your face</Typography>
          <Button variant="outlined" color="primary">
            Upload photo from your device
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Profile;
