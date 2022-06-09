import './App.css';
import SideNav from '../SideNav/SideNav.js';
import Playlist from '../Playlist/Playlist.js';
import { Box } from '@mui/material';
import Player from '../Player/Player';
import { Routes, Route } from 'react-router-dom';
import MobileNav from '../MobileNav/MobileNav';
import Library from '../Library/Library';
import Home from '../Home/Home';
import Login from '../Login/Login';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchPlaylist, addDevice } from '../../store/actions/index';
import Search from '../Search/Search';

function App({ token, fetchUser, fetchPlaylist, spotifyApi, addDevice }) {
	const [playerIsReady, setPlayerIsReady] = useState(false);
	useEffect(() => {
		const getData = async () => {
			fetchUser(spotifyApi);
			fetchPlaylist(spotifyApi);
		};

		if (token) {
			window.onSpotifyWebPlaybackSDKReady = () => {
				setupSpotifyConnect(token, addDevice, spotifyApi);
			};
			getData();
		}
	}, [token, fetchUser]);

	const setupSpotifyConnect = (token, addDevice) => {
		const player = new window.Spotify.Player({
			name: 'Techover Spotify',
			getOAuthToken: (cb) => {
				cb(token);
			},
			volume: 0.5
		});

		player.addListener('ready', ({ device_id }) => {
			addDevice(device_id);
			setPlayerIsReady(true);
		});

		player.addListener('not_ready', ({ device_id }) => {
			console.log('Device ID has gone offline', device_id);
		});

		player.addListener('initialization_error', ({ message }) => {
			console.error(message);
		});

		player.addListener('authentication_error', ({ message }) => {
			console.error(message);
		});

		player.addListener('account_error', ({ message }) => {
			console.error(message);
		});

		player.connect();
	};

	return (
		<Box className="App">
			{token ? (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						display: 'flex',
						flexDirection: 'column'
					}}
				>
					<Box sx={{ flex: 1, overflowY: 'auto', display: 'flex' }}>
						<SideNav />
						<Routes>
							<Route path="/playlist/:id" element={<Playlist spotifyApi={spotifyApi} />} />
							<Route path="/search" element={<Search spotifyApi={spotifyApi} />} />
							<Route path="/library" element={<Library loading={false} />} />
							<Route path="/" element={<Home />} />
						</Routes>
					</Box>
					{playerIsReady && <Player spotifyApi={spotifyApi} />}
					<MobileNav />
					<Banner />
				</Box>
			) : (
				<Routes>
					<Route path="*" element={<Login />} />
				</Routes>
			)}
		</Box>
	);
}

const Banner = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: 30,
				textShadow: '2px 2px 3px #000000',
				color: 'text.primary',
				background: 'linear-gradient(180deg, rgba(25,173,127,1) 0%, rgba(18,18,18,1) 100%)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-end',
				fontWeight: 'bold',
				fontSize: 12,
				boxSizing: 'border-box',
				paddingRight: '10px'
			}}
		>
			Made with <span style={{ paddingLeft: 4, paddingRight: 4, color: 'red' }}>LOVE</span> by Techover Academy
		</Box>
	);
};

const mapStateToProps = (state) => {
	return { token: state.auth.token };
};

const mapDispatch = (dispatch) => {
	return {
		fetchUser: (api) => dispatch(fetchUser(api)),
		fetchPlaylist: (api) => dispatch(fetchPlaylist(api)),
		addDevice: (id) => dispatch(addDevice(id))
	};
};

export default connect(mapStateToProps, mapDispatch)(App);
