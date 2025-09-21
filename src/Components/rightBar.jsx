import React from "react";
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  useTheme,
  useMediaQuery,
  Drawer,
  IconButton,
  Fab,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { blue, grey } from "@mui/material/colors";

const notifications = [
  { Icon: NotificationsOutlinedIcon, text: "You have a bug that needs...", time: "Just now" },
  { Icon: PersonOutlineOutlinedIcon, text: "New user registered", time: "59 minutes ago" },
  { Icon: BugReportOutlinedIcon, text: "You have a bug that needs...", time: "12 hours ago" },
  { Icon: NotificationsActiveOutlinedIcon, text: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
];

const activities = [
  { avatarUrl: "https://i.pravatar.cc/40?img=6", text: "You have a bug that needs...", time: "Just now" },
  { avatarUrl: "https://i.pravatar.cc/40?img=7", text: "Released a new version", time: "59 minutes ago" },
  { avatarUrl: "https://i.pravatar.cc/40?img=8", text: "Submitted a bug", time: "12 hours ago" },
  { avatarUrl: "https://i.pravatar.cc/40?img=9", text: "Modified A data in Page X", time: "Today, 11:59 AM" },
  { avatarUrl: "https://i.pravatar.cc/40?img=10", text: "Deleted a page in Project X", time: "Feb 2, 2023" },
];

const contacts = [
  { name: "Natali Craig", avatarUrl: "https://i.pravatar.cc/40?img=1" },
  { name: "Drew Cano", avatarUrl: "https://i.pravatar.cc/40?img=3" },
  { name: "Orlando Diggs", avatarUrl: "https://i.pravatar.cc/40?img=4" },
  { name: "Andi Lane", avatarUrl: "https://i.pravatar.cc/40?img=5" },
  { name: "Kate Morrison", avatarUrl: "https://i.pravatar.cc/40?img=2" },
  { name: "Koray Okumus", avatarUrl: "https://i.pravatar.cc/40?img=11" },
];

function IconBubble({ IconComponent }) {
  return (
    <Avatar sx={{ bgcolor: blue[50], color: "black", width: 28, height: 28 }}>
      <IconComponent fontSize="small" />
    </Avatar>
  );
}

function RightBarContent({ compact = false, onClose }) {
  const avatarSize = compact ? 26 : 28;
  const titleSize = compact ? "subtitle2" : "subtitle1";

  return (
    <Box sx={{ width: "100%", px: compact ? 1.5 : 2, pt: compact ? 1.5 : 0, pb: compact ? 2 : 4 }}>
      <Typography variant={titleSize} sx={{ fontWeight: 600, mb: compact ? 1 : 2 }}>
        Notifications
      </Typography>

      <List sx={{ p: 0, pt: compact ? 1 : 2, pb: compact ? 1 : 2 }}>
        {notifications.map((n, i) => (
          <ListItem key={i} alignItems="flex-start" disableGutters sx={{ py: compact ? 0.5 : 0.75 }}>
            <ListItemAvatar sx={{ minWidth: compact ? 40 : 48, mr: compact ? 1 : 1.5 }}>
              <IconBubble IconComponent={n.Icon} />
            </ListItemAvatar>

            <ListItemText
              primary={
                <Typography variant="body2" sx={{ fontWeight: 400, fontSize: compact ? 13 : 14, lineHeight: "18px" }}>
                  {n.text}
                </Typography>
              }
              secondary={
                <Typography variant="caption" sx={{ color: "text.secondary", fontSize: 12 }}>
                  {n.time}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>

      <Typography variant={titleSize} sx={{ fontWeight: 600, mb: compact ? 0.5 : 0.75 }}>
        Activities
      </Typography>

      <Box sx={{ position: "relative", pt: compact ? 1 : 2, pb: compact ? 1 : 1.5 }}>
        <List sx={{ p: 0, m: 0 }}>
          {activities.map((a, i) => {
            const isLast = i === activities.length - 1;
            return (
              <ListItem
                key={i}
                alignItems="flex-start"
                disableGutters
                sx={{
                  py: compact ? 0.75 : 1,
                }}
              >
                <ListItemAvatar
                  sx={{
                    minWidth: compact ? 42 : 48,
                    mr: compact ? 1.5 : 2,
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <Avatar
                    src={a.avatarUrl}
                    alt={a.text}
                    sx={{
                      width: avatarSize,
                      height: avatarSize,
                      fontSize: 13,
                      bgcolor: "#f0f4fa",
                      color: "black",
                      boxShadow: "none",
                    }}
                  >
                    {a.text
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 1)
                      .join("")}
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontWeight: 400, fontSize: compact ? 13 : 14, lineHeight: "18px" }}>
                      {a.text}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="caption" sx={{ color: "text.secondary", fontSize: 12 }}>
                      {a.time}
                    </Typography>
                  }
                  sx={{ pl: 0 }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: compact ? 18 : 20,
                    top: compact ? "78%" : "80%",
                    bottom: isLast ? "50%" : 0,
                    width: 2,
                    bgcolor: "#d7d7d7ff",
                    borderRadius: 1,
                    zIndex: 1,
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Stack direction="row" justifyContent="space-between" alignItems="center" mt={compact ? 1.5 : 2} mb={compact ? 0.5 : 1.5}>
        <Typography variant={titleSize} sx={{ fontWeight: 600 }}>
          Contacts
        </Typography>
      </Stack>

      <List sx={{ p: 0, m: 0 }}>
        {contacts.map((c, i) => (
          <ListItem key={i} disableGutters sx={{ py: compact ? 0.75 : 1 }}>
            <ListItemAvatar sx={{ minWidth: compact ? 36 : 48, mr: compact ? 1.5 : 3 }}>
              <Avatar
                src={c.avatarUrl}
                alt={c.name}
                sx={{
                  width: compact ? 28 : 32,
                  height: compact ? 28 : 32,
                  bgcolor: grey[100],
                  color: grey[900],
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                {c.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 1)
                  .join("")}
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary={
                <Typography variant="body2" sx={{ fontSize: compact ? 13 : 14, lineHeight: "18px", fontWeight: 400 }}>
                  {c.name}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default function RightBar() {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md")); 
  const smUp = useMediaQuery(theme.breakpoints.up("sm")); 

  const [drawerOpen, setDrawerOpen] = React.useState(false);


  if (mdUp) {
    return (
      <Box
        sx={{
          width: 320,
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
          px: 2,
          pt: 3,
          pb: 4,
        }}
      >
        <RightBarContent compact={false} />
      </Box>
    );
  }

  if (smUp && !mdUp) {
    return (
      <Box
        sx={{
          width: 240,
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 1150,
          borderLeft: "1px solid",
          borderColor: "divider",
          display: { xs: "none", sm: "block", md: "none" },
          bgcolor: (theme) => theme.palette.background.paper,
          overflowY: "auto",
          overflowX: "hidden",
          boxSizing: "border-box",
          px: 1.5,
          pt: 2,
          pb: 3,
        }}
      >
        <RightBarContent compact={true} />
      </Box>
    );
  }

  return (
    <>
      <Fab
        color="primary"
        size="small"
        aria-label="Open right bar"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: "fixed",
          right: 16,
          bottom: 18,
          zIndex: 1400,
          boxShadow: 4,
        }}
      >
        <ChatIcon />
      </Fab>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 2, py: 1.25, borderBottom: "1px solid", borderColor: "divider" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Notifications
          </Typography>
          <IconButton aria-label="Close" onClick={() => setDrawerOpen(false)} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ overflowY: "auto", height: "100%" }}>
          <RightBarContent compact={false} onClose={() => setDrawerOpen(false)} />
        </Box>
      </Drawer>
    </>
  );
}
