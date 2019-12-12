import React from 'react';
import {ScrollView, View, Text, TextInput} from 'react-native';
import {createHttpClient} from 'mst-gql';
import {observer} from 'mobx-react';
import {RootStore, StoreContext} from './src/models';

import {useQuery} from './src/models';

const rootStore = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient('http://localhost:4000/graphql'),
});

// @ts-ignore.
global.store = rootStore;

const App = () => {
  return (
    <StoreContext.Provider value={rootStore}>
      <Main></Main>
    </StoreContext.Provider>
  );
};

const Main = observer(() => {
  const {loading, data, error} = useQuery(store => store.retrieveComments());

  if (loading) {
    return <Text>Loading</Text>;
  }

  if (error) {
    return <Text>error.messages</Text>;
  }

  return (
    <ScrollView>
      {data?.comments.map((comment, i) => (
        <Reply key={i} comment={comment}></Reply>
      ))}
      <View style={{padding: 2}}>
        <TextInput
          style={{
            marginBottom: 5,
            padding: 2,
            borderColor: '#0fafff',
            borderStyle: 'solid',
            borderWidth: 1,
          }}></TextInput>
        <TextInput
          style={{
            borderColor: '#ffafff',
            borderStyle: 'solid',
            borderWidth: 1,
          }}></TextInput>
      </View>
    </ScrollView>
  );
});

const Reply = props => {
  const {id, message, replyTo} = props.comment;
  return (
    <View
      style={{
        margin: 5,
        padding: 2,
        borderColor: '#999',
        borderStyle: 'solid',
        borderWidth: 1,
      }}>
      {replyTo ? (
        <View style={{backgroundColor: '#eee'}}>
          <Text>
            <Text style={{color: '#ABC'}}>{replyTo.id}</Text>
            <Text> </Text>
            <Text style={{color: '#888'}}>{replyTo.message}</Text>
          </Text>
        </View>
      ) : null}
      <Text>{id}</Text>
      <Text>{message}</Text>
    </View>
  );
};

export default App;
