import {reducer, ActionType} from "./films";
import {MoviesCount} from "../../utils";

const initialState = {
  films: [],
  promoMovie: {},
  moviesCounter: MoviesCount.DEFAULT
};

const films = [{
  "name": `Gangs of new york`,
  "poster_image": `https://htmlacademy-react-2.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
  "preview_image": `https://htmlacademy-react-2.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
  "background_image": `https://htmlacademy-react-2.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
  "background_color": `#A6B7AC`,
  "description": `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`,
  "rating": 8.8,
  "scores_count": 370881,
  "director": `Martin Scorsese`,
  "starring": [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`],
  "run_time": 167,
  "genre": `crime`,
  "released": 2002,
  "id": 1,
  "is_favorite": true,
  "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
}];
const filmsAdapted = [{
  "name": `Gangs of new york`,
  "posterImage": `https://htmlacademy-react-2.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
  "previewImage": `https://htmlacademy-react-2.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
  "backgroundImage": `https://htmlacademy-react-2.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
  "backgroundColor": `#A6B7AC`,
  "description": `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`,
  "rating": 8.8,
  "scoresCount": 370881,
  "director": `Martin Scorsese`,
  "starring": [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`],
  "runTime": 167,
  "genre": `crime`,
  "released": 2002,
  "id": 1,
  "isFavorite": true,
  "videoLink": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  "previewVideoLink": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
}];

describe(`films reducer works correctly`, () => {

  it(`Should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`GET_FILMS`, () => {
    const action = {
      type: ActionType.GET_FILMS,
      payload: films,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          films: filmsAdapted,
        }));
  });

  it(`GET_PROMO_MOVIE`, () => {
    const action = {
      type: ActionType.GET_PROMO_MOVIE,
      payload: films[0],
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          promoMovie: filmsAdapted[0],
        }));
  });

  it(`INCREASE_MOVIES_COUNTER`, () => {
    const action = {
      type: ActionType.INCREASE_MOVIES_COUNTER,
      payload: MoviesCount.STEP,
    };

    expect(reducer(initialState, action)).toEqual(
        Object.assign({}, initialState, {
          moviesCounter: MoviesCount.DEFAULT + MoviesCount.STEP,
        }));
  });
});
