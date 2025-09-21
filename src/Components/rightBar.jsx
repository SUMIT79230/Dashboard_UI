import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { blue, grey } from "@mui/material/colors";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

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

export default function RightBar() {
  const IconBubble = ({ IconComponent }) => (
    <Avatar sx={{ bgcolor: blue[50], color: "black", width: 25, height: 25 }}>
      <IconComponent fontSize="small" />
    </Avatar>
  );

  return (
    <Box sx={{ width: 320, height: "100%", overflow: "visible", px: 2, pt: 3, pb: 4 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
        Notifications
      </Typography>

      <List sx={{ p: 0, pt: 2, pb: 2, m: 0 }}>
        {notifications.map((n, i) => (
          <ListItem key={i} alignItems="flex-start" disableGutters sx={{ py: 0.4 }}>
            <ListItemAvatar sx={{ minWidth: 40, mr: 1.5 }}>
              <IconBubble IconComponent={n.Icon} />
            </ListItemAvatar>

            <ListItemText
              primary={
                <Typography variant="body2" sx={{ fontWeight: 400, fontSize: 14, lineHeight: "18px" }}>
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

      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.4 }}>
        Activities
      </Typography>

      <Box sx={{ position: "relative", pt: 2, pb: 1.5 }}>
        <List sx={{ p: 0, m: 0 }}>
          {activities.map((a, i) => {
            const isLast = i === activities.length - 1;
            return (
              <ListItem
                key={i}
                alignItems="flex-start"
                disableGutters
                sx={{
                  py: 1,
                }}
              >
                <ListItemAvatar
                  sx={{
                    minWidth: 48,
                    mr: 2,
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
                      width: 28,
                      height: 28,
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
                    <Typography variant="body2" sx={{ fontWeight: 400, fontSize: 14, lineHeight: "18px" }}>
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
                    left: 15,
                    top: "80%",
                    bottom: isLast ? "50%" : 0,
                    width: 2,
                    bgcolor: "#d7d7d7ff",
                    borderRadius: 1,
                    zIndex: 1,
                }} />
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2} mb={1.5}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Contacts
        </Typography>
      </Stack>

      <List sx={{ p: 0, m: 0 }}>
        {contacts.map((c, i) => (
          <ListItem key={i} disableGutters sx={{ py: 1 }}>
            <ListItemAvatar sx={{ minWidth: 36, mr: 3 }}>
              <Avatar
                src={c.avatarUrl}
                alt={c.name}
                sx={{
                  width: 28,
                  height: 28,
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
                <Typography variant="body2" sx={{ fontSize: 14, lineHeight: "18px", fontWeight: 400 }}>
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
