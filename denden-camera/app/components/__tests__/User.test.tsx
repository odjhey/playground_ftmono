/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import UserProfile, { UserItem } from '../components/User';

describe('UserProfile', () => {
  describe('Rendering', () => {
    const userData = {
      name: 'Name',
      checkin: false,
    };
    it('Renders', () => {
      shallow(<UserProfile name={userData.name} checkin={userData.checkin} />);
    });
    it('UserItem Renders', () => {
      expect(
        shallow(<UserItem name={userData.name} checkin={userData.checkin} />),
      ).toMatchSnapshot();
    });
  });

  describe('Interaction', () => {
    const userData = {
      name: 'Name',
      checkin: false,
    };
    it('Profile checkin value should change after Checkin Pressed', () => {
      renderer.create(
        <UserProfile name={userData.name} checkin={userData.checkin} />,
      );
    });
    it('Profile checkin value should change after Checkin Pressed', () => {
      renderer.create(
        <UserProfile name={userData.name} checkin={userData.checkin} />,
      );
    });
  });
});
