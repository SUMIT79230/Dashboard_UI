import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const HIGHLIGHT_BG = "rgba(13,88,255,0.06)"; 
const MUTED = "#8b97a1"; 
const LIGHT_BG = "#f7fbfd"; 
const CARD_BG = "background.paper";

const Card = styled(Paper)(({ theme }) => ({
  borderRadius: 14,
  padding: theme.spacing(2),
  boxShadow: "none",
  backgroundColor: theme.palette.background.paper,
}));

function StatCard({ title, value, change, positive = true, highlight = false }) {
  return (
    <Card sx={{ bgcolor: highlight ? HIGHLIGHT_BG : CARD_BG, minHeight: 104 ,display:"flex",justifyContent:"center"}}>
      <Typography variant="caption" sx={{  fontWeight: 700 }}>
        {title}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
        <Typography sx={{ fontSize: 28, fontWeight: 800, lineHeight: 1 }}>
          {value}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, ml: 1 }}>
          <Typography
            variant="caption"
            sx={{ color: positive ? "success.main" : "text.secondary", fontWeight: 700 }}
          >
            {change}
          </Typography>
          {positive ? (
            <ArrowUpwardIcon sx={{ fontSize: 14, color: "success.main" }} />
          ) : (
            <ArrowDownwardIcon sx={{ fontSize: 14, color: "text.secondary" }} />
          )}
        </Box>
      </Box>
    </Card>
  );
}

function SmallBarChartCard() {
  return (
    <Card sx={{ height: "100%", minHeight: 220, p: 2, borderRadius: 2 ,backgroundColor:"#F7F9FB"}}>;
      <Typography
        variant="subtitle2"
        sx={{ color: "black", mb: 1, fontWeight: 600 }}
      >
        Projections vs Actuals
      </Typography>

      <Box sx={{ width: "100%", height: 160 }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 360 160"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#c1c1c1ff" fontSize="9" opacity="0.95">
            <text x="8" y="21">30M</text>
            <text x="8" y="54">20M</text>
            <text x="8" y="87">10M</text>
            <text x="8" y="124">0</text>
          </g>
          <g stroke="#e1e1e1ff" strokeWidth="0.5">
            <line x1="36" y1="20" x2="352" y2="20" />   
            <line x1="36" y1="53" x2="352" y2="53" />   
            <line x1="36" y1="86" x2="352" y2="86" />   
            <line x1="36" y1="120" x2="352" y2="120" /> 
          </g>

          {[
            { x: 50, proj: 12, actual: 58 }, 
            { x: 90, proj: 18, actual: 46 }, 
            { x: 130, proj: 14, actual: 68 }, 
            { x: 170, proj: 22, actual: 84 }, 
            { x: 210, proj: 12, actual: 50 }, 
            { x: 250, proj: 18, actual: 76 }, 
          ].map((b, i) => {
            const baseY = 120;
            const barW = 16;
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

            const actualY = baseY - b.actual;
            const projY = actualY - b.proj;

            return (
              <g key={i}>
                <rect
                  x={b.x}
                  y={projY}
                  width={barW}
                  height={b.proj}
                  rx="1"
                  fill="#d6e0ecff"
                />
                <rect
                  x={b.x}
                  y={actualY}
                  width={barW}
                  height={b.actual}
                  rx="1"
                  fill="#9ebadbff"
                />

                {/* month label */}
                <text
                  x={b.x + barW / 2}
                  y={140}
                  fontSize="9"
                  textAnchor="middle"
                  fill="#9aa6ad"
                >
                  {months[i]}
                </text>
              </g>
            );
          })}
        </svg>
      </Box>
    </Card>
  );
}

function RevenueLineChartCard() {
  return (
    <Card sx={{ml:4,mr:3,backgroundColor:"#F7F9FB"}}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
        <Typography variant="subtitle2" sx={{ color: "1C1C1C", mr: 1,fontWeight:"600" }}>
          Revenue
        </Typography>
        <Box sx={{ width: 2, height: 18, bgcolor: "#e4e4e4ff", borderRadius: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#111111" }} />
            <Typography variant="caption" sx={{ color: "text.primary" }}>
              Current Week <Box component="span" sx={{ fontWeight: 700, ml: 0.5 }}> $58,211</Box>
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#cfe9ff" }} />
            <Typography variant="caption" sx={{ color: "text.primary" }}>
              Previous Week <Box component="span" sx={{ fontWeight: 700, ml: 0.5 }}>$68,768</Box>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: 220 }}>
        <svg width="100%" height="100%" viewBox="0 0 760 260" preserveAspectRatio="none" role="img" aria-label="Revenue chart">
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1="50" x2="740" y1={30 + i * 48} y2={30 + i * 48} stroke="#e6e6e6ff" strokeWidth="1" />
          ))}
          <g fill="#9d9d9dff" fontSize="11">
            <text x="10" y="36">30M</text>
            <text x="10" y="84">20M</text>
            <text x="10" y="132">10M</text>
            <text x="10" y="180">0</text>
          </g>
          <path
            d="M50 120
              C120 70, 220 60, 330 95
              S540 120, 660 100"
            fill="none"
            stroke="#bcd6ee"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M70 130
              C110 180, 210 190, 320 100
              S520 80, 530 100"
            fill="none"
            stroke="#111111"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M530 100
              S700 160, 740 120"
            fill="none"
            stroke="#111111"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeDasharray="6 6"
            opacity="0.95"
          />
          {["Jan","Feb","Mar","Apr","May","Jun"].map((m, i) => (
            <text key={m} x={50 + i * 110} y="210" fontSize="11" fill="#9aa6ad">{m}</text>
          ))}
        </svg>
      </Box>
    </Card>
  );
}

function RevenueByLocationCard() {
  const rows = [
    { city: "New York", value: 72, color: "#2b2b2b" },
    { city: "San Francisco", value: 39, color: "#9be5b1" },
    { city: "Sydney", value: 25, color: "#a8d3ff" },
    { city: "Singapore", value: 61, color: "#67b5ff" },
  ];

  const max = Math.max(...rows.map((r) => r.value));

  return (
    <Card sx={{backgroundColor:"#F7F9FB" ,p: 2 ,ml:4,pb:4}}>
      <Typography variant="subtitle2" sx={{  mb: 2 ,fontWeight:600}}>
        Revenue by Location
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: 120,
          borderRadius: 2,
          bgcolor: LIGHT_BG,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
          overflow: "hidden",
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <g fill="#eaf6ff">
            <path d="M6 72c10-8 28-16 52-14 20 1 40-8 60-5 10 1 22 8 28 14v20H6z" opacity="1"/>
            <path d="M10 40c8-5 24-8 42-6 14 1 26 0 40-3 8-2 20-2 28 0 8 2 14 6 16 9v6H10z" opacity="1"/>
          </g>

          <g fill="#f0fbff">
            <ellipse cx="36" cy="38" rx="20" ry="8" />
            <ellipse cx="120" cy="28" rx="26" ry="10" />
            <ellipse cx="150" cy="78" rx="18" ry="6" />
          </g>
          <g>
            <circle cx="44" cy="48" r="3.5" fill="#1f8cff" />
            <circle cx="88" cy="32" r="3.5" fill="#1f8cff" />
            <circle cx="152" cy="66" r="3.5" fill="#1f8cff" />
            <circle cx="128" cy="92" r="3.5" fill="#1f8cff" />
          </g>
          <g fill="#000" opacity="0.06">
            <circle cx="44" cy="52" r="0.9" />
            <circle cx="88" cy="36" r="0.9" />
            <circle cx="152" cy="70" r="0.9" />
            <circle cx="128" cy="96" r="0.9" />
          </g>
        </svg>
      </Box>
      <Box>
        {rows.map((r, i) => (
          <Box key={r.city} sx={{ mb: i === rows.length - 1 ? 0 : 1.25 }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 0.6 }}>
              <Typography variant="body2" sx={{ color: MUTED }}>{r.city}</Typography>
              <Typography variant="body2" sx={{ fontWeight: 800 }}>{`${r.value}K`}</Typography>
            </Box>

            <Box sx={{ height: 6, borderRadius: 3, background: "#eef6fb", overflow: "hidden" }}>
              <Box
                sx={{
                  height: "100%",
                  width: `${Math.round((r.value / max) * 100)}%`,
                  borderRadius: 3,
                  background: r.color,
                  transition: "width .5s ease",
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
}

function TopSellingProductsCard() {
  const rows = [
    { name: "ASOS Ridley High Waist", price: "$79.49", qty: 82, amount: "$6,518.18" },
    { name: "Marco Lightweight Shirt", price: "$128.50", qty: 37, amount: "$4,754.50" },
    { name: "Half Sleeve Shirt", price: "$39.99", qty: 64, amount: "$2,559.36" },
    { name: "Lightweight Jacket", price: "$20.00", qty: 184, amount: "$3,680.00" },
    { name: "Marco Shoes", price: "$79.49", qty: 64, amount: "$1,965.81" },
  ];

  return (
    <Card sx={{ml:4 ,mr:2,backgroundColor:"#F7F9FB"}}>
      <Typography variant="subtitle1" sx={{ mb: 1 ,fontWeight:"600"}}>
        Top Selling Products
      </Typography>

      <Box sx={{ overflowX: "auto" }}>
        <Table size="small" sx={{ minWidth: 650, borderCollapse: "collapse" }}>
          <TableRow>
            <TableCell sx={{ color: MUTED, fontSize: 12, fontWeight: 700, borderBottom: "1px solid #e5eaef" }}>
              Name
            </TableCell>
            <TableCell sx={{ color: MUTED, fontSize: 12, fontWeight: 700, borderBottom: "1px solid #e5eaef" }}>
              Price
            </TableCell>
            <TableCell sx={{ color: MUTED, fontSize: 12, fontWeight: 700, borderBottom: "1px solid #e5eaef" }}>
              Quantity
            </TableCell>
            <TableCell
              sx={{
                color: MUTED,
                fontSize: 12,
                fontWeight: 700,
                textAlign: "right",
                borderBottom: "1px solid #e5eaef",
              }}
            >
              Amount
            </TableCell>
          </TableRow>

          <TableBody>
            {rows.map((r, i) => (
              <TableRow key={i}>
                <TableCell sx={{ borderBottom: "none", py: 1.25 }}>{r.name}</TableCell>
                <TableCell sx={{ borderBottom: "none", py: 1.25 }}>{r.price}</TableCell>
                <TableCell sx={{ borderBottom: "none", py: 1.25 }}>{r.qty}</TableCell>
                <TableCell
                  sx={{ borderBottom: "none", py: 1.25, textAlign: "right", fontWeight: 600 }}
                >
                  {r.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
}

function TotalSalesCard() {
  const items = [
    { label: "Direct", value: "$300.56", color: "#2b2b2b" },
    { label: "Affiliate", value: "$135.18", color: "#9be5b1" },
    { label: "Sponsored", value: "$154.02", color: "#d7ebffff" },
    { label: "E-mail", value: "$48.96", color: "#67b5ffff" },
  ];

  return (
    <Card sx={{ p: 2, display: "flex", flexDirection: "column", alignItems: "stretch",ml:4,backgroundColor:"#F7F9FB" }}>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
        Total Sales
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 1 }}>
        <Box sx={{ width: 200, height: 140, position: "relative" }}>
          <svg viewBox="0 0 200 160" width="160" height="140" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <g transform="translate(100,80)">
              <circle
                r="48"
                stroke="#2b2b2b"
                strokeWidth="18"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="132 400"
                transform="rotate(-90)"
              />
              <circle
                r="48"
                stroke="#9be5b1"
                strokeWidth="18"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="100 500"
                strokeDashoffset="-140"
                transform="rotate(-90)"
              />
              <circle
                r="48"
                stroke="#B1E3FF"
                strokeWidth="18"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="30 350"
                strokeDashoffset="-210"
                transform="rotate(-90)"
              />
              <circle
                r="48"
                stroke="#95A4FC"
                strokeWidth="18"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="260 600"
                strokeDashoffset="-250"
                transform="rotate(-90)"
              />

            </g>
          </svg>
          <Box
            sx={{
              position: "absolute",
              left: "34%",
              top: "62%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#717171ff",
              color: "white",
              px: 0.75,
              py: 0.2,
              borderRadius: 1.5,
              fontWeight: 500,
              fontSize: 12,
              boxShadow: (theme) => `0 6px 14px ${theme.palette.mode === "light" ? "rgba(15,23,42,0.10)" : "rgba(0,0,0,0.5)"}`,
              pointerEvents: "none",
            }}
          >
            38.6%
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 1,ml:2,mr:2, display: "flex", flexDirection: "column", gap: 1 }}>
        {items.map((it) => (
          <Box
            key={it.label}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, minWidth: 0 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: it.color, flexShrink: 0 }} />
              <Typography variant="body2" sx={{ color: "text.primary", fontSize: 13 }}>
                {it.label}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 700, fontSize: 13 }}>
              {it.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
}

export default function Frame() {
  return (
    <Box sx={{ml:2}}>
      <Typography variant="subtitle2" sx={{ mb: 4 ,fontWeight:600,ml:4}}>eCommerce</Typography>
        <Grid sx = {{marginLeft:"32px"}} container spacing={12} alignItems="stretch">
          <Grid item xs={2} md={2} >
            <Grid container spacing={12} sx ={{marginBottom:"40px"}}>
              <Grid item xs={2} sm={2} sx={{backgroundColor:"#E3F5FF"}}>
                <StatCard title="Customers" value="3,781" change="+11.01%" positive highlight />
              </Grid>

              <Grid item xs={2} sm={2}>
                <StatCard title="Orders" value="1,219" change="-0.03%" positive={false} />
              </Grid>
            </Grid>
            <Grid container spacing={12}>
              <Grid item xs={2} sm={2}>
                <StatCard title="Revenue" value="$695" change="+15.03%" positive />
              </Grid>

              <Grid item xs={2} sm={2} sx={{backgroundColor:"#E5ECF6"}}>
                <StatCard title="Growth" value="30.1%" change="+6.08%" positive highlight />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <SmallBarChartCard />
          </Grid>
        </Grid>
      <Grid container spacing={2} sx={{ mt: 8,mb:8 }}>
        <Grid item xs={12} md={8}>
          <RevenueLineChartCard />
        </Grid>

        <Grid item xs={12} md={4}>
          <RevenueByLocationCard />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={8}>
          <TopSellingProductsCard />
        </Grid>

        <Grid item xs={12} md={4}>
          <TotalSalesCard />
        </Grid>
      </Grid>
    </Box>
  );
}
