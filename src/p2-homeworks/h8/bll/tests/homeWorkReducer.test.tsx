import React from 'react';
import { check18AC, homeWorkReducer, sortAC } from '../homeWorkReducer';
import { StateType } from '../../HW8';

let initialState: StateType = [];

beforeEach( () => {
  initialState = [
    { _id: 0, name: 'Кот', age: 3 },
    { _id: 1, name: 'Александр', age: 66 },
    { _id: 2, name: 'Коля', age: 16 },
    { _id: 3, name: 'Виктор', age: 44 },
    { _id: 4, name: 'Дмитрий', age: 40 },
    { _id: 5, name: 'Ирина', age: 55 }
  ];
} );

test( 'sort name up', () => {

  const sortedState: StateType = [
    { _id: 1, name: 'Александр', age: 66 },
    { _id: 3, name: 'Виктор', age: 44 },
    { _id: 4, name: 'Дмитрий', age: 40 },
    { _id: 5, name: 'Ирина', age: 55 },
    { _id: 2, name: 'Коля', age: 16 },
    { _id: 0, name: 'Кот', age: 3 }
  ];

  const action = sortAC( 'up' );
  const newState = homeWorkReducer( initialState, action );
  expect( newState ).toStrictEqual( sortedState );


} );
test( 'sort name down', () => {

  const sortedState: StateType = [
    { _id: 0, name: 'Кот', age: 3 },
    { _id: 2, name: 'Коля', age: 16 },
    { _id: 5, name: 'Ирина', age: 55 },
    { _id: 4, name: 'Дмитрий', age: 40 },
    { _id: 3, name: 'Виктор', age: 44 },
    { _id: 1, name: 'Александр', age: 66 }
  ];

  const action = sortAC( 'down' );
  const newState = homeWorkReducer( initialState, action );
  expect( newState ).toStrictEqual( sortedState );



} );
test( 'check age 18', () => {
  const action = check18AC();
  const newState = homeWorkReducer( initialState, action );


} );
