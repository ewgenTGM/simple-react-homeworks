import React from 'react';
import Affair from './Affair';
import {AffairType, FilterType} from './HW2';
import classes from './Affairs.module.css';

type AffairsPropsType = {
    data: Array<AffairType>,
    setFilter: (filter: FilterType) => void,
    currentFilter: FilterType,
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

    const setFilterType = (filter: FilterType) => {
        props.setFilter(filter);
    };

    return (
        <div className={classes.affairs}>
            <div className={classes.buttons_block}>
                <button
                    onClick={() => setFilterType('all')}
                    className={`${classes.filterBtn} ${props.currentFilter === 'all' ? classes.current : ''}`}>All
                </button>
                <button
                    onClick={() => setFilterType('high')}
                    className={`${classes.filterBtn} ${props.currentFilter === 'high' ? classes.current : ''}`}>High
                </button>
                <button
                    onClick={() => setFilterType('middle')}
                    className={`${classes.filterBtn} ${props.currentFilter === 'middle' ? classes.current : ''}`}>Middle
                </button>
                <button
                    onClick={() => setFilterType('low')}
                    className={`${classes.filterBtn} ${props.currentFilter === 'low' ? classes.current : ''}`}>Low
                </button>
            </div>
            <div className={classes.affairs_list}>
                {props.data.length > 0 ? mappedAffairs : <div>There aren't affairs</div>}
            </div>

        </div>
    );
}

export default Affairs;
