import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        py: 3,
        px: { xs: 2, md: 3 },
      }}
    >
      <Typography variant="caption" color="text.secondary">
        @ 2021, Made with ❤️ by Simmmple & Creative Tim
      </Typography>
      <Box sx={{ display: "flex", gap: 3 }}>
        {["Marketplace", "Blog", "License"].map((item) => (
          <Link
            key={item}
            href="#"
            underline="hover"
            sx={{ color: "text.secondary", fontSize: "0.75rem" }}
          >
            {item}
          </Link>
        ))}
      </Box>
    </Box>
  );
}
