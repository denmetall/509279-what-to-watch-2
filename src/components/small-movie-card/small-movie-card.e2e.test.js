import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from "./small-movie-card.jsx";

Enzyme.configure({adapter: new Adapter()});

describe(`MovieCard group`, () => {
  const clickHandler = jest.fn();
  const mouseOverHendler = jest.fn();

  const smallMovieCard = shallow(<SmallMovieCard
    film={{}}
    onClickTitleHandler={clickHandler}
    onMouseOverCard={mouseOverHendler}
  />);

  it(`SmallMovieCard click on start title is correct`, () => {

    const clickTitle = smallMovieCard.find(`.small-movie-card__link`);
    clickTitle.simulate(`click`);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it(`SmallMovieCard hover is correct`, () => {

    const hoverCard = smallMovieCard.find(`.small-movie-card`);
    hoverCard.simulate(`mouseOver`);

    expect(mouseOverHendler).toHaveBeenCalledTimes(1);
  });
});


