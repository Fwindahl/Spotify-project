import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NavItem from '../NavItem/NawItem';
import NavPlaylist from '../NawPlaylist/NawPlaylist';
import { connect } from 'react-redux';

const SideNav = ({ playlists, loading }) => {
	const renderPlaylists = () => {
		if (loading) return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => <NavPlaylist loading={loading} key={e} />);
		return playlists.map((playlist, i) => <NavPlaylist id={playlist.id} name={playlist.name} key={i} />);
	};

	return (
		<Box
			sx={{
				bgcolor: 'background.default',
				width: 230,
				height: '100%',
				display: { xs: 'none', md: 'flex' },
				flexDirection: 'column'
			}}
		>
			<Box p={3}>
				<img src="/img/Spotify_Logo.png" width={'75%'} alt="Spotify" />
				<Box>
					<Typography
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
							color: 'primary.light',
							fontSize: 10
						}}
					>
						Made by Filip
					</Typography>
				</Box>
			</Box>
			<NavItem name="Home" Icon={HomeRoundedIcon} target="/" active />
			<NavItem name="Search" Icon={SearchRoundedIcon} target="/search" />
			<Box px={3} py={1}>
				<Divider sx={{ backgroundColor: '#ffffff40' }} />
			</Box>
			<Box sx={{ overflowY: 'auto', flex: 1 }}>{renderPlaylists()}</Box>
		</Box>
	);
};

const mapState = (state) => {
	return {
		playlists: state.playlist.items,
		loading: state.playlist.loading
	};
};

export default connect(mapState)(SideNav);
