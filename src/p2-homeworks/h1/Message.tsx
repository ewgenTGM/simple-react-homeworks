import React from 'react';
import classes from './Message.module.css';

export type MessagePropsType = {
  avatar: string,
  name: string,
  message: string
  time: string
}

const Message: React.FC<MessagePropsType> = (props: MessagePropsType) => {
  return (
      <div className={classes.messageContainer}>
        <img
            className={classes.avatar}
            src={props.avatar}
            alt="avatar"/>
        <div className={classes.message}>
          <div className={classes.userName}>{props.name}</div>
          <span className={classes.messageTime}>{props.time}</span>
          <div className={classes.messageText}>{props.message}</div>
        </div>
      </div>
  );
}

export default Message;