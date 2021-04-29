import React, { useState } from 'react';
import AlternativeSuperButton from '../h4/common/c2-SuperButton/AlternativeSuperButton';

const API = 'https://neko-cafe-back.herokuapp.com/auth/test';

export const HW13: React.FC = () => {
	const [response, setResponse] = useState<any>(null);
	const [error, setError] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const onClickHandler = () => {
		setLoading(true);
		setResponse(null);
		setError(null);
		fetch(API, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({ success: false }),
		})
			.then((res) => res.json())
			.then(
				(result) => {
					setResponse(result);
				},
				(error) => {
					setError(error);
				}
			)
			.finally(() => setLoading(false));
	};

	return (
		<div>
			{loading ? (
				<span>Loading...</span>
			) : (
				<AlternativeSuperButton
					color={'green'}
					w={150}
					h={40}
					onClick={onClickHandler}
					disabled={loading}
				>
					Отправить
				</AlternativeSuperButton>
			)}
			{response && <pre>{JSON.stringify(response, null, 2)}</pre>}
		</div>
	);
};
