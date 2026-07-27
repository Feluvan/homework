import { Box, LinearProgress, Typography } from "@mui/material";
import VisionCard from "../VisionCard";

const projects = [
  {
    company: "Chakra Soft UI Version",
    budget: "$14,000",
    completion: 60,
    members: ["A", "B", "C"],
  },
  {
    company: "Add Progress Track",
    budget: "$3,000",
    completion: 10,
    members: ["D", "E"],
  },
  {
    company: "Fix Platform Errors",
    budget: "Not set",
    completion: 100,
    members: ["F", "G", "H"],
  },
  {
    company: "Launch our Mobile App",
    budget: "$32,000",
    completion: 100,
    members: ["I", "J"],
  },
  {
    company: "Add the New Pricing Page",
    budget: "$400",
    completion: 25,
    members: ["K"],
  },
];

export default function Table({ title = "Projects", showCheck = true }) {
  return (
    <VisionCard sx={{ height: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h2">{title}</Typography>
        {showCheck && (
          <Typography variant="caption" sx={{ color: "success.main" }}>
            ✓ 30 done this month
          </Typography>
        )}
      </Box>
      <Box sx={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "12px 8px" }}>COMPANIES</th>
              <th style={{ textAlign: "left", padding: "12px 8px" }}>MEMBERS</th>
              <th style={{ textAlign: "left", padding: "12px 8px" }}>BUDGET</th>
              <th style={{ textAlign: "left", padding: "12px 8px" }}>COMPLETION</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((row) => (
              <tr key={row.company}>
                <td style={{ padding: "14px 8px", color: "#fff", fontSize: "0.85rem" }}>
                  {row.company}
                </td>
                <td style={{ padding: "14px 8px" }}>
                  <Box sx={{ display: "flex" }}>
                    {row.members.map((m, i) => (
                      <Box
                        key={m}
                        sx={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: `hsl(${i * 60 + 200}, 70%, 55%)`,
                          border: "2px solid #111c44",
                          ml: i ? -1 : 0,
                          display: "grid",
                          placeItems: "center",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          color: "#fff",
                        }}
                      >
                        {m}
                      </Box>
                    ))}
                  </Box>
                </td>
                <td style={{ padding: "14px 8px", color: "#a0aec0", fontSize: "0.85rem" }}>
                  {row.budget}
                </td>
                <td style={{ padding: "14px 8px", minWidth: 140 }}>
                  <Typography variant="caption" sx={{ color: "text.primary", fontWeight: 600 }}>
                    {row.completion}%
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={row.completion}
                    sx={{
                      mt: 0.5,
                      height: 4,
                      borderRadius: 4,
                      background: "rgba(255,255,255,0.08)",
                      "& .MuiLinearProgress-bar": {
                        borderRadius: 4,
                        background: "linear-gradient(90deg, #0075ff, #21d4fd)",
                      },
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </VisionCard>
  );
}
