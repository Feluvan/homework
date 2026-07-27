import { createTheme } from "@mui/material/styles";

const visionColors = {
  info: "#0075ff",
  success: "#01b574",
  warning: "#ffb547",
  error: "#e31a1a",
  text: "#a0aec0",
  white: "#ffffff",
  dark: "#0f1535",
  card: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
  cardBorder: "1px solid rgba(226, 232, 240, 0.08)",
};

export const visionGradients = {
  card: visionColors.card,
  primary: "linear-gradient(97.89deg, #4318ff 70.67%, rgba(117, 122, 140, 0) 108.55%)",
  info: "linear-gradient(97.89deg, #0075ff 70.67%, #21d4fd 108.55%)",
  bill: "linear-gradient(127.09deg, rgba(24, 29, 60, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
};

export const visionCardSx = {
  background: visionGradients.card,
  border: visionColors.cardBorder,
  borderRadius: "20px",
  backdropFilter: "blur(120px)",
  boxShadow: "0 20px 27px 0 rgba(0, 0, 0, 0.05)",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: visionColors.info },
    success: { main: visionColors.success },
    warning: { main: visionColors.warning },
    error: { main: visionColors.error },
    background: {
      default: "#030c1d",
      paper: "#111c44",
    },
    text: {
      primary: visionColors.white,
      secondary: visionColors.text,
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, fontSize: "1.5rem" },
    h2: { fontWeight: 700, fontSize: "1.125rem" },
    h3: { fontWeight: 700, fontSize: "1rem" },
    body2: { color: visionColors.text, fontSize: "0.875rem" },
    caption: { color: visionColors.text, fontSize: "0.75rem" },
  },
  shape: { borderRadius: 20 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(ellipse at top, #1a237e 0%, #030c1d 50%, #000510 100%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "12px",
          fontWeight: 600,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(226, 232, 240, 0.08)",
          color: visionColors.text,
          fontSize: "0.8rem",
        },
        head: {
          color: visionColors.text,
          fontWeight: 500,
          fontSize: "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        },
      },
    },
  },
});

export default theme;
