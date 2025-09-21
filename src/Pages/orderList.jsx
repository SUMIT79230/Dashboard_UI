import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../Components/header";
import Sidebar from "../Components/Sidebar";
import Order from "../Components/order";

const SIDEBAR_WIDTH = 212;
const HEADER_HEIGHT = 68;

export default function OrderList() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />
      <Box
         component="header"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: (theme) => (theme?.zIndex?.appBar ?? 1200),
          ml: `${SIDEBAR_WIDTH}px`,
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
            left: 20,
            bottom: 0,
            zIndex: 1100,
            borderRight: "1px solid",
            borderColor: "divider",
            bgcolor: (theme) => theme.palette.background.paper,
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          <Sidebar />
        </Box>

        <Box
          component="main"
          sx={{
            marginLeft: "250px",
            px: 1,
            flex: 1,
            overflow: "auto",
            bgcolor: "background.default",
            minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
          }}
        >
          <Order />
        </Box>
      </Box>
    </Box>
  );
}
