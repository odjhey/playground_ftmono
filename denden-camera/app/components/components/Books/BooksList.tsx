import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';

interface IBooksListProps {
  loading: Boolean;
  data: Array<any>;
  renderItem: any;
  keyExtractor: any;
}

const BooksList = (props: IBooksListProps) => {
  const { loading, data, renderItem, keyExtractor } = props;
  if (loading) {
    return <ActivityIndicator></ActivityIndicator>;
  }

  if (data.length < 1) {
    return <Text>Empty</Text>;
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        extraData={true}></FlatList>
    </View>
  );
};

export default BooksList;
export { IBooksListProps };
