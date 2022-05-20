import React from 'react';
import { Box, Grid, Typography, Avatar } from '@mui/material';
import PlayerController from '../PlayerController/PlayerController';
import VolumeController from '../VolumeController/VolumeController';

export default function Player() {
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
						src="/Justin-Bieber.png"
						alt="logo"
						variant="square"
						sx={{ width: 56, height: 56, marginRight: 2 }}
					/>
					<Box>
						<Typography sx={{ color: 'white', fontSize: 14 }}>Holy</Typography>
						<Typography sx={{ color: 'text.secondary', fontSize: 12 }}>Justin Bieber</Typography>
					</Box>
				</Grid>
				<PlayerController sliderStyle={sliderStyle} />
				<VolumeController sliderStyle={sliderStyle} />
			</Grid>
		</Box>
	);
}
