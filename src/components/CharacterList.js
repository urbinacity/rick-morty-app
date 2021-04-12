import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { RoutesPaths } from '../constants';

import { Grid, Card, CardContent, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  media: {
    width: '50%',
    alignSelf: 'center',
  },
});

export default function CharacterList(props) {
  const classes = useStyles();
  const { results } = props.rows;

  return (
    <Grid container spacing={3}>
    {
      results.map((character) => (
        <Grid key={character.id} item xs={12} sm={6}>
          <Card className={classes.root}>
            <img className={classes.media} src={character.image} alt={character.name} />
            <div className={classes.details}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  <Link href={RoutesPaths.CHARACTER_PATH.replace(':key', character.id)}>{ character.name }</Link>
                </Typography>
                <Typography>
                  { character.species }
                </Typography><br/>
                <Typography color="textSecondary">
                  Last known location:
                </Typography>
                <Typography>
                  { character.location.name }
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>
      ))
    }
    </Grid>
  );
}
