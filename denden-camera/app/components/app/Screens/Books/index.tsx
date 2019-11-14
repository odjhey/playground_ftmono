import React from 'react';

import { View, FlatList, ActivityIndicator } from 'react-native';
import { useQuery } from '../../../src/models/reactUtils';
import { ListItem, Button, Text } from 'react-native-elements';
import { Book, BooksList } from '../../../components/Books';

import { observer } from 'mobx-react';

const BookWithData = observer(props => {
  const { loading, store, data, setQuery } = useQuery();
  const { author, title, checkin, id } = props;

  return (
    <Book
      author={author}
      title={title}
      checkin={checkin}
      loading={loading}
      deletable={true}
      onDelete={() => {
        setQuery(store.mutateDeleteBook({ id: id }));
      }}></Book>
  );
});

const BookListWithData = observer(() => {
  const { loading, store, data, setQuery } = useQuery();

  if (loading) {
    return <ActivityIndicator></ActivityIndicator>;
  }

  if (store.vfilteredBooks('').length < 1) {
    return (
      <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
        <Text h4>"So Much Empty..."</Text>
      </View>
    );
  }

  return (
    <BooksList
      data={[...store.vfilteredBooks('').values()]}
      loading={false}
      renderItem={({ item, index }) => {
        return <BookWithData {...item}></BookWithData>;
      }}
      keyExtractor={({ item, index }) => {
        return index;
      }}></BooksList>
  );
});

export default observer(props => {
  const { store, loading, setQuery } = useQuery();
  return (
    <View>
      <Button
        title={'Get Books'}
        onPress={() => {
          setQuery(store.queryBooks());
        }}
        loading={loading}></Button>
      <BookListWithData></BookListWithData>
    </View>
  );
});
