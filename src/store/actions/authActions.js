import * as actionTypes from './actionTypes';
import { getAccessToken } from '../../utilities/functions';

export const fetchTokenStart = () => {
	return { type: actionTypes.AUTH_START };
};

export const fetchTokenSuccess = (payload) => {
	return { type: actionTypes.AUTH_SUCCESS, payload };
};

export const fetchTokenFail = (payload) => {
	return { type: actionTypes.AUTH_FAIL, payload };
};

export const fetchToken = (spotifyApi) => {
	return async (dispatch) => {
		dispatch(fetchTokenStart());
		try {
			const token = getAccessToken();
			await spotifyApi.setAccessToken(token);
			dispatch(fetchTokenSuccess(token));
		} catch (e) {
			dispatch(fetchTokenFail(e));
		}
	};
};

export const fetchUserStart = () => {
	return { type: actionTypes.FETCH_CURRENT_USER_START };
};

export const fetchUserSuccess = (payload) => {
	return { type: actionTypes.FETCH_CURRENT_USER_SUCCESS, payload };
};

export const fetchUserFail = (payload) => {
	return { type: actionTypes.FETCH_CURRENT_USER_FAIL, payload };
};

export const fetchUser = (spotifyApi) => {
	return async (dispatch) => {
		dispatch(fetchUserStart());
		try {
			const me = await spotifyApi.getMe();
			dispatch(fetchUserSuccess(me));
		} catch (e) {
			dispatch(fetchUserFail(e));
		}
	};
};
