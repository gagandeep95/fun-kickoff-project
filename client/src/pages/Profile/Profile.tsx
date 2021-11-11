import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Navbar from '../../components/Navbar/Navbar';
function Profile(): JSX.Element {
  return (
    <Grid container>
      <Navbar />
      <Typography variant="h3"> Welcome to Profile page</Typography>
    </Grid>
  );
}

export default Profile;
