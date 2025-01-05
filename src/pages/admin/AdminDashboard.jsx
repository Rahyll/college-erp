import { Container,Typography,Grid } from "@mui/material";
import UserManagement from "./UserManagement";
import SystemAnalytics from "./SystemAnalytics";
export default function AdminDashboard() {
  return (
    <Container>
        <Typography variant="h4" gutterBottom>
            Admin Dashboard
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <UserManagement />
            </Grid>
            <Grid item xs={12} md={6}>
                <SystemAnalytics />
            </Grid>
        </Grid>
    </Container>
  );
}