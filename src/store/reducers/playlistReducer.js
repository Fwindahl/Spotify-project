import * as actionTypes from '../actions/actionTypes';

const initialState = {
	loading: false,
	error: null,
	items: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_PLAYLIST_START:
			return { ...state, loading: true, error: null };

		case actionTypes.FETCH_PLAYLIST_SUCCESS:
			return { ...state, loading: false, error: null, items: action.payload };

		case actionTypes.FETCH_PLAYLIST_FAIL:
			return { ...state, loading: false, error: action.payload };

		default:
			return state;
	}
};

export default reducer;
