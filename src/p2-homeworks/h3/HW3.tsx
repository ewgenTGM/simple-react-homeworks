import React, { useState } from 'react';
import GreetingContainer from './GreetingContainer';
import { v1 } from 'uuid';

// types
export type UserType = {
	_id: string;
	name: string;
};

// уровень работы с глобальными данными
function HW3() {
	const [users, setUsers] = useState<Array<UserType>>([
		{ _id: v1(), name: 'Ewgeni' },
		{ _id: v1(), name: 'Ivan' },
		{ _id: v1(), name: 'Daria' },
	]);

	const addUserCallback = (name: string) => {
		const newUser: UserType = {
			_id: v1(),
			name,
		};
		setUsers([newUser, ...users]);
	};

	return (
		<div>
			<hr />
			homeworks 3
			<GreetingContainer
				users={users}
				addUserCallback={addUserCallback}
			/>
		</div>
	);
}

export default HW3;
