import React from 'react';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import { Box, List, Typography } from '@mui/material';

const Library = ({ playlists, loading }) => {
	const renderPlaylistItems = () => {
		if (loading) return [1, 2, 3, 4, 5, 6, 7, 8].map((playlist, i) => <PlaylistItem key={i} loading={loading} />);

		return playlists.map((playlist, i) => <PlaylistItem key={i} {...playlist} loading={loading} />);
	};

	return (
		<Box
			id="Library"
			px={3}
			sx={{
				display: { xs: 'flex', md: 'none' },
				bgcolor: 'background.default',
				flex: 1,
				flexDirection: 'column',
				overflowY: 'auto'
			}}
		>
			<Typography py={3} variant="h2" fontWeight="bold" sx={{ color: 'text.primary', fontSize: 30 }}>
				Ditt bibliotek
			</Typography>
			<List>{renderPlaylistItems()}</List>
		</Box>
	);
};

export default Library;
