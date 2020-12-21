import pers1 from './pers1.png';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper :{
    backgroundColor: "#ffffff",
    minWidth: 'flex',
    maxWidth: '500px',
    margin: 20,
    padding: 10,
    minHeight: '404px',
    },
  typoLong:{
    marginTop: 10,
  },
  typoLong2: {
    margin: 10,
    textAlign: 'left',
  },
  grid1: {
    marginTop: 10,
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <img src={pers1} className="App-pers" alt="logo" />
        <div>
          Francisco Almeida
          <p className="App-desc">
            BSc Finalist in Computer Engineering
          </p>
        </div>
        <Grid container className={classes.grid1} spacing={2}>
          <Grid container justify="center" spacing={5}>
            <Grid key={1} item>
              <Paper elevation={15} className={classes.paper}> 
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
            </Grid>
            <Grid key={2} item>
              <Paper elevation={15} className={classes.paper}>
                <Typography variant='h3' className={classes.typoLong}>
                  A bit of my experience
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
            </Grid>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
