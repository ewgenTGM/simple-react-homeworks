import React, {useState} from 'react';
import Greeting from './Greeting';
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<boolean>(true);

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue: string = e.currentTarget.value;
        setName(inputValue);
        setError(inputValue.trim() === '');
    };
    const addUser = () => {
        if (name.trim() === '') {
            return;
        }
        alert(`Hello ${name.trim()} !`);
        addUserCallback(name.trim());
        setName('');
        setError(true);
    };

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
};

export default GreetingContainer;
