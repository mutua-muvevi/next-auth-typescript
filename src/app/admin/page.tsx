import { Card, Container,  Grid, Typography } from "@mui/material";

const AdminPage = () => {
	return (
		<Container maxWidth="xl">

			<div style={{height: "100vh",}}>
				<Typography variant="h1">Admin Page</Typography>
				<Grid container spacing={3}>
					{
						Array(10).fill().map((_, index) => (
							<Grid item xs={12} sm={6} lg={4} xl={3} key={index}>
								<Card sx={{height : 200}}>

								<Typography variant="h3">{index}</Typography>
								</Card>
							</Grid>
						))
					}
				</Grid>
			</div>
		</Container>
	);
};

export default AdminPage;