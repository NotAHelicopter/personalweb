import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: '#151e3f',
  },
  buts: {
    borderRadius: 20,
    textTransform: 'none',
    marginLeft: 10,
    color : '#d6eadf',
    backgroundColor: '#3083dc',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Portefolio
          </Typography>
          <Button variant="contained" className={classes.buts}>Experience</Button>
          <Button variant="contained" className={classes.buts}>Hobbies</Button>
          <Button variant="contained" className={classes.buts}>CV</Button>
          <Button variant="contained" className={classes.buts}>Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
