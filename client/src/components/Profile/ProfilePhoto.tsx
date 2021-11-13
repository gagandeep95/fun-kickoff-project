import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const ProfilePhoto = (): JSX.Element => {
  return (
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
      <Avatar alt="Profile Image" />
      <Typography>Be sure to upload photo that clearly show your face</Typography>
      <Button variant="outlined" color="primary">
        Upload photo from your device
      </Button>
    </Box>
  );
};

export default ProfilePhoto;
