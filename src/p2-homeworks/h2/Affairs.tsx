import React from 'react';
import Affair from './Affair';
import {AffairType, FilterType} from './HW2';
import classes from './Affairs.module.css';

type AffairsPropsType = {
  data: Array<AffairType>,
  setFilter: (filter: FilterType) => void,
  deleteAffairCallback: (id: number) => void,
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
      <Affair
          key={a._id}
          affair={a}
          deleteAffairCallback={props.deleteAffairCallback}
      />
  ));

  const toggleCurrentFilter = (button: HTMLButtonElement) => {
    const buttons: NodeListOf<Element> = document.querySelectorAll('.' + classes.filterBtn);
    buttons.forEach(btn => btn.classList.remove(classes.current));
    button.classList.add(classes.current);
  };

  const setFilterType = (e: React.MouseEvent<HTMLButtonElement>, filter: FilterType) => {
    props.setFilter(filter);
    toggleCurrentFilter(e.currentTarget);
  };

  return (
      <div>
        {props.data.length > 0 ? mappedAffairs : <div>There aren't affairs</div>}
        <button
            onClick={(event) => setFilterType(event, 'all')}
            className={classes.filterBtn}>All
        </button>
        <button
            onClick={(event) => setFilterType(event, 'high')}
            className={classes.filterBtn}>High
        </button>
        <button
            onClick={(event) => setFilterType(event, 'middle')}
            className={classes.filterBtn}>Middle
        </button>
        <button
            onClick={(event) => setFilterType(event, 'low')}
            className={classes.filterBtn}>Low
        </button>
      </div>
  );
}

export default Affairs;
