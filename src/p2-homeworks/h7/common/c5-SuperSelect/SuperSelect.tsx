import React, {
	SelectHTMLAttributes,
	DetailedHTMLProps,
	ChangeEvent,
} from 'react';

type DefaultSelectPropsType = DetailedHTMLProps<
	SelectHTMLAttributes<HTMLSelectElement>,
	HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
	options?: any[];
	onChangeOption?: (option: any) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
	options,
	onChange,
	onChangeOption,
	...restProps
}) => {
	const mappedOptions: Array<any> | null = options
		? options.map((el, index) => <option key={index}>{el}</option>)
		: null; // map options with key

	const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
		onChangeOption && onChangeOption(e.currentTarget.value);
		onChange && onChange(e);
	};

	return (
		<select onChange={onChangeCallback} {...restProps}>
			{mappedOptions}
		</select>
	);
};

export default SuperSelect;
