import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import { SetLoading } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import spinner from './spinner.png';

function HW10() {
	const loading = useSelector<AppStoreType, boolean>(
		(state) => state.loading.loading
	);

	const dispatch = useDispatch();

	const setLoading = () => {
		dispatch(SetLoading(true));
		setTimeout(() => {
			dispatch(SetLoading(false));
		}, 2000);
		console.log('loading...');
	};

	return (
		<div>
			<hr />
			homeworks 10
			{loading ? (
				<div>
					<img src={spinner} width={150} />
				</div>
			) : (
				<div>
					<SuperButton onClick={setLoading}>
						set loading...
					</SuperButton>
				</div>
			)}
		</div>
	);
}

export default HW10;
