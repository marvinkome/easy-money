import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },

  colors: {},

  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Boogaloo', cursive",
  },

  styles: {
    global: (props) => ({
      body: {
        bg: "#030000",
      },
    }),
  },
});

export default theme;
