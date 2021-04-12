import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  media: {
    maxWidth: "180px",
    verticalAlign: "middle",
  },
}));

const getOptionValue = (value, option) => {
  return value[option];
};

export default function CharacterDetails(props) {
  const classes = useStyles();

  const attributes = {
    'id': {
      'title': 'Number',
    },
    'name': {
      'title': 'Name',
    },
    'status': {
      'title': 'Status',
    },
    'species': {
      'title': 'Species',
    },
    'gender': {
      'title': 'Gender',
    },
    'origin': {
      'title': 'Origin',
      'format': (val) => getOptionValue(val, 'name'),
    },
    'location': {
      'title': 'Location',
      'format': (val) => getOptionValue(val, 'name'),
    },
  };

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {
          Object.entries(attributes).map(([key, val]) => (
            <TableRow key={val.title} className={classes.row}>
              <TableCell>{ val.title }</TableCell>
              <TableCell>{ val.format ? val.format(props.character[key]) : props.character[key] }</TableCell>
            </TableRow>
          ))
        }
        <TableRow key={'image'} className={classes.row}>
          <TableCell>Avatar</TableCell>
          <TableCell><img className={classes.media} src={props.character.image} alt={props.character.name} /></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
