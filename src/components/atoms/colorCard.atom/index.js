import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyle = makeStyles((theme) => ({
  colorCard: {
    width: 200,
    margin: theme.spacing(1),
    textAlign: 'center',
  },
}));
export function ColorCardAtom({ colorDetail }) {
  const classes = useStyle();
  return (
    <Paper
      elevation={3}
      className={classes.colorCard}
      style={{
        height: Math.floor(Math.random() * 100 + 200),
        backgroundColor: colorDetail.hex,
      }}
    >
      <Grid>
        <Typography variant={'h5'}>{colorDetail.name}</Typography>
        <Typography variant={'subtitle1'}>{colorDetail.hex}</Typography>
      </Grid>
    </Paper>
  );
}
