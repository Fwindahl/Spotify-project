import React, { useState } from 'react';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Search, List } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const MobileNav = () => {
	const [value, setValue] = useState(0);
	const navigate = useNavigate();

	const styledNav = { color: 'text.secondary' };

	return (
		<Box sx={{ display: { xs: 'block', md: 'none' } }}>
			<BottomNavigation
				sx={{ bgcolor: 'background.paper' }}
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction
					sx={{ color: 'text.secondary' }}
					label="Home"
					icon={<Home />}
					onClick={() => {
						navigate('/');
					}}
				/>
				<BottomNavigationAction
					sx={styledNav}
					label="Sök"
					icon={<Search />}
					onClick={() => {
						navigate('/search');
					}}
				/>
				<BottomNavigationAction
					sx={styledNav}
					label="Ditt bibliotek"
					icon={<List />}
					onClick={() => {
						navigate('/library');
					}}
				/>
			</BottomNavigation>
		</Box>
	);
};

export default MobileNav;
