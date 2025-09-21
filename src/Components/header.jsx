import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  InputBase,
  Paper,
  ButtonBase,
  Breadcrumbs,
  Dialog,
  DialogContent,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import HistoryIcon from "@mui/icons-material/History";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { styled, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const HEADER_HEIGHT = 68;

const SearchRoot = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(0.25, 1),
  borderRadius: 18,
  background:
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : alpha(theme.palette.common.white, 0.03),
  boxShadow: "none",
  minWidth: 220,
  height: 34,
}));

export default function Header({ onMenuClick }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const mode = useSelector((s) => s.theme.mode);
  const navigate = useNavigate();

  const mdUp = useMediaQuery(theme.breakpoints.up("md")); 
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
  const xsDown = !smUp;

  const [searchValue, setSearchValue] = React.useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = React.useState(false);

  const onBreadcrumbClick = (e, key) => {
    e.preventDefault();
    if (key === "Dashboards") navigate("/");
    else if (key === "Order List") navigate("/orderList");
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{
          px: { xs: 1, sm: 2 },
          height: `${HEADER_HEIGHT}px`,
          justifyContent: "center",
          borderBottom: "1px solid",
          borderColor: "divider",
          backgroundColor: (theme) => theme.palette.background.paper,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: `${HEADER_HEIGHT}px`,
            px: { xs: 0.5, md: 1 },
            gap: { xs: 0.5, md: 1.5 },
          }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            {xsDown && (
              <IconButton
                size="small"
                onClick={() => onMenuClick?.()}
                aria-label="Open menu"
                sx={{ mr: 0.5 }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <DashboardIcon fontSize="small" sx={{ color: theme.palette.text.secondary }} />
            <StarBorderIcon fontSize="small" sx={{ color: theme.palette.text.secondary }} />

            {mdUp ? (
              <Breadcrumbs
                separator="/"
                aria-label="breadcrumb"
                sx={{
                  ml: 1,
                  "& .MuiBreadcrumbs-separator": { mx: 0.5, color: theme.palette.text.secondary, fontSize: 14 },
                }}
              >
                <ButtonBase
                  onClick={(e) => onBreadcrumbClick(e, "Dashboards")}
                  sx={{
                    borderRadius: 0.5,
                    py: 0.25,
                    px: 0.5,
                    color: theme.palette.text.secondary,
                    textTransform: "none",
                    fontSize: 14,
                    "&:hover": { textDecoration: "none", backgroundColor: theme.palette.action.hover },
                  }}
                >
                  <Typography sx={{ fontSize: 14, color: "text.secondary" }}>Dashboards</Typography>
                </ButtonBase>

                <ButtonBase
                  onClick={(e) => onBreadcrumbClick(e, "Order List")}
                  sx={{
                    borderRadius: 0.5,
                    py: 0.25,
                    px: 0.5,
                    color: theme.palette.text.secondary,
                    textTransform: "none",
                    fontSize: 14,
                    "&:hover": { textDecoration: "none", backgroundColor: theme.palette.action.hover },
                  }}
                >
                  <Typography sx={{ fontSize: 14, color: "text.secondary" }}>Order List</Typography>
                </ButtonBase>

              </Breadcrumbs>
            ) : smUp ? (
              <Box sx={{ ml: 1 }}>
                <ButtonBase
                  onClick={(e) => onBreadcrumbClick(e, "Dashboards")}
                  sx={{
                    borderRadius: 0.5,
                    py: 0.25,
                    px: 0.5,
                    color: theme.palette.text.secondary,
                    textTransform: "none",
                    fontSize: 13,
                    "&:hover": { textDecoration: "none", backgroundColor: theme.palette.action.hover },
                  }}
                >
                  <Typography sx={{ fontSize: 13, color: "text.secondary" }}>Dashboards / Order List</Typography>
                </ButtonBase>
              </Box>
            ) : (
              <Typography sx={{ ml: 1, fontSize: 15, fontWeight: 600 }}>Order List</Typography>
            )}
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            {smUp ? (
              <SearchRoot component="div" sx={{ display: { xs: "none", sm: "flex" } }}>
                <SearchIcon fontSize="small" sx={{ color: theme.palette.text.secondary }} />
                <InputBase
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  sx={{ fontSize: 14, ml: 0.5, width: 160, color: theme.palette.text.primary }}
                />
              </SearchRoot>
            ) : (
              <IconButton size="small" onClick={() => setMobileSearchOpen(true)} aria-label="Search">
                <SearchIcon />
              </IconButton>
            )}

            <IconButton size="small" sx={{ p: 0.5 }} onClick={() => dispatch(toggleTheme())} aria-label="Toggle theme">
              {mode === "light" ? <Brightness4Icon fontSize="small" sx={{ color: theme.palette.text.secondary }} /> : <Brightness7Icon fontSize="small" sx={{ color: theme.palette.text.secondary }} />}
            </IconButton>

            <IconButton size="small" sx={{ p: 0.5 }} aria-label="History">
              <HistoryIcon fontSize="small" sx={{ color: theme.palette.text.secondary }} />
            </IconButton>

            <IconButton size="small" sx={{ p: 0.5 }} aria-label="Notifications">
              <NotificationsIcon fontSize="small" sx={{ color: theme.palette.text.secondary }} />
            </IconButton>

            <IconButton size="small" sx={{ p: 0.5 }} aria-label="Apps">
              <DashboardIcon fontSize="small" sx={{ color: theme.palette.text.secondary }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Dialog open={mobileSearchOpen} onClose={() => setMobileSearchOpen(false)} fullWidth maxWidth="xs">
        <Box sx={{ display: "flex", alignItems: "center", px: 1, py: 0.5, borderBottom: "1px solid", borderColor: "divider" }}>
          <InputBase
            autoFocus
            placeholder="Search"
            fullWidth
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            sx={{ ml: 1, fontSize: 15 }}
            inputProps={{ "aria-label": "mobile-search" }}
          />
          <IconButton onClick={() => setMobileSearchOpen(false)} size="small" aria-label="Close search">
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent>
          <Typography variant="body2" color="text.secondary">Search results for “{searchValue || "…" }”</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
