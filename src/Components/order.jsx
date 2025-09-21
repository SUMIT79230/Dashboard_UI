import React, { useMemo, useState } from "react";
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Checkbox,
  IconButton,
  InputBase,
  Typography,
  Pagination,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import SortIcon from "@mui/icons-material/Sort";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const SAMPLE_ORDERS = Array.from({ length: 100 }).map((_, i) => {
  const id = `#CM${9801 + i}`;
  const users = [
    { name: "Natali Craig", avatar: "https://i.pravatar.cc/40?img=1" },
    { name: "Kate Morrison", avatar: "https://i.pravatar.cc/40?img=2" },
    { name: "Drew Cano", avatar: "https://i.pravatar.cc/40?img=3" },
    { name: "Orlando Diggs", avatar: "https://i.pravatar.cc/40?img=4" },
    { name: "Andi Lane", avatar: "https://i.pravatar.cc/40?img=5" },
  ];
  const statuses = [
    { label: "In Progress", color: "#7c5cff" },
    { label: "Complete", color: "#2ecc71" },
    { label: "Pending", color: "#4aa3ff" },
    { label: "Approved", color: "#f5b942" },
    { label: "Rejected", color: "#9aa0a6" },
  ];
  const u = users[i % users.length];
  const s = statuses[i % statuses.length];
  return {
    id,
    user: u,
    project: [
      "Landing Page",
      "CRM Admin pages",
      "Client Project",
      "Admin Dashboard",
      "App Landing Page",
    ][i % 5],
    address: [
      "Meadow Lane Oakland",
      "Larry San Francisco",
      "Bagwell Avenue Ocala",
      "Washburn Baton Rouge",
      "Nest Lane Olivette",
    ][i % 5],
    date: `${i === 0 ? "Just now" : i === 1 ? "A minute ago" : `${i} hours ago`}`,
    status: s,
  };
});

/* ---------- small status renderer ---------- */
function StatusCell({ status }) {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: status.color }} />
      <Typography variant="body2">{status.label}</Typography>
    </Box>
  );
}

export default function Order() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 10; 
  const [selected, setSelected] = useState([]);
  const [sortUserOrder, setSortUserOrder] = useState("none");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SAMPLE_ORDERS;
    return SAMPLE_ORDERS.filter((o) => {
      return (
        o.id.toLowerCase().includes(q) ||
        o.user.name.toLowerCase().includes(q) ||
        o.project.toLowerCase().includes(q) ||
        o.address.toLowerCase().includes(q) ||
        o.status.label.toLowerCase().includes(q)
      );
    });
  }, [query]);

  const sortedFiltered = useMemo(() => {
    if (sortUserOrder === "none") return filtered;
    const arr = [...filtered];
    arr.sort((a, b) => {
      const na = a.user.name.toLowerCase();
      const nb = b.user.name.toLowerCase();
      if (na < nb) return sortUserOrder === "asc" ? -1 : 1;
      if (na > nb) return sortUserOrder === "asc" ? 1 : -1;
      return 0;
    });
    return arr;
  }, [filtered, sortUserOrder]);

  const pageCount = Math.max(1, Math.ceil(sortedFiltered.length / rowsPerPage));
  const paginated = sortedFiltered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const toggleSelect = (id) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const toggleSelectAllOnPage = (checked) => {
    if (checked) setSelected((prev) => [...new Set([...prev, ...paginated.map((r) => r.id)])]);
    else setSelected((prev) => prev.filter((id) => !paginated.find((r) => r.id === id)));
  };

  const handleToggleSort = () => {
    setSortUserOrder((prev) => {
      if (prev === "none") return "asc";
      if (prev === "asc") return "desc";
      return "asc";
    });
    setPage(1);
  };

  const clearUserSort = () => {
    setSortUserOrder("none");
    setPage(1);
  };

  return (
    <Box p={3}>
      <Typography variant="h5" sx={{ ml :1,mb:2,fontWeight: 550 }}>
        Order List
      </Typography>

      <Card sx={{ p: 2, mb: 2, border: "none", boxShadow: "none" }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton size="small" aria-label="add">
              <AddIcon />
            </IconButton>

            <Tooltip title="A→Z | Z→A">
              <IconButton
                size="small"
                aria-label="toggle-sort"
                onClick={handleToggleSort}
                color={sortUserOrder === "asc" || sortUserOrder === "desc" ? "primary" : "default"}
              >
                {sortUserOrder === "asc" ? (
                  <ArrowUpwardIcon />
                ) : sortUserOrder === "desc" ? (
                  <ArrowDownwardIcon />
                ) : (
                  <ArrowUpwardIcon sx={{ opacity: 0.5 }} />
                )}
              </IconButton>
            </Tooltip>
            <Tooltip title="Clear user sort">
              <IconButton
                size="small"
                aria-label="clear-sort"
                onClick={clearUserSort}
                color={sortUserOrder === "none" ? "default" : "primary"}
              >
                <SortIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                px: 1.5,
                py: 0.5,
                width: 240,
              }}
            >
              <SearchIcon sx={{ color: "#9ca3af", fontSize: 20 }} />
              <InputBase
                placeholder="Search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                sx={{
                  ml: 1,
                  flex: 1,
                  fontSize: 14,
                  color: "text.primary",
                  "&::placeholder": {
                    color: "#9ca3af",
                    opacity: 1,
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Card>
      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={
                      paginated.length > 0 &&
                      selected.length > 0 &&
                      paginated.every((r) => selected.includes(r.id))
                    }
                    indeterminate={
                      paginated.some((r) => selected.includes(r.id)) &&
                      !paginated.every((r) => selected.includes(r.id))
                    }
                    onChange={(e) => toggleSelectAllOnPage(e.target.checked)}
                  />
                </TableCell>

                <TableCell>Order ID</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Project</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>

            <TableBody>
              {paginated.map((row) => {
                const isSelected = selected.includes(row.id);
                return (
                  <TableRow
                    key={row.id}
                    hover
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox" onClick={(e) => e.stopPropagation()}>
                      <Checkbox checked={isSelected} onChange={() => toggleSelect(row.id)} />
                    </TableCell>

                    <TableCell>{row.id}</TableCell>

                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar alt={row.user.name} src={row.user.avatar} sx={{ width: 28, height: 28 }} />
                        <Typography variant="body2">{row.user.name}</Typography>
                      </Box>
                    </TableCell>

                    <TableCell>{row.project}</TableCell>
                    <TableCell>{row.address}</TableCell>

                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <CalendarTodayIcon sx={{ fontSize: 16 }} />
                        <Typography variant="body2">{row.date}</Typography>
                      </Box>
                    </TableCell>

                    <TableCell>
                      <StatusCell status={row.status} />
                    </TableCell>
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      {isSelected ? (
                        <Tooltip title="More actions">
                          <IconButton size="small" aria-label="more-actions">
                            <Typography sx={{ fontSize: 16, lineHeight: 1 }}>...</Typography>
                          </IconButton>
                        </Tooltip>
                      ) : (
                        <Box sx={{ width: 40 }} />
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" justifyContent="flex-end" alignItems="center" p={2}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
          />
        </Box>
      </Card>
    </Box>
  );
}
