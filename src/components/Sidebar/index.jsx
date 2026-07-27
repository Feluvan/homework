import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableChartIcon from "@mui/icons-material/TableChart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { NavLink } from "react-router-dom";
import { visionGradients } from "../../theme/visionTheme";

const mainLinks = [
  { to: "/", label: "Dashboard", icon: <DashboardIcon fontSize="small" /> },
  { to: "/tables", label: "Tables", icon: <TableChartIcon fontSize="small" /> },
  { to: "/billing", label: "Billing", icon: <CreditCardIcon fontSize="small" /> },
];

const accountLinks = [
  { to: "/profile", label: "Profile", icon: <PersonIcon fontSize="small" /> },
  { to: "#", label: "Sign In", icon: <LoginIcon fontSize="small" /> },
  { to: "#", label: "Sign Up", icon: <PersonAddIcon fontSize="small" /> },
];

function NavItem({ to, label, icon, end = false }) {
  return (
    <ListItemButton
      component={NavLink}
      to={to}
      end={end}
      sx={{
        borderRadius: "15px",
        mb: 0.5,
        color: "text.secondary",
        "&.active": {
          background: "rgba(255,255,255,0.08)",
          color: "text.primary",
        },
        "&:hover": {
          background: "rgba(255,255,255,0.05)",
        },
      }}
    >
      <ListItemIcon sx={{ minWidth: 36, color: "inherit" }}>{icon}</ListItemIcon>
      <ListItemText
        primary={label}
        primaryTypographyProps={{ fontSize: "0.875rem", fontWeight: 500 }}
      />
    </ListItemButton>
  );
}

export default function Sidebar() {
  return (
    <Box
      component="aside"
      sx={{
        width: 260,
        minHeight: "100vh",
        p: 2,
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: "0.95rem",
          letterSpacing: "0.04em",
          mb: 3,
          px: 1,
        }}
      >
        VISION UI FREE
      </Typography>

      <List disablePadding sx={{ flex: 1 }}>
        {mainLinks.map((link) => (
          <NavItem key={link.to} {...link} end={link.to === "/"} />
        ))}

        <Typography
          variant="caption"
          sx={{
            display: "block",
            mt: 2,
            mb: 1,
            px: 1.5,
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "text.secondary",
          }}
        >
          ACCOUNT PAGES
        </Typography>

        {accountLinks.map((link) => (
          <NavItem key={link.label} {...link} />
        ))}
      </List>

      <Box
        sx={{
          mt: 3,
          p: 2,
          borderRadius: "20px",
          background: visionGradients.bill,
          border: "1px solid rgba(226, 232, 240, 0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 80% 20%, rgba(0,117,255,0.35), transparent 55%)",
          }}
        />
        <Box sx={{ position: "relative" }}>
          <Typography variant="body2" sx={{ color: "text.primary", mb: 0.5 }}>
            Need help?
          </Typography>
          <Typography variant="caption" sx={{ display: "block", mb: 2 }}>
            Please check our docs
          </Typography>
          <Button
            fullWidth
            variant="contained"
            size="small"
            sx={{
              background: "#fff",
              color: "#0f1535",
              fontWeight: 700,
              fontSize: "0.7rem",
              "&:hover": { background: "#e2e8f0" },
            }}
          >
            DOCUMENTATION
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
