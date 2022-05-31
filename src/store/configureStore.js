import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import playlistReducer from './reducers/playlistReducer';
import authReducer from './reducers/authReducer';
import playerReducer from './reducers/playerReducer';
import * as actions from './actions/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
	auth: authReducer,
	playlist: playlistReducer,
	player: playerReducer
});

const configureStore = (spotifyApi) => {
	const middleWare = applyMiddleware(thunk);
	const store = createStore(rootReducers, composeEnhancer(middleWare));
	store.dispatch(actions.fetchToken(spotifyApi));
	return store;
};

export default configureStore;
