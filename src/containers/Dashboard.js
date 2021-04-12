import React from 'react';
import PageContainer from '../components/PageContainer';
import CharacterList from '../components/CharacterList';
import LoadingText from '../components/LoadingText';
import { useQuery } from 'urql';

const CharactersQuery = `
query($page: Int) {
  characters(page: $page) {
    results {
      id,
      name,
      species,
      location {
        name,
      }
      image,
    }
  }
}
`;

export default function Dashboard() {
  const [result] = useQuery({
    query: CharactersQuery,
  });

  const { data, fetching } = result;


  return fetching ? <LoadingText /> : (
    data &&
    <PageContainer
      title={'Rick and Morty characters'}
    >
      <CharacterList
        rows={data.characters}
        loading={fetching}
      />
    </PageContainer>
  );
}
