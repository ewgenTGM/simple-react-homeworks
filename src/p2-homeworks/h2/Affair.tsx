import React from 'react';
import {AffairType} from './HW2';
import classes from './Affair.module.css'

type AffairPropsType = {
    affair: AffairType,
    deleteAffairCallback: (id: number) => void,
}

function Affair(props: AffairPropsType) {
    let affairPriorityClass: string = '';
    switch (props.affair.priority) {
        case "high":
            affairPriorityClass = classes.high_priority;
            break;
        case "low":
            affairPriorityClass = classes.low_priority;
            break;
        case "middle":
            affairPriorityClass = classes.middle_priority;
            break;
    }
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    };

    return (
        <div className={`${classes.affair} ${affairPriorityClass}`}>
            <div className={classes.affair_id}>{props.affair._id}</div>
            <div className={classes.affair_name}>{props.affair.name}</div>
            <div className={classes.affair_priority}>{props.affair.priority}</div>
            <button className={classes.affair_remove_btn} onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
