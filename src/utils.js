import {shape, string, number, arrayOf, bool} from 'prop-types';

const Tabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const BASE_URL_SERVER = `https://htmlacademy-react-2.appspot.com`;

const API = {
  BASE_URL: `https://htmlacademy-react-2.appspot.com/wtw`,
  TIMEOUT: 5000,
  WITH_CREDENTIALS: true
};

const MOVIES_COUNT_DEFAULT = 8;
const MOVIES_COUNT_STEP = 20;

const DEFAULT_FILTER = `All genres`;

const MovieType = shape({
  id: number,
  name: string,
  description: string,
  genre: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: arrayOf(string),
  runTime: number,
  released: number,
  isFavorite: bool,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string
});

const UserType = shape({
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
});

const ReviewType = shape({
  id: number,
  user: shape({
    id: number,
    name: string
  }),
  rating: number,
  comment: string,
  date: string
});

export {
  Tabs,
  DEFAULT_FILTER,
  MOVIES_COUNT_DEFAULT,
  MOVIES_COUNT_STEP,
  API,
  BASE_URL_SERVER,
  MovieType,
  UserType,
  ReviewType
};
