import React from 'react';
import { Box, Button } from '@mui/material';

const Home = () => {
	return (
		<Box
			sx={{
				bgcolor: 'background.paper',
				flex: 1,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: 5
			}}
		>
			<img
				src="/img/hero.jpg"
				style={{ maxHeight: '50%', maxWidth: '50%', borderRadius: '15px' }}
				alt="Techover"
			/>
			<Button
				size="large"
				variant="contained"
				onClick={() => (window.location.href = 'https://www.linkedin.com/in/filip-windahl-98930317a/')}
			>
				Kontakta mig!
			</Button>
		</Box>
	);
};

export default Home;
