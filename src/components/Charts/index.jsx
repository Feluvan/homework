import ReactApexChart from "react-apexcharts";
import { Box, Typography } from "@mui/material";
import VisionCard from "../VisionCard";

const lineOptions = {
  chart: {
    toolbar: { show: false },
    background: "transparent",
    foreColor: "#a0aec0",
  },
  colors: ["#0075ff", "#01b574"],
  stroke: { curve: "smooth", width: 3 },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.05,
    },
  },
  grid: { borderColor: "rgba(226,232,240,0.08)" },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
  yaxis: { labels: { formatter: (v) => `${v}k` } },
  legend: { show: false },
  dataLabels: { enabled: false },
};

const lineSeries = [
  { name: "Sales", data: [50, 40, 300, 220, 500, 250, 400, 230, 500, 200, 300, 450] },
  { name: "Revenue", data: [30, 90, 40, 140, 290, 290, 340, 230, 400, 300, 220, 310] },
];

const barOptions = {
  chart: {
    toolbar: { show: false },
    background: "transparent",
    foreColor: "#a0aec0",
  },
  colors: ["#fff"],
  plotOptions: {
    bar: { borderRadius: 6, columnWidth: "35%" },
  },
  grid: { borderColor: "rgba(226,232,240,0.08)" },
  xaxis: {
    categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
  dataLabels: { enabled: false },
};

const barSeries = [{ name: "Users", data: [450, 200, 100, 220, 500, 100, 400, 230, 500, 200] }];

const stats = [
  { label: "Users", value: "32,984" },
  { label: "Clicks", value: "2,42M" },
  { label: "Sales", value: "2,400$" },
  { label: "Items", value: "320" },
];

export function SalesChart() {
  return (
    <VisionCard sx={{ height: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Box>
          <Typography variant="h2">Sales overview</Typography>
          <Typography variant="caption">(+5%) more in 2021</Typography>
        </Box>
      </Box>
      <ReactApexChart options={lineOptions} series={lineSeries} type="area" height={300} />
    </VisionCard>
  );
}

export function ActiveUsersChart() {
  return (
    <VisionCard sx={{ height: "100%" }}>
      <Typography variant="h2" sx={{ mb: 0.5 }}>
        Active Users
      </Typography>
      <Typography variant="caption" sx={{ display: "block", mb: 2 }}>
        (+23) than last week
      </Typography>
      <ReactApexChart options={barOptions} series={barSeries} type="bar" height={180} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
          mt: 2,
        }}
      >
        {stats.map((item) => (
          <Box key={item.label}>
            <Typography variant="caption">{item.label}</Typography>
            <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 700 }}>
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </VisionCard>
  );
}

export default function Charts() {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { md: "2fr 1fr" }, gap: 2 }}>
      <SalesChart />
      <ActiveUsersChart />
    </Box>
  );
}
