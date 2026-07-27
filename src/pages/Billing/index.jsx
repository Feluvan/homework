import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import VisionCard from "../../components/VisionCard";
import { visionGradients } from "../../theme/visionTheme";

const invoices = [
  { date: "March, 01", id: "#MS-415646", amount: "$180" },
  { date: "February, 10", id: "#RV-126749", amount: "$250" },
  { date: "April, 05", id: "#FB-212032", amount: "$560" },
  { date: "June, 25", id: "#QW-103578", amount: "$120" },
  { date: "March, 01", id: "#MS-415646", amount: "$180" },
];

const billingProfiles = [
  { name: "Oliver Liam", company: "Viking Burrito", email: "oliver@burrito.com", vat: "FRB1235476" },
  { name: "Lucas Harper", company: "Stone Tech Zone", email: "lucas@stone.com", vat: "FRB1235476" },
  { name: "Oliver Liam", company: "Viking Burrito", email: "oliver@burrito.com", vat: "FRB1235476" },
];

const transactions = [
  { name: "Netflix", date: "27 March 2021, at 12:30 PM", amount: "- $2,500", type: "down" },
  { name: "Apple", date: "27 March 2021, at 04:30 AM", amount: "+ $2,000", type: "up" },
  { name: "Stripe", date: "26 March 2021, at 13:45 PM", amount: "+ $750", type: "up" },
  { name: "HubSpot", date: "26 March 2021, at 12:30 PM", amount: "Pending", type: "pending" },
];

export default function Billing() {
  return (
    <Box sx={{ pb: 2 }}>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <VisionCard
            sx={{
              minHeight: 200,
              background: visionGradients.bill,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Typography variant="caption">Vision UI</Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, my: 3, letterSpacing: 4 }}>
              7812 2139 0823 XXXX
            </Typography>
            <Box sx={{ display: "flex", gap: 4 }}>
              <Box>
                <Typography variant="caption">VALID THRU</Typography>
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  05/24
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption">CVV</Typography>
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  09X
                </Typography>
              </Box>
            </Box>
          </VisionCard>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <VisionCard sx={{ height: "100%" }}>
            <Typography variant="caption">Credit Balance</Typography>
            <Typography variant="h3" sx={{ fontWeight: 700, my: 1 }}>
              $25,215
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="caption" sx={{ color: "text.primary", fontWeight: 600 }}>
                Newest
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                <Typography variant="body2" sx={{ color: "text.primary", fontSize: "0.85rem" }}>
                  Bill & Taxes
                </Typography>
                <Typography variant="body2" sx={{ color: "text.primary", fontSize: "0.85rem" }}>
                  -$154.50
                </Typography>
              </Box>
            </Box>
          </VisionCard>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <VisionCard sx={{ height: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography variant="h2">Invoices</Typography>
              <Button size="small" variant="contained" sx={{ fontSize: "0.65rem" }}>
                VIEW ALL
              </Button>
            </Box>
            {invoices.map((inv) => (
              <Box
                key={`${inv.id}-${inv.date}`}
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}
              >
                <Box>
                  <Typography variant="body2" sx={{ color: "text.primary", fontSize: "0.8rem" }}>
                    {inv.date}
                  </Typography>
                  <Typography variant="caption">{inv.id}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography variant="body2" sx={{ color: "text.primary", fontSize: "0.8rem" }}>
                    {inv.amount}
                  </Typography>
                  <PictureAsPdfIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                </Box>
              </Box>
            ))}
          </VisionCard>
        </Grid>
      </Grid>

      <VisionCard sx={{ mb: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h2">Payment Method</Typography>
          <Button variant="contained" size="small">
            ADD A NEW CARD
          </Button>
        </Box>
        <Grid container spacing={2}>
          {["7812 2139 0823 XXXX", "7812 2139 0823 XXXX"].map((num, i) => (
            <Grid key={num} size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: "15px",
                  border: "1px solid rgba(226,232,240,0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="caption">{i === 0 ? "Mastercard" : "Visa"}</Typography>
                  <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                    {num}
                  </Typography>
                </Box>
                <IconButton size="small" sx={{ color: "text.secondary" }}>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Box>
            </Grid>
          ))}
        </Grid>
      </VisionCard>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <VisionCard>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Billing Information
            </Typography>
            {billingProfiles.map((profile, i) => (
              <Box
                key={`${profile.name}-${i}`}
                sx={{
                  p: 2,
                  mb: 1.5,
                  borderRadius: "15px",
                  border: "1px solid rgba(226,232,240,0.08)",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 700 }}>
                    {profile.name}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                      size="small"
                      startIcon={<DeleteOutlineOutlinedIcon />}
                      sx={{ color: "error.main", fontSize: "0.7rem" }}
                    >
                      DELETE
                    </Button>
                    <Button
                      size="small"
                      startIcon={<EditIcon />}
                      sx={{ color: "text.primary", fontSize: "0.7rem" }}
                    >
                      EDIT
                    </Button>
                  </Box>
                </Box>
                <Typography variant="caption">Company Name: {profile.company}</Typography>
                <br />
                <Typography variant="caption">Email Address: {profile.email}</Typography>
                <br />
                <Typography variant="caption">VAT Number: {profile.vat}</Typography>
              </Box>
            ))}
          </VisionCard>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <VisionCard>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Your Transactions
            </Typography>
            <Typography variant="caption" sx={{ color: "text.primary", fontWeight: 700 }}>
              NEWEST
            </Typography>
            {transactions.map((tx) => (
              <Box key={tx.name} sx={{ display: "flex", justifyContent: "space-between", my: 1.5 }}>
                <Box sx={{ display: "flex", gap: 1 }}>
                  {tx.type === "up" && <ArrowUpwardIcon sx={{ fontSize: 16, color: "success.main" }} />}
                  {tx.type === "down" && <ArrowDownwardIcon sx={{ fontSize: 16, color: "error.main" }} />}
                  <Box>
                    <Typography variant="body2" sx={{ color: "text.primary", fontSize: "0.8rem" }}>
                      {tx.name}
                    </Typography>
                    <Typography variant="caption">{tx.date}</Typography>
                  </Box>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.8rem",
                    color:
                      tx.type === "up"
                        ? "success.main"
                        : tx.type === "down"
                          ? "error.main"
                          : "text.primary",
                  }}
                >
                  {tx.amount}
                </Typography>
              </Box>
            ))}
            <Typography variant="caption" sx={{ color: "text.primary", fontWeight: 700, display: "block", mt: 2 }}>
              YESTERDAY
            </Typography>
            <Link href="#" underline="hover" sx={{ fontSize: "0.8rem" }}>
              View all transactions
            </Link>
          </VisionCard>
        </Grid>
      </Grid>
    </Box>
  );
}
