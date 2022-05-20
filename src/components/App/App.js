import './App.css';
import SideNav from '../SideNav/SideNav.js';
import Playlist from '../Playlist/Playlist.js';
import { Box } from '@mui/material';
import Player from '../Player/Player';
import { Routes, Route } from 'react-router-dom';
import MobileNav from '../MobileNav/MobileNav';

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

function App() {
	return (
		<Box className="App">
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
						<Route path="/" element={<h1 style={{ color: 'white' }}>Home</h1>} />
						<Route path="/search" element={<h1 style={{ color: 'white' }}>Search</h1>} />
						<Route path="/library" element={<h1 style={{ color: 'white' }}>Library</h1>} />
						<Route path="/playlist/:playlistId" element={<Playlist songs={songs} />} />
					</Routes>
				</Box>
				<Player />
				<MobileNav />
				<Banner />
			</Box>
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
			Made with love by Techover Academy
		</Box>
	);
};

export default App;