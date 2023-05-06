// theme.js
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// 1. Import the `extendTheme` function
// 2. Extend the theme to include custom colors, fonts, etc
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
// backgroundColor: "#051343",

const theme = extendTheme({
  config,

  colors: {
    backgroundColor: "#051343",
    text: "#fff",
    primary: "#0d6efd",
    borderColor: "#262626",
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    mono: "Inter, sans-serif",
  },
  components: {
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
