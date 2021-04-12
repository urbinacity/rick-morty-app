import React from 'react';
import { useParams } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import CharacterDetails from '../components/CharacterDetails';
import LoadingText from '../components/LoadingText';
import { useQuery } from 'urql';

const CharacterQuery = `
query($id: ID!) {
  character(id: $id) {
    id,
    name,
    status,
    species,
    gender,
    origin {
      name,
    }
    location {
      name,
    }
    image,
  }
}
`;

export default function CharacterView() {
  const { key } = useParams();

  const [result] = useQuery({
    query: CharacterQuery,
    variables: { id: key }
  });

  const { data, fetching } = result;
  const character = data ? data.character : {};

  return fetching ? <LoadingText /> : (
    data &&
    <PageContainer
      title={`${character.name}`}
    >
      <CharacterDetails
        character={character}
        loading={fetching}
      />
    </PageContainer>
  );
}
