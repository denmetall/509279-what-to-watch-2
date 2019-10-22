import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from "./small-movie-card.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`SmallMovieCard click on start title is correct`, () => {
  const clickHandler = jest.fn();

  const welcomeScreen = shallow(<SmallMovieCard
    movieTitle="some title"
    onClickTitleHandler={clickHandler}
  />);

  const clickTitle = welcomeScreen.find(`.small-movie-card__link`);
  clickTitle.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
