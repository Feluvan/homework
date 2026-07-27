import { Box, Grid, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DescriptionIcon from "@mui/icons-material/Description";
import StatCard from "../../components/Card";
import { ActiveUsersChart, SalesChart } from "../../components/Charts";
import Table from "../../components/Table";
import VisionCard from "../../components/VisionCard";

const orders = [
  { title: "$2400, Design changes", time: "22 DEC 7:20 PM", color: "#0075ff" },
  { title: "New order #1832412", time: "21 DEC 11 PM", color: "#e31a1a" },
  { title: "Server payments for April", time: "21 DEC 9:34 PM", color: "#0075ff" },
  { title: "New card added for order #4395133", time: "20 DEC 2:20 AM", color: "#0075ff" },
  { title: "Unlock packages for development", time: "18 DEC 4:54 AM", color: "#01b574" },
  { title: "New order #9583120", time: "17 DEC", color: "#e31a1a" },
];

export default function Dashboard() {
  return (
    <Box sx={{ pb: 2 }}>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
          <StatCard
            title="Today's Money"
            value="$53,000"
            change="+55%"
            color="#0075ff"
            icon={<AttachMoneyIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
          <StatCard
            title="Today's Users"
            value="2,300"
            change="+5%"
            color="#0075ff"
            icon={<PeopleIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
          <StatCard
            title="New Clients"
            value="+3,052"
            change="-14%"
            color="#0075ff"
            icon={<DescriptionIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
          <StatCard
            title="Total Sales"
            value="$173,000"
            change="+8%"
            color="#0075ff"
            icon={<ShoppingCartIcon />}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid size={{ xs: 12, lg: 7 }}>
          <VisionCard
            sx={{
              minHeight: 220,
              background:
                "linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                right: -20,
                bottom: -20,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0,117,255,0.4), transparent 70%)",
              }}
            />
            <Typography variant="caption">Welcome back,</Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              Mark Johnson
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 280 }}>
              Glad to see you again! Ask me anything.
            </Typography>
          </VisionCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 2.5 }}>
          <VisionCard sx={{ textAlign: "center", height: "100%" }}>
            <Typography variant="caption">Satisfaction Rate</Typography>
            <Typography variant="h2" sx={{ my: 2, fontSize: "2.5rem" }}>
              95%
            </Typography>
            <Typography variant="caption">Based on likes</Typography>
          </VisionCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 2.5 }}>
          <VisionCard sx={{ textAlign: "center", height: "100%" }}>
            <Typography variant="caption">Referral Tracking</Typography>
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                border: "6px solid #0075ff",
                mx: "auto",
                my: 2,
                display: "grid",
                placeItems: "center",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                9.3
              </Typography>
            </Box>
            <Typography variant="caption">Safety</Typography>
          </VisionCard>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <SalesChart />
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <ActiveUsersChart />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Table />
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <VisionCard sx={{ height: "100%" }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Orders overview
            </Typography>
            {orders.map((order) => (
              <Box key={order.title} sx={{ display: "flex", gap: 1.5, mb: 2 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: order.color,
                    mt: 0.6,
                    flexShrink: 0,
                  }}
                />
                <Box>
                  <Typography variant="body2" sx={{ color: "text.primary", fontSize: "0.8rem" }}>
                    {order.title}
                  </Typography>
                  <Typography variant="caption">{order.time}</Typography>
                </Box>
              </Box>
            ))}
          </VisionCard>
        </Grid>
      </Grid>
    </Box>
  );
}
