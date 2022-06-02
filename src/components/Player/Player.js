import React, { useEffect } from 'react';
import { Box, Grid, Typography, Avatar } from '@mui/material';
import PlayerController from '../PlayerController/PlayerController';
import VolumeController from '../VolumeController/VolumeController';
import { connect } from 'react-redux';
import { updateSongInfoStart } from '../../store/actions/index';

const Player = ({ spotifyApi, updateSongInfoStart, title, artist, image }) => {
	const sliderStyle = {
		color: '#fff',
		height: 4,
		padding: 0,
		width: '100%',
		'& .Mui-focusVisible': {
			boxShadow: 'none'
		},
		'& .MuiSlider-thumb': {
			width: 0,
			height: 0,
			'&:hover': {
				boxShadow: 'none'
			},
			'&:focus': {
				boxShadow: 'none'
			}
		},
		'&:hover': {
			'& .MuiSlider-track': {
				backgroundColor: 'primary.main'
			},
			'& .MuiSlider-thumb': {
				width: 12,
				height: 12
			}
		},
		'& .MuiSlider-track': {
			border: 'none'
		}
	};

	useEffect(() => {
		updateSongInfoStart(spotifyApi);
	}, []);
	return (
		<Box>
			<Grid
				container
				px={3}
				sx={{
					backgroundColor: 'background.paper',
					height: 100,
					width: '100%',
					borderTop: '1px solid #292929'
				}}
			>
				<Grid
					item
					xs={3}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start'
					}}
				>
					<Avatar
						src={image?.url}
						alt="logo"
						variant="square"
						sx={{ width: 56, height: 56, marginRight: 2 }}
					/>
					<Box>
						<Typography sx={{ color: 'white', fontSize: 14 }}>{title}</Typography>
						<Typography sx={{ color: 'text.secondary', fontSize: 12 }}>{artist}</Typography>
					</Box>
				</Grid>
				<PlayerController sliderStyle={sliderStyle} spotifyApi={spotifyApi} />
				<VolumeController sliderStyle={sliderStyle} spotifyApi={spotifyApi} />
			</Grid>
		</Box>
	);
};

const mapStateToProps = (state) => {
	const { title, artist, image } = state.player;
	return { title, artist, image };
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateSongInfoStart: (api) => dispatch(updateSongInfoStart(api))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
