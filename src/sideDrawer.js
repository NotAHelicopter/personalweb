import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const drawerWidth = 90;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 10,
  },
  drawerPaper: {
    width: drawerWidth,
    height: 400,
    marginTop: theme.spacing(40),
    marginLeft:  theme.spacing(2),
    backgroundColor: "#307473",
    opacity: 0.7,
  },
  buttons: {
      height: 100,
      textTransform: 'none',
      color: "#ffffff",
  },
  menuButton: {
    top: theme.spacing(50),
    left: theme.spacing(2),
    position: "fixed",
  },
  hide: {
    display: 'none',
  },
}));




export default function PermanentDrawerLeft() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <ArrowForwardIosIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="persistant"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        onBackdropClick={handleDrawerClose}
      >
        <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
        </IconButton>
        <Divider />
        <Button className={classes.buttons}
          onClick={()=>{
            const elem = document.getElementById("edu");
            elem.scrollIntoView();
            handleDrawerClose();
          }}
          >Education</Button>
        <Divider />
        <Button 
            className={classes.buttons}
            onClick={()=> {
              const elem = document.getElementById("exp");
              elem.scrollIntoView();
              handleDrawerClose();
            }}
          >Experience</Button>

        <Divider />
        <Button className={classes.buttons}
          onClick={()=>{
            const elem = document.getElementById("hob");
            elem.scrollIntoView();
            handleDrawerClose();
          }}
          >Hobbies</Button>
        <Divider />
        <Button className={classes.buttons}
          onClick={()=>{
            const elem = document.getElementById("cont");
            elem.scrollIntoView();
            handleDrawerClose();
          }}
          >Contacts</Button>
        <Divider />
      </Drawer>
    </div>
  );
}
