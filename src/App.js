import pers1 from './pers1.png';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useEffect, useState } from 'react';
import ListAltIcon from '@material-ui/icons/ListAlt';
import FadeInSection from "./fadein";

const useStyles = makeStyles((theme) => ({
  paper :{
    backgroundColor: "#016090",
    minWidth: 1300,
    maxWidth: 1300,
    margin: 10,
    padding: 10,
    minHeight: '404px',
    },
    paperAb :{
      backgroundColor: "#016090",
      minWidth: 'flex',
      maxWidth: 600,
      margin: 10,
      padding: 10,
      minHeight: '404px',
      },
  paper2: {
    backgroundColor: "#030027",
    minWidth: 1300,
    maxWidth: 1300,
    margin: 20,
    padding: 10,
    minHeight: '404px',
  },
  typoLong:{
    marginTop: 10,
    color: "white",
  },
  typoLong2: {
    margin: 10,
    textAlign: 'left',
    color:"white",
  },
  backTop: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    '&:hover': {
      backgroundColor: 'transparent',
    }
  },
  fabBut: {
    backgroundColor: 'transparent',
  },
  downCV: {
    position: 'fixed',
    top: theme.spacing(2),
    left: theme.spacing(3),
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }
}));


function App() {
  const classes = useStyles();

  const [scroll, setScroll] = useState(0)
  
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY < 100;
        if (scrollCheck !== scroll) {
          setScroll(scrollCheck)
        }
    });
  })

  return (
    <div className="App">
        <Grid container spacing={2}>
          <Grid container justify="center" item spacing={2}>
              <Grid key={1} item>
                <FadeInSection>
                <div className="App-header">
                  <img src={pers1} className="App-pers" alt="logo" />
                  <div className="app-name">
                    Francisco Almeida
                    <p className="App-desc">
                      BSc Finalist in Computer Engineering
                    </p>
                  </div>
                </div>
                </FadeInSection>

              </Grid>
              <Grid key={2} item>
               <FadeInSection>
                <Paper elevation={24} className={classes.paperAb}> 
                  <Typography variant='h3' className={classes.typoLong}>
                    About me
                  </Typography>
                  <Typography variant ="subtitle1" className={classes.typoLong2}>
                      I’m a 24 year old student, currently in the last year of my Computer Science bachelor’s degree at Instituto Superior Técnico.
                      I greatly enjoy programming due to its similarities to puzzle and problem solving.
                    <p> 
                      I am great at working together in team environments and
                      always strive to learn more and improve, as an aspiring Computer Engineer and as a person.
                    </p>
                    <p>
                      I chose to create this small online portfolio as a way to showcase my experience with some technologies such as React, Node and Git.
                    </p>
                  </Typography>
                </Paper>
                </FadeInSection>

              </Grid>
          </Grid>
          <Grid container justify="center" item>
            <FadeInSection>
              <Paper elevation={24} className={classes.paper}>
                <Typography variant='h3' className={classes.typoLong}>
                  Education
                </Typography>
                <Typography variant ="subtitle1" className={classes.typoLong2}>
                  I had the chance to participate in a summer internship in which my project was to build 
                  a recruitment platform, with any technology I wanted. 
                  I'll delve more into it later on.
                  <p>
                    Over the years I have worked in retail multiple times, which has helped with keeping grounded and in touch with reality.
                  </p>
                  <p>
                    On my spare time, I previously worked with a translation company, helping translate and transcribe from english to portuguese, and vice versa.
                  </p>
                </Typography>
              </Paper>
            </FadeInSection>
          <FadeInSection>
            <Paper elevation={24} className={classes.paper2}>
              <Typography variant='h3' className={classes.typoLong}>
                  Experience
              </Typography>
              <Typography variant="h6" className={classes.typoLong2}>
                Programming languages and technologies
              </Typography>
              <Typography variant="subtitle1" className={classes.typoLong2}>
                I have previously coded in C, Java, Python, HTML, CSS, PHP, MySQL
                  and have experience using NodeJs, OpenGL, Bash, and Git as well.
              </Typography>
              <Typography variant="h6" className={classes.typoLong2}>
                Summer Internship at EDUdigital
              </Typography>
              <Typography variant="subtitle1" className={classes.typoLong2}>
                I had the opportunity to participate in a summer internship under EDUdigital, in which I was given the chance to bla bla bla
              </Typography>
              <Typography variant="h6" className={classes.typoLong2}>
                Retail work
              </Typography>
              <Typography variant="subtitle1" className={classes.typoLong2}>
                I have worked in retail in several occasions, which has contributed to
                the general improvement of my soft skills, adaptability and reaction
                to unknown scenarios, as well as being involved in a teamwork environment
              </Typography>
            </Paper>
          </FadeInSection>
          </Grid>
          <Grid container justify="center" item spacing={5}>
            <FadeInSection>
              <Paper elevation={24} className={classes.paper}>
                <Typography variant='h3' className={classes.typoLong}>
                  Contact info
                </Typography>
                <Typography variant ="subtitle1" className={classes.typoLong2}>
                  I had the chance to participate in a summer internship in which my project was to build 
                  a recruitment platform, with any technology I wanted. 
                  I'll delve more into it later on.
                  <p>
                    Over the years I have worked in retail multiple times, which has helped with keeping grounded and in touch with reality.
                  </p>
                  <p>
                    On my spare time, I previously worked with a translation company, helping translate and transcribe from english to portuguese, and vice versa.
                  </p>
                </Typography>
              </Paper>
            </FadeInSection>
          </Grid>
        </Grid>
        { window.scrollY > 100 && (

          <Button className={classes.backTop}
          onClick={()=>{window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })}}
          disableRipple
          disableFocusRipple
          >
            <Fab size="large" className={classes.fabBut}>
              <KeyboardArrowUpIcon />
            </Fab>
          </Button>        
        )}
        <Button className={classes.downCV}
          disableRipple
          disableFocusRipple
        >
            <Fab color="secondary" size="large">
              {<ListAltIcon/>} CV
            </Fab>
        </Button>
    </div>
  );
}

export default App;
