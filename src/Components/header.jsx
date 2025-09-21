import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { useTheme } from "@mui/material/styles";
import {
  AppBar, Toolbar, Box, Typography, IconButton, InputBase, Paper, ButtonBase, Breadcrumbs
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import HistoryIcon from "@mui/icons-material/History";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { styled, alpha } from "@mui/material/styles";

const HEADER_HEIGHT = 68;

const SearchRoot = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(0.25, 1),
  borderRadius: 18,
  background: theme.palette.mode === "light" ? theme.palette.grey[100] : alpha(theme.palette.common.white, 0.03),
  boxShadow: "none",
  minWidth: 220,
  height: 34,
}));

export default function Header() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const mode = useSelector((s) => s.theme.mode);

  const onBreadcrumbClick = (e) => {
    e.preventDefault();
  };

  const iconColor = theme.palette.text.secondary;

  return (
    <AppBar position="static" color="inherit" elevation={0} sx={{ px: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: `${HEADER_HEIGHT}px`, px: 1 }}>
        <Box display="flex" alignItems="center" gap={1}>
          <DashboardIcon fontSize="small" sx={{ color: iconColor }} />
          <StarBorderIcon fontSize="small" sx={{ color: iconColor }} />

          <Breadcrumbs separator="/" aria-label="breadcrumb" sx={{ ml: 1, "& .MuiBreadcrumbs-separator": { mx: 0.5, color: theme.palette.text.secondary, fontSize: 14 } }}>
            <ButtonBase onClick={onBreadcrumbClick} sx={{ borderRadius: 0.5, py: 0.25, px: 0.5, color: theme.palette.text.secondary, textTransform: "none", fontSize: 14, "&:hover": { textDecoration: "none", backgroundColor: theme.palette.action.hover } }}>
              <Typography sx={{ fontSize: 14, color: "text.secondary" }}>Dashboards</Typography>
            </ButtonBase>
            <Typography color="text.primary" sx={{ fontSize: 14, fontWeight: 500 }}>Default</Typography>
          </Breadcrumbs>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <SearchRoot component="div">
            <SearchIcon fontSize="small" sx={{ color: theme.palette.text.secondary }} />
            <InputBase placeholder="Search" inputProps={{ "aria-label": "search" }} sx={{ fontSize: 14, ml: 0.5, width: 160, color: theme.palette.text.primary }} />
          </SearchRoot>

          <IconButton size="small" sx={{ p: 0.5 }} onClick={() => dispatch(toggleTheme())}>
            {mode === "light" ? <Brightness4Icon fontSize="small" sx={{ color: iconColor }} /> : <Brightness7Icon fontSize="small" sx={{ color: iconColor }} />}
          </IconButton>

          <IconButton size="small" sx={{ p: 0.5 }}>
            <HistoryIcon fontSize="small" sx={{ color: iconColor }} />
          </IconButton>

          <IconButton size="small" sx={{ p: 0.5 }}>
            <NotificationsIcon fontSize="small" sx={{ color: iconColor }} />
          </IconButton>

          <IconButton size="small" sx={{ p: 0.5 }}>
            <DashboardIcon fontSize="small" sx={{ color: iconColor }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
