import React from 'react';
import MovieNav from './movie-nav.jsx';
import renderer from 'react-test-renderer';
import {Tabs} from '../../utils';

it(`Components MovieNav renders correctly`, () => {
  const props = {
    activeTab: Tabs.OVERVIEW,
    onChangeTab: () => {}
  };

  const tree = renderer
    .create(<MovieNav {...props}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
