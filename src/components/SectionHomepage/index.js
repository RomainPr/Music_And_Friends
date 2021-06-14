import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import './styles.scss';

const SectionHomepage = () => (
  <div>
    <Container maxWidth="lg">
      <Typography component="div" />
    </Container>

    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Paper>xs=6</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>xs=6</Paper>
      </Grid>
    </Grid>
  </div>
);

export default SectionHomepage;
