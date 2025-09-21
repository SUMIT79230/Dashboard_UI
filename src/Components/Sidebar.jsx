import {
  Box,
  Avatar,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/School";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArticleIcon from "@mui/icons-material/Article";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DRAWER_WIDTH = 240;
const AVATAR_SIZE = 32;
const COLLAPSE_COL_W = 26;
const ICON_COL_W = 34;

const Root = styled(Box)(({ theme }) => ({
  width: DRAWER_WIDTH,
  height: "100%",
  boxSizing: "border-box",
  padding: theme.spacing(2, 1.25),
  overflowX: "hidden",
  background: theme.palette.background.paper,
}));

const SmallCaption = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  fontSize: 15,
  lineHeight: "18px",
  marginBottom: theme.spacing(0.5),
}));

const CollapseCell = styled("div")(({ theme }) => ({
  width: COLLAPSE_COL_W,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.text.disabled,
}));

const IconCell = styled("div")(({ theme }) => ({
  width: ICON_COL_W,
  minWidth: ICON_COL_W,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.text.secondary,
}));

const Bullet = styled(FiberManualRecordIcon)(({ theme }) => ({
  fontSize: 10,
  color: theme.palette.text.disabled,
}));

function Row({ collapseNode, iconNode, label, sub = false, onClick }) {
  return (
    <ListItemButton
      onClick={onClick}
      dense
      sx={{
        display: "grid",
        gridTemplateColumns: `${COLLAPSE_COL_W}px ${ICON_COL_W}px 1fr`,
        alignItems: "center",
        width: "100%",
        px: 0,
        py: sub ? "4px" : "5px",
        borderRadius: 1,
        "&:hover": {
          backgroundColor: (theme) => theme.palette.action.hover,
        },
        "& .MuiListItemText-primary": {
          fontSize: 14,
          lineHeight: "18px",
          color: "text.primary",
          fontWeight: sub ? 400 : 500,
        },
      }}
    >
      <CollapseCell>{collapseNode}</CollapseCell>
      <IconCell>{iconNode}</IconCell>
      <ListItemText primary={label} />
    </ListItemButton>
  );
}

export default function Sidebar() {
  const theme = useTheme();

  const iconBox = (IconComp, props = {}) => (
    <Box sx={{ width: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <IconComp sx={{ fontSize: 16, ...props }} />
    </Box>
  );

  const rightCaret = <ExpandMoreIcon sx={{ transform: "rotate(-90deg)", fontSize: 18, opacity: 0.95 }} />;
  const downCaret = <ExpandMoreIcon sx={{ fontSize: 18, opacity: 0.95 }} />;

  return (
    <Root role="navigation" aria-label="Sidebar">
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
        <Avatar
          sx={{
            width: AVATAR_SIZE,
            height: AVATAR_SIZE,
            bgcolor: "#f0f4fa", 
          }}
        >
          <PersonIcon sx={{ fontSize: AVATAR_SIZE * 0.8, color: "black" }} />
        </Avatar>
        <Typography variant="subtitle2" sx={{ fontSize: 15, lineHeight: "20px", fontWeight: 500 }}>
          ByeWind
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 1.25, alignItems: "center", mb: 0.5, mt: 3.5 }}>
        <SmallCaption>Favorites</SmallCaption>
        <SmallCaption sx={{ color: theme.palette.text.disabled }}>Recently</SmallCaption>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          m: 0,
          mb: 3,
          p: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            py: "6px",
            px: 0,
            m: 0,
          }}
        >
          <Bullet sx={{ fontSize: 10 }} />
          <Typography variant="body2" sx={{ fontSize: 14, lineHeight: "18px" }}>
            Overview
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            py: "6px",
            px: 0,
            m: 0,
          }}
        >
          <Bullet sx={{ fontSize: 10 }} />
          <Typography variant="body2" sx={{ fontSize: 14, lineHeight: "18px" }}>
            Projects
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 1 }}>
        <SmallCaption>Dashboards</SmallCaption>
      </Box>

      <List sx={{ p: 0, mb: 0.6 }}>
        <Row
          collapseNode={rightCaret}
          iconNode={iconBox(DashboardIcon)}
          label={<span style={{ fontWeight: 400 }}>Default</span>}
        />
        <Row collapseNode={rightCaret} iconNode={iconBox(ShoppingCartIcon)} label="eCommerce" />
        <Row collapseNode={rightCaret} iconNode={iconBox(WorkOutlineIcon)} label="Projects" />
        <Row collapseNode={rightCaret} iconNode={iconBox(SchoolIcon)} label="Online Courses" />
      </List>
      <Box sx={{ mt: 2.5 }}>
        <SmallCaption>Pages</SmallCaption>
      </Box>
      <List sx={{ p: 0 }}>
        <Row collapseNode={downCaret} iconNode={iconBox(PersonOutlineIcon)} label="User Profile" />
        <Row  iconNode={null} label="Overview" sub />
        <Row  iconNode={null} label="Projects" sub />
        <Row  iconNode={null} label="Campaigns" sub />
        <Row  iconNode={null} label="Documents" sub />
        <Row  iconNode={null} label="Followers" sub />
        <Row collapseNode={downCaret} iconNode={iconBox(AccountCircleIcon)} label="Account" />
        <Row collapseNode={downCaret} iconNode={iconBox(BusinessCenterIcon)} label="Corporate" />
        <Row collapseNode={downCaret} iconNode={iconBox(ArticleIcon)} label="Blog" />
        <Row collapseNode={downCaret} iconNode={iconBox(ChatBubbleOutlineIcon)} label="Social" />
      </List>
    </Root>
  );
}
