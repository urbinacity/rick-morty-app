import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { RoutesPaths } from '../constants';
import { Search } from '../containers/Search';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '64px',
  },
  toolbar: {
    minHeight: '64px',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
}));

function Menu() {
  const classes = useStyles();

  return <React.Fragment>
    <Typography color="inherit" noWrap className={classes.title}>
      <Button color="inherit" href={RoutesPaths.HOME_PATH}>Home</Button>
    </Typography>
  </React.Fragment>
}

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Menu />
          <Search />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
