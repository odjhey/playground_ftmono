import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text, ViewStyle, FlatList } from 'react-native';
import moment from 'moment';
import { SingleDate as CalendarSingleDate } from '../../components/Calendar';
import { Home } from '../../components/Home';

import { ListItem } from 'react-native-elements';
const list = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amy Farha',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    subtitle: 'Vice Chairman',
  },
];

const style: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf('Calendar', module)
  .add('small date', () => (
    <CenteredView>
      <CalendarSingleDate
        date={moment().format()}
        backgroundColor={'#F56565'}></CalendarSingleDate>
      <CalendarSingleDate
        date={moment().format()}
        backgroundColor={'#68D391'}></CalendarSingleDate>
      <CalendarSingleDate
        date={moment().format()}
        backgroundColor={'#ED8936'}></CalendarSingleDate>
    </CenteredView>
  ))
  .add('lists', () => {
    return (
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={list}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              subtitle={item.subtitle}
              containerStyle={{ padding: 0, margin: 0 }}
              bottomDivider
              leftElement={
                <CalendarSingleDate
                  date={moment().format()}
                  backgroundColor={'#ED8936'}></CalendarSingleDate>
              }
            />
          )}></FlatList>
      </View>
    );
  });

storiesOf('home', module).add('Home', () => {
  return (
    <View>
      <Home
        name={'Odelon Jhey Pacalso'}
        date={moment().format('MMMM D, YYYY')}
        time={moment().format('ddd LT')}></Home>
    </View>
  );
});
