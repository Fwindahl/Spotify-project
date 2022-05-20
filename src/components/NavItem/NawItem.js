import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavItem = ({ name, Icon, target, active }) => {
	const navigate = useNavigate();
	return (
		<Box
			onClick={() => {
				navigate(target);
			}}
			px={3}
			py={1}
			sx={{
				color: active ? 'text.primary' : 'text.secondary',
				display: 'flex',
				alignItems: 'center',
				fontWeight: 'bold',
				cursor: 'pointer',
				'&:hover': { color: 'white' },
				transitions: 'color 0.2s ease-in-out',
				fontSize: 14
			}}
		>
			{Icon && <Icon sx={{ fontSize: 28, marginRight: 1 }} />}
			{name}
		</Box>
	);
};

export default NavItem;
