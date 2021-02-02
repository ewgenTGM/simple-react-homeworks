import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './SuperButton.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type ExtraButtonPropsType = { bgColor?: 'red' | 'blue' | 'green' };
type SuperButtonPropsType = DefaultButtonPropsType & ExtraButtonPropsType;

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
      bgColor,
      className,
      ...restProps
    }
) => {
  const finalClassName = `${s.default} ${bgColor && s[bgColor]} ${className}`;

  return (
      <button
          className={finalClassName}
          {...restProps}
      />
  );
};

export default SuperButton;
