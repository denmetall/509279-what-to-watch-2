import React from 'react';
import MovieNav from './movie-nav.jsx';
import renderer from 'react-test-renderer';
import {Tabs} from '../../utils';

it(`Components MovieNav renders correctly`, () => {
  const tree = renderer
    .create(<MovieNav
      activeTab={Tabs.OVERVIEW}
      onChangeTab={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
