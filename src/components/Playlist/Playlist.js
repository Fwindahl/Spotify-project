import React, { useState, useEffect } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import SongTable from '../SongTable/SongTable';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const Playlist = ({ spotifyApi, loading }) => {
	const [playlistInfo, setPlaylistInfo] = useState();
	const [songs, setSongs] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const getData = async () => {
			const playlistDetail = await spotifyApi.getPlaylist(id);
			setPlaylistInfo({
				image: playlistDetail.body.images[0].url,
				name: playlistDetail.body.name
			});

			const { tracks } = playlistDetail.body;
			const formattedSongs = formatSongData(tracks.items);
			setSongs(formattedSongs);
		};

		getData();
	}, [id]);

	const formatSongData = (songs) => {
		return songs.map((song, i) => {
			const { track } = song;
			track.contextUri = `spotify:playlist:${id}`;
			track.position = i;
			return track;
		});
	};

	return (
		<Box
			sx={{
				bgcolor: 'background.paper',
				flex: 1,
				overflowY: 'auto'
			}}
		>
			<Box
				p={{ xs: 3, md: 4 }}
				sx={{
					width: '100%',
					background: 'linear-gradient(180deg, rgba(25,173,127,1) 0%, rgba(29,29,29,1) 100%)',
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: { xs: 'flex-start', md: 'flex-end', xl: 'center' },
					gap: 3,
					boxSizing: 'border-box',
					flexDirection: { xs: 'column', md: 'row' }
				}}
			>
				<Avatar
					src={playlistInfo?.image}
					variant="square"
					alt="Bieber"
					sx={{
						boxShadow: 15,
						width: { sx: '100%', md: 235 },
						height: { sx: '100%', md: 235 }
					}}
				/>
				<Box>
					<Typography
						sx={{ color: 'white', textShadow: '2px 2px 3px #000000', fontSize: 13, fontWeight: 'bold' }}
					>
						Playlist
					</Typography>
					<Typography
						sx={{
							color: 'white',
							textShadow: '3px 3px 4px #000000',
							fontSize: { xs: 42, md: 72 },
							fontWeight: 'bold'
						}}
					>
						{playlistInfo?.name}
					</Typography>
				</Box>
			</Box>
			<SongTable songs={songs} loading={loading} spotifyApi={spotifyApi} />
		</Box>
	);
};

const mapState = (state) => {
	return {
		loading: state.playlist.loading
	};
};

export default connect(mapState)(Playlist);
