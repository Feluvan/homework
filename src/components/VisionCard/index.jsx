import { Box } from "@mui/material";
import { visionCardSx } from "../../theme/visionTheme";

export default function VisionCard({ children, sx = {}, ...props }) {
  return (
    <Box sx={{ ...visionCardSx, p: 2.5, ...sx }} {...props}>
      {children}
    </Box>
  );
}
