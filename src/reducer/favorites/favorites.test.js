import {
  ActionCreator,
  ActionType,
  initialState,
  reducer,
  Operation
} from './favorites';

import MockAdapter from 'axios-mock-adapter';

import createAPI from '../../api/api';

const film = {
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
};

const filmAdapted = {
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
};

const api = createAPI(() => {});

describe(`Action creators work correctly`, () => {
  it(`Action creator for load favorites returns correct action`, () => {
    expect(ActionCreator.loadFavorites([film])).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: [film],
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change favorites by a given value`, () => {
    expect(reducer(initialState, {
      type: ActionType.LOAD_FAVORITES,
      payload: [film],
    })).toEqual([filmAdapted]);
  });
});

describe(`Operation works correctly`, () => {
  it(`load favorites should make a correct api call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadFavorites = Operation.loadFavorites();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return loadFavorites(dispatch, {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: [{fake: true}]
        });
      });
  });
});
