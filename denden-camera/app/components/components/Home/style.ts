import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface IStyle {
  container: StyleProp<ViewStyle>;
  body: StyleProp<ViewStyle>;
  header: StyleProp<ViewStyle>;
  footer: StyleProp<ViewStyle>;
  bodyText: StyleProp<TextStyle>;
  headerText: StyleProp<TextStyle>;
  footerText: StyleProp<TextStyle>;
}

export { defaultStyle };
const defaultStyle = StyleSheet.create({
  container: {
    margin: 0,
    borderWidth: 1,
    borderColor: '#CCC',
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38B2AC',
  },
  body: {
    backgroundColor: 'white',
    paddingLeft: 5,
    paddingRight: 5,
  },
  bodyText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  header: {},
  headerText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  footer: {},
  footerText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
