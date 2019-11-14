import React from 'react';

import SB from './storybook';
import App from './app/App';
import Config from 'react-native-config';

import Compos from 'components';

export default () => {
  console.log(Compos);
  if (Config.IS_STORYBOOK === 'true') return <SB></SB>;
  return <App></App>;
};
