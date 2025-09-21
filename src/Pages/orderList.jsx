import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../Components/header";
import Sidebar from "../Components/Sidebar";
import Order from "../Components/order";

const SIDEBAR_WIDTH = 212;
const HEADER_HEIGHT = 68;
const SIDE_MARGIN = 20;

export default function OrderList() {
  const leftOffset = `calc(${SIDE_MARGIN}px + ${SIDEBAR_WIDTH}px)`;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />
      <Box
        component="header"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: (theme) => (theme?.zIndex?.appBar ?? 1200),
          ml: { xs: 0, md: leftOffset },
          mr: 0,
          borderBottom: "1px solid",
          borderColor: "divider",
          backgroundColor: (theme) => theme.palette.background.paper,
          height: `${HEADER_HEIGHT}px`,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Header />
      </Box>

      <Box sx={{ display: "flex", flex: 1, width: "100%", overflow: "hidden" }}>
        <Box
          component="aside"
          sx={{
            width: SIDEBAR_WIDTH,
            position: "fixed",
            top: 0,
            left: SIDE_MARGIN,
            bottom: 0,
            zIndex: 1100,
            borderRight: "1px solid",
            borderColor: "divider",
            bgcolor: (theme) => theme.palette.background.paper,
            overflowX: "hidden",
            overflowY: "auto",
            display: { xs: "none", md: "block" },
            boxSizing: "border-box",
          }}
        >
          <Sidebar />
        </Box>

        <Box
          component="main"
          sx={{
            flex: 1,
            overflowY: "auto",
            p: { xs: 2, sm: 2, md: 3 },
            ml: { xs: 0, md: leftOffset },
            pt: { xs: `${HEADER_HEIGHT}px`, md: 0 },
            minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
            bgcolor: "background.default",
            boxSizing: "border-box",
          }}
        >
          <Order />
        </Box>
      </Box>
    </Box>
  );
}
