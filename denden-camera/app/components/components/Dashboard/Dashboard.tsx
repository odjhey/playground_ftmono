import React, { Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import moment from 'moment';
import { Text, Avatar } from 'react-native-elements';
import { IStyle, defaultStyle } from './style';

interface Props {
  name: String;
  date: String;
  time: String;
}

export default (props: Props) => {
  return (
    <View style={{ alignItems: 'center', paddingTop: 20 }}>
      <View style={{ paddingBottom: 5 }}>
        <Avatar
          title={'OP'}
          titleStyle={{ color: '#C3DAFE' }}
          overlayContainerStyle={{
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#BEE3F8',
            backgroundColor: 'white',
          }}
          rounded
          size={'large'}></Avatar>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ color: '#2D3748', fontSize: 20 }}>{props.name}</Text>
      </View>
      <Text style={{ color: 'grey', fontSize: 18 }}>{props.time}</Text>
      <Text style={{ color: 'grey', fontSize: 10 }}>{props.date}</Text>
    </View>
  );
};
