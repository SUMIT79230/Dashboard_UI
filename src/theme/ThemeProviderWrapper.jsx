
import  { createContext, useMemo } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, setTheme } from "../store/themeSlice";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  setColorMode: (mode) => {},
});

export default function ThemeProviderWrapper({ children }) {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => dispatch(toggleTheme()),
      setColorMode: (m) => dispatch(setTheme(m)),
    }),
    [dispatch]
  );

  const theme = useMemo(() => {
    const isLight = mode === "light";

    return createTheme({
      palette: {
        mode,
        info: { main: "#cceeff", light: "#eaf8ff", contrastText: "#061019" },
        background: {
          default: isLight ? "#F4F6F8" : "#0b0b0b",
          paper: isLight ? "#ffffff" : "#151515",
        },
        text: { primary: isLight ? "#0b1220" : "#a0a0a0ff", secondary: isLight ? "#6B7280" : "#9CA3AF" },
        divider: isLight ? "rgba(15,23,42,0.06)" : "rgba(255,255,255,0.06)",
        action: { hover: isLight ? "rgba(2,6,23,0.04)" : "rgba(255,255,255,0.03)" },
      },
      shape: { borderRadius: 12 },
      components: {
        MuiPaper: {
          styleOverrides: { root: ({ theme }) => ({ backgroundColor: theme.palette.background.paper }) },
        },
        MuiCard: {
          styleOverrides: { root: ({ theme }) => ({ backgroundColor: theme.palette.background.paper, boxShadow: "none" }) },
        },
        MuiAppBar: {
          styleOverrides: {
            root: ({ theme }) => ({
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              borderBottom: `1px solid ${theme.palette.divider}`,
              boxShadow: "none",
            }),
          },
        },
        MuiInputBase: {
          styleOverrides: { input: ({ theme }) => ({ color: theme.palette.text.primary }) },
        },
        MuiTableCell: {
          styleOverrides: { root: ({ theme }) => ({ borderBottom: `1px solid ${theme.palette.divider}` }) },
        },
      },
    });
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
