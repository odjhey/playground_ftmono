/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import App from '../app/App';

describe('App', () => {
  it('App renders correctly', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
