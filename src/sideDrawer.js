import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const drawerWidth = 90;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    height: 300,
    marginTop: 100,
    marginLeft:  theme.spacing(2),
    backgroundColor: "#393939",
    borderRadius: 10,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  buttons: {
      height: 100,
      textTransform: 'none',
      color: "#ffffff",
  }
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        elevation={16}
      >
        <Divider />
        <Button 
            className={classes.buttons}
            onClick={()=>{window.scrollTo({
              top: 2000,
              behavior: 'smooth'
            })}}
          >Experience</Button>

        <Divider />
        <Button className={classes.buttons}>Hobbies</Button>
        <Divider />
        <Button className={classes.buttons}>Contacts</Button>
        <Divider />
      </Drawer>
    </div>
  );
}
