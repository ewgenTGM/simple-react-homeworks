import React, { useState } from 'react';
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import { restoreState, saveState } from './localStorage/localStorage';

function HW6() {
	const [value, setValue] = useState<string>('');

	const save = () => {
		saveState<string>('editable-span-value', value);
	};
	const restore = () => {
		setValue(restoreState('editable-span-value', ''));
	};

	return (
		<div>
			<hr />
			homeworks 6{/*should work (должно работать)*/}
			<div>
				<SuperEditableSpan
					value={value}
					onChangeText={setValue}
					spanProps={{
						children: value ? undefined : 'enter text...',
					}}
				/>
			</div>
			<SuperButton bgColor={'blue'} onClick={save}>
				save
			</SuperButton>
			<SuperButton bgColor={'green'} onClick={restore}>
				restore
			</SuperButton>
		</div>
	);
}

export default HW6;
