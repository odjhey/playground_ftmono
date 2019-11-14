import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Book, BooksList } from './../../components/Books';

const books = [
  {
    title: 'hayi pottah',
    author: 'jk rowling',
    checkin: false,
    isDeleted: false,
  },
  {
    title: 'Dunes',
    author: 'iforgot',
    checkin: false,
    isDeleted: false,
  },
  {
    title: 'Song of Ice and Fire',
    author: 'kuya RR',
    checkin: false,
    isDeleted: false,
  },
];

storiesOf('Books', module)
  .add('book', () => {
    const book = books[0];
    return <Book {...book}></Book>;
  })
  .add('loading', () => {
    const book = books[0];
    return <Book {...book} loading={true}></Book>;
  })
  .add('Deletable book', () => {
    const book = books[0];
    return <Book {...book} deletable={true}></Book>;
  })
  .add('books', () => {
    return (
      <BooksList
        data={books}
        loading={false}
        renderItem={({ item, index }) => {
          return <Book {...item} deletable={true}></Book>;
        }}
        keyExtractor={({ item, index }) => {
          return index;
        }}></BooksList>
    );
  });
