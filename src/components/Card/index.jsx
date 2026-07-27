import { Box, Typography } from "@mui/material";
import VisionCard from "../VisionCard";

export default function StatCard({ title, value, change, icon, color = "#0075ff" }) {
  return (
    <VisionCard>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Box>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            {title}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, fontSize: "1.25rem", mb: 0.5 }}>
            {value}
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: change.startsWith("+") ? "success.main" : "error.main", fontWeight: 600 }}
          >
            {change}
          </Typography>
        </Box>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "12px",
            display: "grid",
            placeItems: "center",
            background: `linear-gradient(135deg, ${color}, ${color}99)`,
            color: "#fff",
          }}
        >
          {icon}
        </Box>
      </Box>
    </VisionCard>
  );
}
