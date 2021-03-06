import React, { useState } from 'react';
import Affairs from './Affairs';

// types
export type AffairPriorityType = 'low' | 'middle' | 'high';

export type AffairType = {
	_id: number;
	name: string;
	priority: AffairPriorityType;
};

export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
	{ _id: 1, name: 'React', priority: 'high' },
	{ _id: 2, name: 'anime', priority: 'low' },
	{ _id: 3, name: 'games', priority: 'low' },
	{ _id: 4, name: 'work', priority: 'high' },
	{ _id: 5, name: 'html & css', priority: 'middle' },
	{ _id: 6, name: 'porn', priority: 'low' },
];

// pure helper functions
export const filterAffairs = (
	affairs: Array<AffairType>,
	filter: FilterType
): Array<AffairType> => {
	if (filter === 'all') return affairs;
	else return affairs.filter((item: AffairType) => item.priority === filter);
};

export const deleteAffair = (
	affairs: Array<AffairType>,
	_id: number
): Array<AffairType> => {
	const affairId: number = affairs.findIndex((item) => item._id === _id);
	if (affairId === -1) return affairs;
	affairs.splice(affairId, 1);
	return [...affairs];
};

function HW2() {
	const [affairs, setAffairs] = useState<any>(defaultAffairs);
	const [filter, setFilter] = useState<FilterType>('all');

	const filteredAffairs = filterAffairs(affairs, filter);
	const deleteAffairCallback = (_id: number) =>
		setAffairs(deleteAffair(affairs, _id));

	return (
		<div>
			<hr />
			homeworks 2
			<Affairs
				data={filteredAffairs}
				setFilter={setFilter}
				currentFilter={filter}
				deleteAffairCallback={deleteAffairCallback}
			/>
		</div>
	);
}

export default HW2;
