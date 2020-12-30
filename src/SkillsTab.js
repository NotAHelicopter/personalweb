import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import FadeInSection from "./fadein";

const useStyles = makeStyles((theme) => ({
    paperAb :{
        backgroundColor: "transparent",
        minWidth: 'flex',
        maxWidth: 300,
        margin: 10,
        padding: 10,
        },
    grid1: {
        marginTop: theme.spacing(2),
    },
    typoLong2: {
        marginTop: theme.spacing(2),
    }
}))


export default function SkillsTab() {

  const classes = useStyles();

  return (
    <FadeInSection>
    <Grid container justify="center" spacing={3} className={classes.grid1}>
        
        <Grid key={1} item>
        <Paper elevation={0} className={classes.paperAb}> 
                <Typography variant='h5'  align="center" className={classes.typoLong}>
                Professional
                </Typography>
                <Typography variant ="subtitle1" className={classes.typoLong2}>
                    ReactJs
                    <p>NextJs</p>
                    <p>ExpressJs</p>
                    <p>Javascript</p>
                    <p>MySQL</p>
                    <p>HTML</p>
                    <p>CSS / CSS3</p>
                    <p>Material-UI</p>
                </Typography>
            </Paper>
        </Grid>
        <Grid key={2} item>
            <Paper elevation={0} className={classes.paperAb}> 
                <Typography variant='h5' className={classes.typoLong}>
                Academic
                </Typography>
                <Typography variant ="subtitle1" className={classes.typoLong2}>
                    C
                    <p>Java</p>
                    <p>Python</p>
                    <p>PHP</p>
                    <p>PostgreSQL</p>
                    <p>Python</p>
                </Typography>
            </Paper>
        </Grid>
    </Grid>
    </FadeInSection>
  );

}
