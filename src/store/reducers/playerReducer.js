import * as actionTypes from '../actions/actionTypes';

const initState = {
	loading: false,
	error: null,
	playing: false,
	progress: null,
	duration: null,
	device_id: null,
	title: null,
	artist: null,
	image: null
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.ADD_DEVICE_ID:
			return { ...state, device_id: action.payload };

		case actionTypes.PLAY:
			return { ...state, playing: true };

		case actionTypes.PAUSE:
			return { ...state, playing: false };

		case actionTypes.SET_PROGRESS:
			return { ...state, progress: action.payload };

		case actionTypes.UPDATE_PLAYER_START:
			return { ...state, loading: true, error: null };

		case actionTypes.UPDATE_PLAYER_SUCCESS:
			return { ...state, loading: false, error: null, ...action.payload };

		case actionTypes.UPDATE_PLAYER_FAIL:
			return { ...state, loading: false, error: action.payload };

		default:
			return state;
	}
};

export default reducer;
