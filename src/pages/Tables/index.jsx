import { Box, Chip, Link, Typography } from "@mui/material";
import Table from "../../components/Table";
import VisionCard from "../../components/VisionCard";

const authors = [
  {
    name: "John Michael",
    email: "john@creative-tim.com",
    role: "Manager",
    dept: "Organization",
    status: "Online",
    employed: "23/04/18",
  },
  {
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    role: "Programmer",
    dept: "Developer",
    status: "Offline",
    employed: "11/01/19",
  },
  {
    name: "Laurent Michael",
    email: "laurent@creative-tim.com",
    role: "Executive",
    dept: "Projects",
    status: "Online",
    employed: "19/09/17",
  },
  {
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    role: "Programmer",
    dept: "Developer",
    status: "Online",
    employed: "24/12/08",
  },
];

export default function Tables() {
  return (
    <Box sx={{ pb: 2, display: "flex", flexDirection: "column", gap: 2 }}>
      <VisionCard>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Authors Table.
        </Typography>
        <Box sx={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "12px 8px" }}>AUTHOR</th>
                <th style={{ textAlign: "left", padding: "12px 8px" }}>FUNCTION</th>
                <th style={{ textAlign: "left", padding: "12px 8px" }}>STATUS</th>
                <th style={{ textAlign: "left", padding: "12px 8px" }}>EMPLOYED</th>
                <th style={{ textAlign: "right", padding: "12px 8px" }} />
              </tr>
            </thead>
            <tbody>
              {authors.map((author) => (
                <tr key={author.email}>
                  <td style={{ padding: "14px 8px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: "12px",
                          background: "linear-gradient(135deg, #4318ff, #0075ff)",
                        }}
                      />
                      <Box>
                        <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                          {author.name}
                        </Typography>
                        <Typography variant="caption">{author.email}</Typography>
                      </Box>
                    </Box>
                  </td>
                  <td style={{ padding: "14px 8px" }}>
                    <Typography variant="body2" sx={{ color: "text.primary", fontSize: "0.85rem" }}>
                      {author.role}
                    </Typography>
                    <Typography variant="caption">{author.dept}</Typography>
                  </td>
                  <td style={{ padding: "14px 8px" }}>
                    <Chip
                      label={author.status}
                      size="small"
                      sx={{
                        bgcolor: author.status === "Online" ? "rgba(1,181,116,0.15)" : "transparent",
                        color: author.status === "Online" ? "#01b574" : "#a0aec0",
                        border: "1px solid",
                        borderColor:
                          author.status === "Online" ? "rgba(1,181,116,0.3)" : "rgba(226,232,240,0.2)",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                      }}
                    />
                  </td>
                  <td style={{ padding: "14px 8px", color: "#a0aec0", fontSize: "0.85rem" }}>
                    {author.employed}
                  </td>
                  <td style={{ padding: "14px 8px", textAlign: "right" }}>
                    <Link href="#" underline="hover" sx={{ fontSize: "0.8rem", fontWeight: 600 }}>
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </VisionCard>

      <Table title="Projects" />
    </Box>
  );
}
