import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';

import useStyles from './useStyles';
function Sidebar(): JSX.Element {
  const classes = useStyles();

  return (
    <Stack className={classes.main} alignItems="center">
      <Button component={Link} to="/edit-profile">
        Edit Profile
      </Button>

      <Button component={Link} to="/profile">
        Profile Photo
      </Button>
      <Button component={Link} to="/availability">
        Availability
      </Button>
      <Button component={Link} to="/Payment">
        Payment
      </Button>
      <Button component={Link} to="/availability">
        Security
      </Button>
      <Button component={Link} to="/Payment">
        Settings
      </Button>
    </Stack>
  );
}

export default Sidebar;
