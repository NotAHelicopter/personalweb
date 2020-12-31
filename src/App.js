import pers1 from './pers1.png';
import edulogo from './edulogo.png';
import istlogo from './istlogotrans.png';
import logotranscript from './logotranscript.png';

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
import GradeTable from './gradeTable';
import './first.css';

import CV from './FranciscoAlmeidaCv.pdf'

const useStyles = makeStyles((theme) => ({
  paper :{
    backgroundColor: "transparent",
    minWidth: 'flex',
    maxWidth: 1200,
    margin: 10,
    padding: 10,
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
    marginBottom: theme.spacing(5),
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
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    verticalAlign: '-30%',
  },
  linBut: {
    textTransform: 'none',
    color: '#ffffff',
    textDecoration: 'none',
    marginRight: theme.spacing(2),
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
                      I'm a 24 year old student and aspiring frontend / fullstack developer, living in Sintra, Portugal.
                      Currently in the last semester of my Computer Engineering Bachelor's degree at Instituto Superior Técnico.

                    <p> 
                      Programming has always been a passion of mine due to how simillar it feels to puzzle solving and I always strive to find the
                      most efficient solution to a problem. 
                    </p>
                      I greatly enjoy working in team environments as they provide a fantastic growth and learning opportunity, both in terms of
                      personal and professional development.
                    <p>
                      I created this small online resume as a way of showcasing some of my abilities and experience with a few technologies such as
                      ReactJs, and CSS.
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
                    University
              </Typography>
              <div className={classes.eduLogo}>
                  <img src={istlogo} className={classes.eduLogo} height={86} width={344.5} alt="edu" />
              </div>
              <Typography variant="body1" className={classes.typoSub}>
                    Bsc in Computer Engineering
              </Typography>
              <Typography variant ="subtitle1" className={classes.typoLong2}>
                Instituto Superior Técnico was my college of choice due to its extremely good reputation in teaching and amazing professors.
                During my stay at IST I've made great connections with colleagues and gained a generous amount of experience on working under pressure and
                in different fields of computer engineering.
                <p></p>
                Throughout my bachelor's at IST I've completed several projects, from which some of the most interesting were:
                <p>
                Operating Systems : development of a fully functional file system, with multi-threading programming and server-client socket comunication.<br />
                &emsp;This project was extremely interesting to develop as a first contact with multi-threading programming. 
                </p>
                Distributed Systems : development of "Sauron", a camera recognizition based application with client information input and server processing.
                <br />&emsp;Built with Java, using Maven and tested with JUnit.
                <br />&emsp;Client - Server comunication with gRPC
              </Typography>
              <Typography variant="h6" className={classes.typoSub}>
                    Relevant subjects towards fullstack / frontend development
              </Typography>
              <Typography variant='caption' className={classes.typoLong}>
                Subject and respective grade of conclusion
              </Typography>
              <Divider className={classes.divSkill} />
              <GradeTable/>
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
                  <Typography variant="body1" className={classes.typoSub}>
                    July 2020 - September 2020
                  </Typography>
                  <Paper elevation={0} className={classes.paperExp}>                                    
                    <Typography variant="subtitle1" className={classes.typoLong2}>
                    During which I was tasked with solo fullstack development a recruitment application, with "carte blanche" where it came to technologies.<br/>
                    The main objective of this application was to facilitate the recruitment process for EDUdigital.<br/>
                    <br/>Technologies: ReactJs (NextJs and Material-UI), NodeJs (expressJs), MySQL

                    </Typography>
                  </Paper>
              <Typography variant="h5" className={classes.typoSub}>
                Transcription / Translation at
              </Typography>
              <div className={classes.eduLogo}>
                      <img src={logotranscript} className={classes.eduLogo} height={58} width={213} alt="edu" />
              </div>
                <Typography variant="body1" className={classes.typoSub}>
                    November 2019 - April 2020
                </Typography>
              <Typography variant="subtitle1" className={classes.typoLong2}>
                Trying to sharpen my english skills, I decided to apply to a transcription / translating online company. <br/>
                During my time in GoTranscript I performed dozens of transcriptions and translations with my lowest evaluation being a 92%.<br/>
                Eventually, due to the increasing demand in time from university, I had to stop my services at GoTranscript.
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
              <Typography variant ="h5" className={classes.typoSkill}>
                Fitness         
              </Typography>
              <Typography variant="subtitle1" className={classes.typoLong2}>
                Having interests such as computer engineering and programming, I found that having fitness as a hobby was a necessity. <br/>
                After some time it became a strong personal passion and an integral part of my day to day life.
              </Typography>
              <Typography variant ="h5" className={classes.typoSkill}>
                Longboarding         
              </Typography>
              <Typography variant="subtitle1" className={classes.typoLong2}>
                A more recent interest, longboarding is a great hobby that allows me to exercise in a pandemic-friendly manner.
                I find it extremely relaxing and liberating.
              </Typography>
              <Typography variant ="h5" className={classes.typoSkill}>
                DnD         
              </Typography>
              <Typography variant="subtitle1" className={classes.typoLong2}>
                I've been playing DnD for the better part of the last two years, with weekly sessions with a close group of friends.<br/>
                Dnd is an amazing game with huge potential where it comes to sparking creative thought and entertainment.<br/>
                I've both been a Dungeon Master (person responsible for running the game) and a player.
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
                  <Link href="https://www.linkedin.com/in/francisco-almeida-ba61a3183/" className={classes.linBut}>
                    <LinkedInIcon className={classes.linkedin} /> LinkedIn 
                  </Link>
                  <Link href={"mailto: frpv.almeida@gmail.com"} className={classes.linBut}>
                    <EmailIcon className={classes.linkedin}/> Email
                  </Link>
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
