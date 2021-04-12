export const RoutesPaths = {
  CHARACTER_PATH: '/character/:key',
  HOME_PATH: '/dashboard',
};

export const ApiPaths = {
};

const RICK_AND_MORTY_API = "https://rickandmortyapi.com/graphql";

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || RICK_AND_MORTY_API;
