import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    alignItems: 'center',
    backgroundColor: '#272D2D',
    blockSize: '65px',
  },
  buts: {
    borderRadius: 5,
    textTransform: 'none',
    marginLeft: 10, /*fix for mobile */
    color : '#000000',
    backgroundColor: '#ffffff',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Button variant="contained" className={classes.buts}>Experience</Button>
          <Button variant="contained" className={classes.buts}>Hobbies</Button>
          <Button variant="contained" className={classes.buts}>CV</Button>
          <Button variant="contained" className={classes.buts}>Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
