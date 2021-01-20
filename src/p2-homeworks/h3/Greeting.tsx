import React from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
  name: string
  setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
  addUser: () => void
  error: boolean
  totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
      name,
      setNameCallback,
      addUser,
      error,
      totalUsers
    } // деструктуризация пропсов
) => {
  const inputClass = error ? s.error : '';

  return (
      <div className={s.lesson3}>
        <fieldset className={`${s.fieldset} ${inputClass}`}>
          <legend>Add user</legend>
          <div className={s.add_user_block}>
            <input
                className={s.add_user_input}
                value={name}
                onChange={setNameCallback}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    addUser();
                  }
                }}/>
            <div className={s.add_block}>
              <button
                  onClick={addUser}
                  className={s.btn}>Add
              </button>
              <span>Total users count: {totalUsers}</span>
            </div>
            {error && <span className={s.error_span}>Error: enter not empty username</span>}

          </div>
        </fieldset>
      </div>
  );
};

export default Greeting;
