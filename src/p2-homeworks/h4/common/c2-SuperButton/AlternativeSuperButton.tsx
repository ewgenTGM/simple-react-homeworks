import React from 'react';
import styles from './AlternativeSuperButton.module.css'

interface ExtraProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  w: number
  h: number
  color: 'red' | 'blue' | 'green'
}

function AlternativeSuperButton( props: ExtraProps ) {

  const { color, w, h, ...restParams } = props;
  const className = `${styles.default} ${props.className} ${styles[props.color]}`;
  const style = { width: w + 'px', height: h + 'px' };

  return (
      <button { ...restParams } className={className} style={ style }/>
  );
}

export default AlternativeSuperButton;