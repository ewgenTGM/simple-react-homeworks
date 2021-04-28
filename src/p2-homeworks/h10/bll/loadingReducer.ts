const SET_LOADING = 'SHW/HW10/SET_LOADING';

type SetLoadingActionType = ReturnType<typeof SetLoading>;

export const SetLoading = (loading: boolean) => ({
	type: SET_LOADING,
	patload: {
		loading,
	} as const,
});

type StateType = typeof initState;

const initState = {
	loading: false,
};

export const loadingReducer = (
	state: StateType = initState,
	action: SetLoadingActionType
): StateType => {
	switch (action.type) {
		case 'SHW/HW10/SET_LOADING': {
			return {
				...state,
				loading: action.patload.loading,
			};
		}
		default:
			return state;
	}
};
