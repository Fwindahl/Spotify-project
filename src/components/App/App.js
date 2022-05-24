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
import { useEffect } from 'react';
import { connect } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-node';
import { fetchUser, fetchPlaylist } from '../../store/actions/index';

const mockData = [
	{ name: 'Rock', playlistId: 123, image: '/Justin-Bieber.png' },
	{ name: 'Pop', playlistId: 646, image: '/Justin-Bieber.png' },
	{ name: 'Hip hop', playlistId: 834, image: '/Justin-Bieber.png' },
	{ name: 'X-mas', playlistId: 5503, image: '/Justin-Bieber.png' },
	{ name: 'Code life', playlistId: 4832, image: '/Justin-Bieber.png' }
];

const songs = [
	{
		image: '/img/Justin-Bieber.png',
		title: 'Holy',
		artist: 'Justin Bieber',
		album: 'No clue',
		duration: 180
	},
	{
		image: '/img/Justin-Bieber.png',
		title: 'Holy',
		artist: 'Justin Bieber',
		album: 'No clue',
		duration: 180
	},
	{
		image: '/img/Justin-Bieber.png',
		title: 'Holy',
		artist: 'Justin Bieber',
		album: 'No clue',
		duration: 180
	},
	{
		image: '/img/Justin-Bieber.png',
		title: 'Holy',
		artist: 'Justin Bieber',
		album: 'No clue',
		duration: 180
	},
	{
		image: '/img/Justin-Bieber.png',
		title: 'Holy',
		artist: 'Justin Bieber',
		album: 'No clue',
		duration: 180
	},
	{
		image: '/img/Justin-Bieber.png',
		title: 'Holy',
		artist: 'Justin Bieber',
		album: 'No clue',
		duration: 180
	},
	{
		image: '/img/Justin-Bieber.png',
		title: 'Holy',
		artist: 'Justin Bieber',
		album: 'No clue',
		duration: 180
	},
	{
		image: '/img/Justin-Bieber.png',
		title: 'Holy',
		artist: 'Justin Bieber',
		album: 'No clue',
		duration: 180
	},
	{
		image: '/img/Justin-Bieber.png',
		title: 'Holy',
		artist: 'Justin Bieber',
		album: 'No clue',
		duration: 180
	},
	{
		image: '/img/Justin-Bieber.png',
		title: 'Holy',
		artist: 'Justin Bieber',
		album: 'No clue',
		duration: 180
	}
];

function App({ token, fetchUser, fetchPlaylist }) {
	const spotifyApi = new SpotifyWebApi();

	useEffect(() => {
		spotifyApi.setAccessToken(token);

		const getData = async () => {
			fetchUser(spotifyApi);
			fetchPlaylist(spotifyApi);
		};

		if (token) getData();
	}, [token, fetchUser]);

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
						<SideNav playlists={mockData} />
						<Routes>
							<Route path="/playlist/:id" element={<Playlist songs={songs} />} />
							<Route path="/search" element={<h1 style={{ color: 'white' }}>Search</h1>} />
							<Route path="/library" element={<Library playlists={mockData} loading={false} />} />
							<Route path="/" element={<Home />} />
						</Routes>
					</Box>
					<Player />
					<MobileNav />
					<Banner />
				</Box>
			) : (
				<Routes>
					<Route path="/" element={<Login />} />
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
				height: 25,
				bgcolor: 'primary.main',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-end',
				fontSize: 14,
				boxSizing: 'border-box',
				paddingRight: '10px'
			}}
		>
			Made with love by Filip Windahl
		</Box>
	);
};

const mapStateToProps = (state) => {
	return { token: state.auth.token };
};

const mapDispatch = (dispatch) => {
	return {
		fetchUser: (api) => dispatch(fetchUser(api)),
		fetchPlaylist: (api) => dispatch(fetchPlaylist(api))
	};
};

export default connect(mapStateToProps, mapDispatch)(App);
