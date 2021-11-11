import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Navbar from '../../components/Navbar/Navbar';
function Bookings(): JSX.Element {
  return (
    <Grid container>
      <Navbar />
      <Typography variant="h3"> Welcome to Booking Page</Typography>
    </Grid>
  );
}

export default Bookings;
