import React from 'react';
import { Avatar, Box, Typography, Grid, Divider } from '@mui/material';
import { AccessTimeRounded } from '@mui/icons-material';
import SongRow from '../SongRow/SongRow';

const SongTable = ({ songs }) => {
	const renderSongs = () => songs.map((song, i) => <SongRow {...song} key={i} i={i} />);

	return (
		<Box
			p={{ xs: 3, md: 4 }}
			xs={{
				flex: 1,
				overflowY: 'auto',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<Grid container px={2} py={1} sx={{ width: '100%', color: 'text.secondary', fontSize: 14 }}>
				<Grid item sx={{ width: 35, display: 'flex', alignItems: 'center' }}>
					#
				</Grid>
				<Grid item sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
					Title
				</Grid>
				<Grid
					item
					xs={3}
					sx={{
						display: { xs: 'none', md: 'flex' },
						alignItems: 'center'
					}}
				>
					Album
				</Grid>
				<Grid
					item
					xs={3}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-end'
					}}
				>
					<AccessTimeRounded sx={{ width: 20, height: 20 }} />
				</Grid>
			</Grid>
			<Box pb={2}>
				<Divider sx={{ width: '100%', height: 1 }} />
			</Box>
			{renderSongs()}
		</Box>
	);
};

export default SongTable;
