import React, { useState } from 'react';
import { useQuery } from 'urql';
import { SearchInput, SearchResults } from '../components/SearchComponents';
import { RoutesPaths } from '../constants';

const CharactersQuery = `
query ($name: String!) {
  characters(page: 0, filter: { name: $name }) {
    results {
      id,
      name,
    }
  }
}
`;

export function Search() {
  const [selection, setSelection] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [name, setName] = useState('');

  const [result] = useQuery({
    query: CharactersQuery,
    variables: { name, },
  });

  const { data: { characters } = {} } = result;
  const results = characters ? characters.results : [];

  const handleKeyUp = (event) => {
    if(['Enter', 'ArrowUp', 'ArrowDown'].includes(event.key)){
      event.preventDefault();

      if(event.key === 'ArrowUp') {
        setSelection(Math.max(0, selection - 1));
      } else if (event.key === 'ArrowDown') {
        setSelection(Math.min(results.length - 1, selection + 1));
      } else {
        confirmSelection();
      }
    }
  };

  const handleOptionClick = (event, index) => {
    event.preventDefault();
    setSelection(index);
  }

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const toggleResults = (event) => {
    event.preventDefault();

    setTimeout(() => {
      setShowResults(!showResults);
    }, 200);
  }

  const confirmSelection = (event) => {
    if (event) {
      event.preventDefault();
    }

    if(results[selection]) {
      window.location.assign(
        window.location.origin + RoutesPaths.CHARACTER_PATH.replace(':key', results[selection].id)
      );
    }
  }

  return (
    <React.Fragment>
      <SearchInput toggleResults={toggleResults} handleChange={handleChange} handleKeyUp={handleKeyUp} />
      <SearchResults visible={showResults} data={results} handleSelect={handleOptionClick} handleClick={confirmSelection} selected={selection} />
    </React.Fragment>
  );
}
