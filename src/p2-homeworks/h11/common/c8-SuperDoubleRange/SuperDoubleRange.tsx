import { Slider } from 'antd';
import React from 'react';
// import 'antd/dist/antd.css';

type SuperDoubleRangePropsType = {
	onChange?: (value: [number, number]) => void;
	value?: [number, number];
	min?: number;
	max?: number;
	step?: number;
	disable?: boolean;
};

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (props) => {
	return (
		<>
			<Slider range {...props} />
		</>
	);
};

export default SuperDoubleRange;
