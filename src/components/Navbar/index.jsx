import {
  Box,
  Breadcrumbs,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "Dashboard",
  "/tables": "Tables",
  "/billing": "Billing",
  "/profile": "Profile",
};

export default function Navbar() {
  const { pathname } = useLocation();
  const title = titles[pathname] || "Dashboard";

  return (
    <Box
      component="header"
      sx={{
        px: { xs: 2, md: 3 },
        py: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      <Box>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            mb: 0.5,
            "& .MuiBreadcrumbs-separator": { color: "text.secondary" },
          }}
        >
          <Link underline="hover" color="text.secondary" href="#" fontSize="0.8rem">
            Pages
          </Link>
          <Typography color="text.primary" fontSize="0.8rem">
            {title}
          </Typography>
        </Breadcrumbs>
        <Typography variant="h1">{title}</Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <TextField
          size="small"
          placeholder="Type here..."
          sx={{
            width: 200,
            "& .MuiOutlinedInput-root": {
              borderRadius: "15px",
              background: "rgba(15, 21, 53, 0.8)",
              color: "text.primary",
              fontSize: "0.85rem",
              "& fieldset": { borderColor: "rgba(226,232,240,0.15)" },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: 18, color: "text.secondary" }} />
              </InputAdornment>
            ),
          }}
        />
        <Link
          href="#"
          underline="none"
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 0.5,
            color: "text.primary",
            fontSize: "0.85rem",
            fontWeight: 600,
          }}
        >
          <AccountCircleIcon fontSize="small" />
          Sign In
        </Link>
        <IconButton size="small" sx={{ color: "text.primary" }}>
          <SettingsIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: "text.primary" }}>
          <NotificationsIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
