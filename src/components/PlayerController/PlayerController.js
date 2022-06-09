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

	useEffect(() => {
		let intervalId = null;
		if (playing) {
			intervalId = setInterval(() => {
				setProgress(progress + 1);
			}, 1000);
		} else if (!playing && progress !== 0) {
			clearInterval(intervalId);
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [playing, progress]);

	const togglePlay = async () => {
		if (loading) return;

		if (!playing) {
			// Om musiken INTE Spelar
			try {
				playNewSong(spotifyApi, {});
			} catch (e) {
				console.error(e);
			}
		} else {
			// Om musiken Spelar
			pause();
			await spotifyApi.pause();
		}
	};

	const handleOnSkipPrevious = async () => {
		if (loading) return;
		await spotifyApi.skipToPrevious();
		playNewSong(spotifyApi, {});
	};

	const handleOnSkipNext = async () => {
		if (loading) return;
		await spotifyApi.skipToNext();
		playNewSong(spotifyApi, {});
	};

	const handleOnChange = (event, value) => {
		setProgress(value);
	};

	const handleOnChangeCommitted = (event, value) => {
		spotifyApi.seek(value * 1000);
	};

	return (
		<Stack direction="column" spacing={2} justify="center" alignItems="center" sx={{ width: '100%' }}>
			<Stack spacing={1} direction="row" justifyContent={'center'} alignItems="center" sx={{ width: '100%' }}>
				<IconButton size="small" sx={{ color: 'text.primary' }} onClick={async () => handleOnSkipPrevious()}>
					<SkipPrevious sx={skipStyle} />
				</IconButton>
				<IconButton size="small" sx={{ color: 'text.primary' }} onClick={async () => togglePlay()}>
					{playing ? <Pause sx={{ width: 38, height: 38 }} /> : <PlayArrow sx={{ width: 38, height: 38 }} />}
				</IconButton>
				<IconButton size="small" sx={{ color: 'text.primary' }} onClick={async () => handleOnSkipNext()}>
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
					onChange={handleOnChange}
					onChangeCommitted={handleOnChangeCommitted}
				/>
				<Typography variant="body1" sx={{ color: 'text.secondary', fontSize: 12 }}>
					{formatTime(duration)}
				</Typography>
			</Stack>
		</Stack>
	);
};

const mapState = (state) => {
	const { playing, duration, progress, device_id, loading } = state.player;
	return {
		playing,
		duration,
		progress,
		deviceId: device_id,
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
