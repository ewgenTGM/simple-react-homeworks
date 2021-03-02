import { PeopleType, StateType } from '../HW8';

const SORT = 'SORT';
const CHECK18 = 'CHECK18';

type SortDirectionType = 'up' | 'down';

type SortActionType = {
  type: typeof SORT
  payload: SortDirectionType
}

type Check18ActionType = {
  type: typeof CHECK18
}

type ActionsType = SortActionType | Check18ActionType;

export const sortAC = ( sortDirection: SortDirectionType ): SortActionType => ( {
  type: SORT,
  payload: sortDirection
} );

export const check18AC = (): Check18ActionType => ( { type: CHECK18 } );

const peopleByNameComparer = ( a: PeopleType, b: PeopleType ): number => {
  if ( a.name.toLowerCase() > b.name.toLowerCase() ) return 1;
  if ( a.name.toLowerCase() < b.name.toLowerCase() ) return -1;
  return 0;
};

export const homeWorkReducer = ( state: StateType, action: ActionsType ): StateType => {
  switch ( action.type ) {
    case SORT: {
      return action.payload === 'up' ? [ ...state.sort( peopleByNameComparer ) ] : [ ...state.sort( peopleByNameComparer ) ].reverse();
    }
    case CHECK18: {
      return state.filter( p => p.age >= 18 );
    }
    default:
      return state;
  }
};