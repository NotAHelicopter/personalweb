import pers1 from './pers1.png';
import edulogo from './edulogo.png';
import istlogo from './istlogotrans.png';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { useEffect, useState } from 'react';
import ListAltIcon from '@material-ui/icons/ListAlt';
import FadeInSection from "./fadein";
import Divider from '@material-ui/core/Divider';
import SkillsTable from './SkillsTab';
import './first.css';

import CV from './FranciscoAlmeidaCv.pdf'

const useStyles = makeStyles((theme) => ({
  paper :{
    backgroundColor: "transparent",
    minWidth: 'flex',
    maxWidth: 1200,
    margin: 10,
    padding: 10,
    minHeight: '404px',
    marginBottom: theme.spacing(5),
    },
  paperAb :{
      backgroundColor: "transparent",
      minWidth: 'flex',
      maxWidth: 600,
      margin: 10,
      padding: 10,
      minHeight: '404px',
      },
  paperExp: {
    backgroundColor: "transparent",
    minWidth: 'flex',
  },
  paperCont :{
    backgroundColor: "transparent",
    minWidth: 'flex',
    maxWidth: 1200,
    margin: 10,
    padding: 10,
    marginBottom: theme.spacing(5),
  },
  typoLong:{
    marginTop: 10,
    color: "black",
  },
  typoLong2: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
    textAlign: 'left',
    color:"black",
  },
  typoSub: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
    textAlign: 'center',
    color:"black",
  },
  typoSkill: {
    textAlign: 'center',
    color:"black",
    marginTop: theme.spacing(4),
  },
  typoContact: {
    color: "#F9F9F9",
  },
  typoContact2: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
    color:"#F9F9F9",
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
    
  },
  grid1: {
    marginTop: theme.spacing(1),
    backgroundColor: '#F9F9F9',
  },
  grid2: {
    backgroundColor: '#B4E0E2',
  },
  grid3: {
    backgroundColor: '#F9F9F9',
  },
  grid4: {
    backgroundColor: '#B4E0E2',
  },
  grid5: {
    backgroundColor: '#393939',
    maxHeight: 'flex',
  },
  div: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  divCont: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
    backgroundColor: '#ffffff',
  },
  divSkill: {
    marginTop: theme.spacing(2),
    width: "50%",
    marginLeft: theme.spacing(35),
    [theme.breakpoints.down('sm')]: {
      width:"100%",
      marginLeft: theme.spacing(0),
    }
  },
  eduLogo: {
    marginTop: theme.spacing(1),
    backgroundColor: 'transparent',
  },
  linkedin: {
    color: "#ffffff",
    fontSize: 50,
  },
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
      <header className="part-header">
            <div className="part-name">
                Francisco Almeida
                <Divider />
                <p className="part-desc">
                Online Resume
                </p>
            </div>
      </header>
        <Grid container justify="center" spacing={2} className={classes.grid1}>
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
                <Paper elevation={0} className={classes.paperAb}> 
                  <Typography variant='h3' className={classes.typoLong}>
                    About me
                  </Typography>
                  <Divider className={classes.div} />
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
        <Grid id="edu" container justify="center" item className={classes.grid2}>
          <FadeInSection>
            <Paper elevation={0} className={classes.paper}>
              <Typography variant='h3' className={classes.typoLong}>
                Education
              </Typography>
              <Divider className={classes.div} />
              <Typography variant="h5" className={classes.typoSub}>
                    College
              </Typography>
              <div className={classes.eduLogo}>
                  <img src={istlogo} className={classes.eduLogo} height={86} width={344.5} alt="edu" />
              </div>
              <Typography variant="body1" className={classes.typoSub}>
                    Bsc in Computer Engineering
              </Typography>
              <Typography variant ="subtitle1" className={classes.typoLong2}>
                  Instituto Superior Técnico was my college of choice due to its extremely good reputation in teaching and bla bla bla
                  bla bla bla bla and bla bla bla bla bla bla bla and bla bla bla bla bla bla bla and bla bla bla bla bla bla bla and bla bla bla bla bla bla bla and bla bla bla bla bla bla bla
              </Typography>
            </Paper>
          </FadeInSection>
        </Grid>
        <Grid id="exp" container justify="center" item className={classes.grid3}>
          <FadeInSection>
            <Paper elevation={0} className={classes.paper}>
              <Typography  variant='h3' className={classes.typoLong}>
                  Experience
                <Divider className={classes.div} />
              </Typography>
                  <Typography variant="h5" className={classes.typoSub}>
                    Summer Internship at
                  </Typography>
                  <div className={classes.eduLogo}>
                      <img src={edulogo} className={classes.eduLogo} height={50} width={250} alt="edu" />
                  </div>
                  <Paper elevation={0} className={classes.paperExp}>                                    
                    <Typography variant="subtitle1" className={classes.typoLong2}>
                    I had the opportunity to participate in a summer internship under EDUdigital, in which I was given the chance to bla bla bla
                    I had the opportunity to participate in a summer internship under EDUdigital, rtssdstestin which I was given the chance to bla bla bla
                    I had the opportunity to participate in a summer internship under EDUdigital, in which I was given the chance to bla bla bla
                    I had the opportunity to participate in a summer internship under EDUdigital, in which I was given the chance to bla bla bla
                    I had the opportunity to participate in a summer internship under EDUdigital, in which I was given the chance to bla bla bla
                    </Typography>
                  </Paper>
              <Typography variant="h5" className={classes.typoSub}>
                Retail work
              </Typography>
              <Typography variant="subtitle1" className={classes.typoLong2}>
                I have worked in retail in several occasions, which has contributed to
                the general improvement of my soft skills, adaptability and reaction
                to unknown scenarios, as well as being involved in a teamwork environment         
                to unknown scenarios, as well as being involved in a teamwork environment
                to unknown scenarios, as well as being involved in a teamwork environment
                to unknown scenarios, as well as being involved in a teamwork environment
              </Typography>
              <Typography variant="h5"  className={classes.typoSkill}>
                Programming languages and technologies
              </Typography>
              <Typography variant='caption' className={classes.typoLong}>
                Divided between academic and professional experience
                </Typography>
              <Divider className={classes.divSkill} />
              <SkillsTable/>
            </Paper>
          </FadeInSection>
        </Grid>

        <Grid id="hob" container justify="center" item spacing={0} className={classes.grid4}>
          <FadeInSection>
            <Paper elevation={0} className={classes.paper}>
              <Typography variant='h3' className={classes.typoLong}>
                Hobbies
              </Typography>
              <Divider className={classes.div} />
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

        <Grid id="cont" container justify="center" item spacing={0} className={classes.grid5}>
          <FadeInSection>
            <Paper elevation={0} className={classes.paperCont}>
              <Typography variant='h3' className={classes.typoContact}>
                Contact Information
              </Typography>
              <Divider className={classes.divCont} />
              <Typography variant ="h5" className={classes.typoContact2}>
                Get in touch with me
              </Typography>
              <LinkedInIcon className={classes.linkedin} />
                <Link>test</Link>
              <EmailIcon className={classes.linkedin}/>
                <Link className={classes.contLinks}>frpv.almeida@gmail.com</Link>
            </Paper>
          </FadeInSection>
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
          <Link href={CV} download="CV_Francisco_Almeida" underline="none">
            <Fab color="secondary" size="large">
              {<ListAltIcon/>} CV
            </Fab>
          </Link>
        </Button>
    </div>
  );
}

export default App;
