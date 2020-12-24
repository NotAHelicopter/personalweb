import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ExtensionIcon from '@material-ui/icons/Extension';
import SmartphoneIcon from '@material-ui/icons/Smartphone';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    alignItems: 'center',
    backgroundColor: '#030027',
    blockSize: '65px',
    opacity:1,
  },
  buts: {
    borderRadius: 5,
    textTransform: 'none',
    marginLeft: 15, /*fix for mobile */
    color : '#ffffff',
    backgroundColor: '#016090',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar>

          <Button variant="contained" 
            className={classes.buts}
            startIcon={<AssessmentIcon/>}
            onClick={()=>{window.scrollTo({
              top: 2000,
              behavior: 'smooth'
            })}}
          >Experience</Button>

          <Button variant="contained" 
            className={classes.buts}
            startIcon={<ExtensionIcon/>}
            >Hobbies</Button>

          <Button variant="contained" 
            className={classes.buts}
            startIcon={<SmartphoneIcon/>}
          >Contact</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}
