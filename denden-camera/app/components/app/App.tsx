/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { createHttpClient } from 'mst-gql';
import { RootStore, StoreContext } from '../src/models';
import Books from './Screens/Books';
import User from './Screens/User';
import Camera from './Camera';
import ImagePickerComponent from './Screens/ImagePicker';

const rootStore = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient('http://localhost:4000/graphql'),
});

const App = () => {
  return (
    <StoreContext.Provider value={rootStore}>
      <ImagePickerComponent></ImagePickerComponent>
    </StoreContext.Provider>
  );
};

global.store = rootStore; // eslint-disable-line

export default App;
