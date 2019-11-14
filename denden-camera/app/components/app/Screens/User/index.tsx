import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Avatar, Button, Badge, Text } from 'react-native-elements';
import { useQuery } from '../../../src/models/reactUtils';
import { observer } from 'mobx-react';
import UserProfile, { UserItem } from '../../../components/User';

const ProfileWithData = observer(UserProfile);

export default observer(props => {
  const { store, setQuery } = useQuery();
  const { id, name, checkin } = store.me;
  return (
    <View>
      {/*
      <ProfileWithData
        name={name}
        checkin={checkin}
        onCheckIn={() => {
          setQuery(store.mutateUserCheckin({ id }));
        }}></ProfileWithData>
      */}
      <UserItem
        name={name}
        checkin={checkin}
        onCheckIn={() => {
          setQuery(store.mutateUserCheckin({ id }));
        }}></UserItem>
      <Button
        title={'Refresh'}
        onPress={() => {
          setQuery(store.queryUsers());
        }}></Button>
    </View>
  );
});
