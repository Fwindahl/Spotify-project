import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavPlaylist = ({ name, PlaylistId }) => {
	const navigate = useNavigate();
	return (
		<Box
			onClick={() => {
				navigate(`/playlist/${PlaylistId}`);
			}}
			px={3}
			py={1}
			sx={{
				color: 'text.secondary',
				cursor: 'pointer',
				fontsize: 4,
				'&:hover': { color: 'text.primary' }
			}}
		>
			{name}
		</Box>
	);
};

export default NavPlaylist;
