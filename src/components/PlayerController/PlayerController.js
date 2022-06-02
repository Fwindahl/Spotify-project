import React, { useEffect } from 'react';
import { formatTime } from '../../utilities/functions';
import { PlayArrow, SkipNext, SkipPrevious, Pause } from '@mui/icons-material';
import { IconButton, Grid, Stack, Typography, Slider } from '@mui/material';
import { connect } from 'react-redux';
import { pause, playNewSong, setProgress } from '../../store/actions/index';

const PlayerController = ({
	sliderStyle,
	deviceId,
	pause,
	playing,
	duration,
	progress,
	loading,
	playNewSong,
	setProgress,
	spotifyApi
}) => {
	const skipStyle = { width: 28, height: 28 };

	const togglePlay = async () => {
		if (loading) return;

		if (!playing) {
			try {
				playNewSong(spotifyApi);
			} catch (e) {
				console.error(e);
			}
		} else {
			pause();
			await spotifyApi.pause();
		}
	};

	const handleOnSkipPrev = async () => {
		if (loading) return;
		await spotifyApi.skipToPrevious();
		playNewSong(spotifyApi);
	};

	const handleOnSkipNext = async () => {
		if (loading) return;
		await spotifyApi.skipToNext();
		playNewSong(spotifyApi);
	};

	useEffect(() => {
		let interval = null;
		if (playing) {
			interval = setInterval(() => {
				setProgress(progress + 1);
			}, 1000);
		} else if (!playing && progress !== 0) {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [playing, progress]);

	const handleOnChange = (e, v) => {
		setProgress(v);
	};

	return (
		<Grid
			item
			sx={{
				display: 'flex',
				flex: 1,
				justifyContent: { xs: 'flex-end', md: 'center' },
				alignItems: 'center'
			}}
		>
			<Stack direction="column" spacing={2} justify="center" alignItems="center" sx={{ width: '100%' }}>
				<Stack spacing={1} direction="row" justifyContent={'center'} alignItems="center" sx={{ width: '100%' }}>
					<IconButton size="small" sx={{ color: 'text.primary' }} onClick={handleOnSkipPrev}>
						<SkipPrevious sx={skipStyle} />
					</IconButton>
					<IconButton size="small" sx={{ color: 'text.primary' }} onClick={togglePlay}>
						{playing ? (
							<Pause sx={{ width: 38, height: 38 }} />
						) : (
							<PlayArrow sx={{ width: 38, height: 38 }} />
						)}
					</IconButton>
					<IconButton size="small" sx={{ color: 'text.primary' }} onClick={handleOnSkipNext}>
						<SkipNext sx={skipStyle} />
					</IconButton>
				</Stack>
				<Stack spacing={2} direction="row" justifyContent={'center'} alignItems="center" sx={{ width: '75%' }}>
					<Typography variant="body1" sx={{ color: 'text.secondary', fontSize: 12 }}>
						{formatTime(progress)}
					</Typography>
					<Slider
						min={0}
						max={duration}
						sx={sliderStyle}
						size="medium"
						value={progress}
						aria-label="Default"
						onChange={handleOnChange}
						onChangeCommitted={(e, v) => spotifyApi.seek(v * 1000)}
					/>
					<Typography variant="body1" sx={{ color: 'text.secondary', fontSize: 12 }}>
						{formatTime(duration)}
					</Typography>
				</Stack>
			</Stack>
		</Grid>
	);
};

const mapState = (state) => {
	const { title, image, artist, duration, progress, device_id, playing, loading } = state.player;
	return {
		deviceId: device_id,
		playing,
		title,
		image,
		artist,
		duration,
		progress,
		loading
	};
};

const mapDispatch = (dispatch) => {
	return {
		pause: () => dispatch(pause()),
		playNewSong: (api) => dispatch(playNewSong(api)),
		setProgress: (progress) => dispatch(setProgress(progress))
	};
};

export default connect(mapState, mapDispatch)(PlayerController);
