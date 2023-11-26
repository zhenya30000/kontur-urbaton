import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
      primary: {
        100: "#ccd2d4",
        200: "#9aa6a8",
        300: "#67797d",
        400: "#192930",
        500: "#022026",
        600: "#021a1e",
        700: "#011317",
        800: "#010d0f",
        900: "#000608"
      },
      lighterPrimary: {
        100: "#d1d7d9",
        200: "#a2afb3",
        300: "#74888c",
        400: "#456066",
        500: "#173840",
        600: "#122d33",
        700: "#0e2226",
        800: "#09161a",
        900: "#050b0d"
      },
      accent1: {
        100: "#e2e6e8",
        200: "#c4cdd1",
        300: "#a7b5ba",
        400: "#899ca3",
        500: "#6c838c",
        600: "#566970",
        700: "#414f54",
        800: "#2b3438",
        900: "#161a1c"
      },
      accent2: {
        100: "#eaede2",
        200: "#d4dbc5",
        300: "#bfcaa7",
        400: "#a9b88a",
        500: "#94a66d",
        600: "#768557",
        700: "#596441",
        800: "#3b422c",
        900: "#1e2116"
      },
      textColor: {
        100: "#fcfcfc",
        200: "#fafafa",
        300: "#f7f7f7",
        400: "#f5f5f5",
        500: "#f2f2f2",
        600: "#c2c2c2",
        700: "#919191",
        800: "#616161",
        900: "#303030"
      },
    }
    : {
      primary: {
        100: "#000608",
        200: "#010d0f",
        300: "#f7f7f7",
        400: "#f2f0f0",
        500: "#022026",
        600: "#354d51",
        700: "#67797d",
        800: "#9aa6a8",
        900: "#ccd2d4",
      },
      lighterPrimary: {
        100: "#050b0d",
        200: "#09161a",
        300: "#0e2226",
        400: "#122d33",
        500: "#173840",
        600: "#456066",
        700: "#74888c",
        800: "#a2afb3",
        900: "#d1d7d9",
      },
      accent1: {
        100: "#161a1c",
        200: "#2b3438",
        300: "#414f54",
        400: "#566970",
        500: "#6c838c",
        600: "#899ca3",
        700: "#a7b5ba",
        800: "#c4cdd1",
        900: "#e2e6e8",
      },
      accent2: {
        100: "#1e2116",
        200: "#3b422c",
        300: "#596441",
        400: "#768557",
        500: "#94a66d",
        600: "#a9b88a",
        700: "#bfcaa7",
        800: "#d4dbc5",
        900: "#eaede2",
      },
      textColor: {
        100: "#303030",
        200: "#616161",
        300: "#919191",
        400: "#c2c2c2",
        500: "#f2f2f2",
        600: "#f5f5f5",
        700: "#f7f7f7",
        800: "#fafafa",
        900: "#fcfcfc",
      },
    }
  )
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
          primary: {
            main: colors.primary[500]
          },
          secondary: {
            main: colors.accent1[500]
          },
          neutral: {
            dark: colors.lighterPrimary[700],
            main: colors.lighterPrimary[500],
            light: colors.lighterPrimary[100],
          },
          background: {
            default: colors.primary[500]
          }
        }
        : {
          primary: {
            main: colors.primary[100]
          },
          secondary: {
            main: colors.accent1[500]
          },
          neutral: {
            dark: colors.lighterPrimary[700],
            main: colors.lighterPrimary[500],
            light: colors.lighterPrimary[100],
          },
          background: {
            default: colors.textColor[800]
          },
        }),
    },
    typography: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 14,
      },
    }
  }
}

export const ColorModeContext = createContext({
  toggleColorMode: () => {  }
});

export const useMode = () => {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev) === 'light' ? 'dark' : 'light')
    }),
    []);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
}
