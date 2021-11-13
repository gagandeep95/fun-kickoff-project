import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import useStyles from './useStyles';
import { links } from './links';

interface Props {
  updatePathName: (arg: string) => void;
}

const Sidebar = ({ updatePathName }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Stack className={classes.main} alignItems="center">
      {links.map((link, i) => (
        <Button
          key={i}
          component={NavLink}
          onClick={() => updatePathName(`${link.pathName}`)}
          activeClassName={classes.activeLink}
          to={`/${link.pathName}`}
        >
          {link.text}
        </Button>
      ))}
    </Stack>
  );
};

export default Sidebar;
