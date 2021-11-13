import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import Sidebar from '../../components/Profile/Sidebar';
import { useState } from 'react';
import ProfilePhoto from '../../components/Profile/ProfilePhoto';
import EditProfile from '../../components/Profile/EditProfile';
import Availability from '../../components/Profile/Availability';
import Payment from '../../components/Profile/Payment';
import Security from '../../components/Profile/Security';
import Settings from '../../components/Profile/Setiings';

function Profile(): JSX.Element {
  const classes = useStyles();
  const [pathName, setPathName] = useState('profile');

  const updatePathName = (name: string): void => {
    setPathName(name);
  };

  let component: JSX.Element;
  switch (pathName) {
    case 'profile':
      component = <ProfilePhoto />;
      break;
    case 'edit-profile':
      component = <EditProfile />;
      break;
    case 'availability':
      component = <Availability />;
      break;
    case 'security':
      component = <Security />;
      break;
    case 'payment':
      component = <Payment />;
      break;
    case 'settings':
      component = <Settings />;
      break;
    default:
      component = <h1>hello</h1>;
  }
  return (
    <Grid container className={classes.root}>
      <Grid xs={12} sm={3} item className={classes.sidebar}>
        <Sidebar updatePathName={updatePathName} />
      </Grid>
      <Grid xs={12} item sm={8}>
        {/* Main Content */}
        {component}
      </Grid>
    </Grid>
  );
}

export default Profile;
