import { storiesOf } from '@storybook/react-native';
import React from 'react';

import UserProfile, { UserItem } from '../../components/User';

const users = [
  {
    name: 'RR Martin',
    checkin: false,
  },
];

storiesOf('User', module)
  .add('default', () => {
    const user = users[0];
    return <UserProfile checkin={user.checkin} name={user.name}></UserProfile>;
  })
  .add('User checkedIn', () => {
    const user = users[0];
    return <UserProfile checkin={true} name={user.name}></UserProfile>;
  })
  .add('User out', () => {
    const user = users[0];
    return <UserProfile checkin={false} name={user.name}></UserProfile>;
  })
  .add('User as list item', () => {
    const user = users[0];
    return <UserItem checkin={false} name={user.name}></UserItem>;
  });
