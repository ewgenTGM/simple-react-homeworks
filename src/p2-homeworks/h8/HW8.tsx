import React, { useState } from 'react';
import { check18AC, homeWorkReducer, sortAC } from './bll/homeWorkReducer';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

export type PeopleType = {
  _id: number
  name: string
  age: number
}

export type StateType = Array<PeopleType>;

const initialPeople: StateType = [
  { _id: 0, name: 'Кот', age: 3 },
  { _id: 1, name: 'Александр', age: 66 },
  { _id: 2, name: 'Коля', age: 16 },
  { _id: 3, name: 'Виктор', age: 44 },
  { _id: 4, name: 'Дмитрий', age: 40 },
  { _id: 5, name: 'Ирина', age: 55 }
];

const HW8: React.FC = () => {
  const [ people, setPeople ] = useState<StateType>( initialPeople );

  const finalPeople: Array<JSX.Element> = people.map( p => (
      <div key={ p._id }>
        <span>{ p.name }, { p.age } лет</span>
      </div>
  ) );

  const sortUp = () => setPeople( homeWorkReducer( initialPeople, sortAC( 'up' ) ) );
  const sortDown = () => setPeople( homeWorkReducer( initialPeople, sortAC( 'down' ) ) );
  const check18 = () => setPeople( homeWorkReducer( initialPeople, check18AC() ) );

  return (
      <div>
        <hr/>
        homeworks 8
        {/*should work (должно работать)*/ }
        { finalPeople }
        <div>
          <SuperButton
              bgColor={ 'blue' }
              onClick={ sortUp }>Sort up</SuperButton>
        </div>
        <div>
          <SuperButton
              bgColor={ 'green' }
              onClick={ sortDown }>Sort down</SuperButton>
        </div>
        <div>
          <SuperButton
              bgColor={ 'red' }
              onClick={ check18 }>Check 18</SuperButton>
        </div>
        <hr/>
        {/*для личного творчества, могу проверить*/ }
        {/*<AlternativePeople/>*/ }
        <hr/>
      </div>
  );
};

export default HW8;
