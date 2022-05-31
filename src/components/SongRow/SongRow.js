import React from 'react';
import { Avatar, Box, Typography, Grid, Divider } from '@mui/material';
import { formatTime } from '../../utilities/functions';

const SongRow = ({ image, title, artist, album, duration, i }) => {
	return (
		<Grid
			container
			px={2}
			py={1}
			sx={{
				width: '100%',
				color: 'text.secondary',
				fontSize: 14,
				cursor: 'pointer'
			}}
		>
			<Grid item sx={{ width: 35, display: 'flex', alignItems: 'center', fontSize: 16 }}>
				{i + 1} .
			</Grid>
			<Grid item sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
				<Avatar src={image} alt={title} variant="square" />
				<Box ml={1}>
					<Typography sx={{ fontSize: 16, color: 'text.primary' }}>{title}</Typography>
					<Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{artist}</Typography>
				</Box>
			</Grid>
			<Grid
				item
				xs={3}
				sx={{
					display: { xs: 'none', md: 'flex' },
					alignItems: 'center'
				}}
			>
				{album}
			</Grid>
			<Grid
				item
				xs={3}
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'center'
				}}
			>
				{formatTime(duration)}
			</Grid>
		</Grid>
	);
};

export default SongRow;
