import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
    },
  },
  container: {
    position: 'absolute',
    top: '70px',
    right: '0',
    margin: '0 20px',
    padding: '10px 20px',
    // minWidth: 'calc(100% - 40px)',
    minHeight: '300px',
    maxHeight: 'calc(100vh - 100px)',
    width: '300px',
    overflow: 'auto',
    '&.hidden': {
      visibility: 'hidden',
    }
  },
  option: {
    '&.selected': {
      backgroundColor: fade(theme.palette.common.black, 0.05),
    }
  }
}));

export function SearchInput(props) {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder='Search'
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onFocus={props.toggleResults}
        onBlur={props.toggleResults}
        onChange={props.handleChange}
        onKeyUp={props.handleKeyUp}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
}

export function SearchResults(props) {
  const classes = useStyles();

  return (
    <Paper className={`${classes.container} ${props.visible ? 'visible' : 'hidden'}`}>
      {
        props.data.map((option, index) => (
          <Typography
            key={option.id}
            className={`${classes.option} ${index === props.selected ? ' selected' : ''}`}
            gutterBottom
            variant='h6'
            component='h2'
            onClick={props.handleClick}
            onMouseEnter={(event) => props.handleSelect(event, index)}
          >
            {option.name}
          </Typography>
        ))
      }
    </Paper>
  );
}
