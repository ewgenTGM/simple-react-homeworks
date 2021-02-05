import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import s from './SuperCheckbox.module.css';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type ExtraInputPropsType = {
  onChangeChecked?: ( checked: boolean ) => void
  spanClassName?: string
}

type SuperCheckboxPropsType = DefaultInputPropsType & ExtraInputPropsType;

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
      type,
      onChange,
      onChangeChecked,
      className,
      spanClassName,
      children,
      ...restProps
    }
) => {
  const onChangeCallback = ( e: ChangeEvent<HTMLInputElement> ) => {
    onChangeChecked && onChangeChecked( e.currentTarget.checked );
    onChange && onChange( e );
  };

  const finalInputClassName = `${ s.checkbox } ${ className ? className : '' }`;

  return (
      <label>
        <input
            type={ 'checkbox' }
            onChange={ onChangeCallback }
            className={ finalInputClassName }
            { ...restProps }
        />
        { children && <span className={ s.spanClassName }>{ children }</span> }
      </label> // благодаря label нажатие на спан передастся в инпут
  );
};

export default SuperCheckbox;
