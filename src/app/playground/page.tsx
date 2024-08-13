"use client";

import MainLayout from '@/layouts/public';
import { Container, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const PlayGround = () => {
  return (
	<MainLayout>

		<Container maxWidth="xl">
			<Stack spacing={3} sx={{marginTop: 10}}>
				<Typography variant="h1">Playground</Typography>
				<Paper>
					<Typography variant="h1">Hello World</Typography>

				</Paper>
			</Stack>
		</Container>
	</MainLayout>
  )
}

export default PlayGround