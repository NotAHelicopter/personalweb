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
        maxWidth: 350,
        margin: 10,
        padding: 10,
        },
    grid1: {
        marginTop: theme.spacing(0.5),
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(2),
            marginLeft: theme.spacing(-3.5),
          }
    },
    typoLong2: {
        marginTop: theme.spacing(2),
        fontSize: 13,
    },
    typoLong: {
        fontSize: 20,
    }
}))


export default function GradeTab() {

  const classes = useStyles();

  return (
    <FadeInSection>
    <Grid container justify="center" spacing={5}  className={classes.grid1} md={12}>
        <Grid key={1} item md={3}>
        <Paper elevation={0} className={classes.paperAb}> 
                <Typography variant='body1'  align="center" className={classes.typoLong}>
                Subject
                </Typography>
                <Typography variant ="subtitle1" className={classes.typoLong2}>
                    Machine-Person Interfaces
                    <p>Graphical Computing</p>
                    <p>System Modeling and Analysis</p>
                </Typography>
            </Paper>
        </Grid>   
        <Grid key={2} item md={3}>
            <Paper elevation={0} className={classes.paperAb}> 
                <Typography variant='body1' align="center" className={classes.typoLong}>
                    Grade
                </Typography>
                <Typography variant ="subtitle1" className={classes.typoLong2}>
                    14/20
                    <p>15/20</p>
                    <p>14/20</p>
                </Typography>
            </Paper>
        </Grid>
    </Grid>
    </FadeInSection>
  );

}
