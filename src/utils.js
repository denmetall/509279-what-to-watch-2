import {shape, string, number, arrayOf, bool} from 'prop-types';

const Tabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const CommentLength = {
  MIN: 50,
  MAX: 400
};

const MAX_RATING = 5;

const BASE_URL_SERVER = `https://htmlacademy-react-2.appspot.com`;

const API = {
  BASE_URL: `https://htmlacademy-react-2.appspot.com/wtw`,
  TIMEOUT: 5000,
  WITH_CREDENTIALS: true
};

const MoviesCount = {
  DEFAULT: 8,
  STEP: 20
};

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

const Ratings = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5
};

export {
  Tabs,
  DEFAULT_FILTER,
  API,
  BASE_URL_SERVER,
  MovieType,
  UserType,
  ReviewType,
  CommentLength,
  MAX_RATING,
  MoviesCount,
  Ratings
};
