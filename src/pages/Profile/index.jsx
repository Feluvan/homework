import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import VisionCard from "../../components/VisionCard";
import { visionGradients } from "../../theme/visionTheme";

const settings = [
  { label: "Email me when someone follows me", checked: true },
  { label: "Email me when someone answers on my post", checked: false },
  { label: "Email me when someone mentions me", checked: true },
  { label: "New launches and projects", checked: false },
  { label: "Monthly product updates", checked: true },
  { label: "Subscribe to newsletter", checked: false },
];

const projects = [
  { title: "Modern", desc: "As Uber works through a huge amount of internal management turmoil." },
  { title: "Scandinavian", desc: "Music is something that every person has his or her own specific opinion about." },
  { title: "Minimalist", desc: "Different people have different taste, especially various types of music." },
];

export default function Profile() {
  return (
    <Box sx={{ pb: 2 }}>
      <VisionCard sx={{ mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: 72,
                height: 72,
                borderRadius: "15px",
                background: visionGradients.primary,
              }}
            />
            <Box>
              <Typography variant="h2">Mark Johnson</Typography>
              <Typography variant="caption">mark@simmmple.com</Typography>
            </Box>
          </Box>
          <ButtonGroup variant="contained" size="small">
            <Button>OVERVIEW</Button>
            <Button sx={{ bgcolor: "rgba(255,255,255,0.08)", color: "text.secondary" }}>
              TEAMS
            </Button>
            <Button sx={{ bgcolor: "rgba(255,255,255,0.08)", color: "text.secondary" }}>
              PROJECTS
            </Button>
          </ButtonGroup>
        </Box>
      </VisionCard>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <VisionCard
            sx={{
              minHeight: 220,
              background:
                "linear-gradient(126.97deg, rgba(0,117,255,0.35) 28.26%, rgba(10,14,35,0.71) 91.2%)",
            }}
          >
            <Typography variant="caption">Welcome back!</Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, my: 1 }}>
              Nice to see you, Mark Johnson!
            </Typography>
            <Button variant="text" sx={{ color: "text.primary", p: 0, fontWeight: 600 }}>
              Turn on your car →
            </Button>
          </VisionCard>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <VisionCard sx={{ height: "100%" }}>
            <Typography variant="caption">Car Informations</Typography>
            <Box sx={{ textAlign: "center", my: 2 }}>
              <Typography variant="h2" sx={{ fontSize: "2rem" }}>
                68%
              </Typography>
              <Typography variant="caption">Current load</Typography>
            </Box>
            <Grid container spacing={1}>
              {[
                { label: "Battery Health", value: "76%" },
                { label: "Efficiency", value: "+20%" },
                { label: "Consumption", value: "163W/km" },
                { label: "This Week", value: "1.342km" },
              ].map((item) => (
                <Grid key={item.label} size={6}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: "12px",
                      border: "1px solid rgba(226,232,240,0.08)",
                    }}
                  >
                    <Typography variant="caption">{item.label}</Typography>
                    <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 700 }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </VisionCard>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <VisionCard sx={{ height: "100%" }}>
            <Typography variant="h2" sx={{ mb: 1 }}>
              Profile Informations
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Hi, I&apos;m Mark Johnson, Decisions: If you can&apos;t decide, the answer is no.
            </Typography>
            {[
              ["Full Name", "Mark Johnson"],
              ["Mobile", "(44) 123 1234 123"],
              ["Email", "mark@simmmple.com"],
              ["Location", "United States"],
            ].map(([label, value]) => (
              <Box key={label} sx={{ mb: 1 }}>
                <Typography variant="caption">{label}: </Typography>
                <Typography variant="body2" component="span" sx={{ color: "text.primary" }}>
                  {value}
                </Typography>
              </Box>
            ))}
          </VisionCard>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 4 }}>
          <VisionCard>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Platform Settings
            </Typography>
            <Typography variant="caption" sx={{ color: "text.primary", fontWeight: 700, mb: 1, display: "block" }}>
              ACCOUNT
            </Typography>
            {settings.slice(0, 3).map((item) => (
              <Box
                key={item.label}
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}
              >
                <Typography variant="caption" sx={{ maxWidth: "75%" }}>
                  {item.label}
                </Typography>
                <Switch size="small" defaultChecked={item.checked} />
              </Box>
            ))}
            <Typography
              variant="caption"
              sx={{ color: "text.primary", fontWeight: 700, mb: 1, mt: 2, display: "block" }}
            >
              APPLICATION
            </Typography>
            {settings.slice(3).map((item) => (
              <Box
                key={item.label}
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}
              >
                <Typography variant="caption" sx={{ maxWidth: "75%" }}>
                  {item.label}
                </Typography>
                <Switch size="small" defaultChecked={item.checked} />
              </Box>
            ))}
          </VisionCard>
        </Grid>
        <Grid size={{ xs: 12, lg: 8 }}>
          <VisionCard>
            <Typography variant="h2">Projects</Typography>
            <Typography variant="caption" sx={{ display: "block", mb: 2 }}>
              Architects design houses
            </Typography>
            <Grid container spacing={2}>
              {projects.map((project) => (
                <Grid key={project.title} size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      borderRadius: "15px",
                      overflow: "hidden",
                      border: "1px solid rgba(226,232,240,0.08)",
                    }}
                  >
                    <Box
                      sx={{
                        height: 120,
                        background:
                          "linear-gradient(135deg, rgba(0,117,255,0.3), rgba(67,24,255,0.4))",
                      }}
                    />
                    <Box sx={{ p: 2 }}>
                      <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 700, mb: 0.5 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="caption" sx={{ display: "block", mb: 1.5 }}>
                        {project.desc}
                      </Typography>
                      <Button size="small" variant="outlined" sx={{ fontSize: "0.65rem" }}>
                        VIEW ALL
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </VisionCard>
        </Grid>
      </Grid>
    </Box>
  );
}
