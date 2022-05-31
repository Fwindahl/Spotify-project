import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { ThemeProvider } from '@mui/system';
import { themeOptions } from './style/material-themes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
	clientId: '8297cad7fab544b789a9da9acc340cea',
	clientSecret: '9546133b3a3241f68218eaad1e2297ca',
	redirectUri: 'http://localhost:3000/'
});
const store = configureStore(spotifyApi);
console.log('Redux Store', store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProvider theme={themeOptions}>
					<App spotifyApi={spotifyApi} />
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
