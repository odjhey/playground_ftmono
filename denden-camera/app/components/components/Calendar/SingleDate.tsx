import React, { Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import moment from 'moment';
import { Text } from 'react-native-elements';
import { IStyle, defaultStyle } from './style';

interface Props {
  date: any;
  backgroundColor: any;
}

export default (props: Props) => {
  const styles = defaultStyle;

  const date = {
    month: moment(props.date).format('MMM'),
    day: moment(props.date).format('ddd'),
    date: moment(props.date).format('DD'),
  };
  return (
    <Fragment>
      <View
        style={[styles.container, { backgroundColor: props.backgroundColor }]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{date.month}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyText}>{date.date}</Text>
        </View>
        <Text style={styles.footerText}>{date.day}</Text>
      </View>
    </Fragment>
  );
};
