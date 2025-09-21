import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Frame from "../Components/frame";
import Header from "../Components/header";
import RightBar from "../Components/rightBar";
import Sidebar from "../Components/Sidebar";

const SIDEBAR_WIDTH = 212;
const RIGHTBAR_WIDTH = 280;
const HEADER_HEIGHT = 68;
const SIDE_MARGIN = 20;

export default function Home() {
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
          mr: { xs: 0, md: `calc(${RIGHTBAR_WIDTH}px + ${SIDE_MARGIN}px)` },
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
            left: `${SIDE_MARGIN}px`,
            bottom: 0,
            zIndex: 1100,
            borderRight: "1px solid",
            borderColor: "divider",
            bgcolor: (theme) => theme.palette.background.paper,
            overflowX: "hidden",
            overflowY: "auto",
            boxSizing: "border-box",
            display: { xs: "none", md: "block" },
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
            mr: { xs: 0, md: `calc(${RIGHTBAR_WIDTH}px + ${SIDE_MARGIN}px)` },
            minWidth: 0,
            boxSizing: "border-box",
            pt: { xs: `${HEADER_HEIGHT}px`, md: 0 },
          }}
        >
          <Frame />
        </Box>

        <Box
          component="aside"
          sx={{
            width: RIGHTBAR_WIDTH,
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 1150,
            borderLeft: "1px solid",
            borderColor: "divider",
            display: { xs: "none", md: "block" },
            bgcolor: (theme) => theme.palette.background.paper,
            overflowY: "auto",
            overflowX: "hidden",
            boxSizing: "border-box",
          }}
        >
          <RightBar />
        </Box>
      </Box>
    </Box>
  );
}
