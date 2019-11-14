import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { ListItem, Button, Text } from 'react-native-elements';

interface IBookProps {
  title: any;
  author: any;
  checkin: Boolean;
  loading?: Boolean;
  deletable?: Boolean;
  onDelete?: any;
}

const Book = (props: IBookProps) => {
  const { title, author, loading, deletable } = props;
  return (
    <View>
      <ListItem
        title={title}
        subtitle={author}
        rightElement={
          <View>
            {loading ? (
              <ActivityIndicator></ActivityIndicator>
            ) : deletable ? (
              <Button title={'Delete'} onPress={props.onDelete}></Button>
            ) : null}
          </View>
        }
        bottomDivider></ListItem>
    </View>
  );
};

export default Book;
export { IBookProps };
