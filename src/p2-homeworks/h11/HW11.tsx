import React, { useState } from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';

function HW11() {
	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(100);

	const onChangeRange = (value: [number, number]): void => {
		setValue1(value[0]);
		setValue2(value[1]);
	};

	const onChangeRange1 = (value: number): void => {
		setValue1(value);
	};

	return (
		<div>
			<hr />
			homeworks 11
			<div>
				<span>{value1}</span>
				<SuperRange value={value1} onChangeRange={onChangeRange1} />
			</div>
			<div>
				<span>{value1}</span>
				<SuperDoubleRange
					min={0}
					max={100}
					value={[value1, value2]}
					onChange={onChangeRange}
				/>
				<span>{value2}</span>
			</div>
		</div>
	);
}

export default HW11;
