import React, { useState } from 'react';
import { VolumeDown, VolumeUp, VolumeOff } from '@mui/icons-material';
import { Grid, Stack, Slider } from '@mui/material';

const VolumeController = ({ sliderStyle, spotifyApi }) => {
	const defaultVolume = 50; // deafault value
	const [volume, setVolume] = useState(defaultVolume);

	return (
		<Grid
			item
			xs={3}
			sx={{
				display: { xs: 'none', md: 'flex' },
				alignItems: 'center',
				justifyContent: 'flex-end'
			}}
		>
			<Stack spacing={2} direction="row" alignItems="center" sx={{ width: 150, color: 'text.secondary' }}>
				{volume === 0 ? <VolumeOff /> : volume < 50 ? <VolumeDown /> : <VolumeUp />}
				<Slider min={0} max={100} step={1} value={volume} sx={sliderStyle} onChange={(e, v) => setVolume(v)} />
			</Stack>
		</Grid>
	);
};

export default VolumeController;
