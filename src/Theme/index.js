import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#FF5F00",
    primaryDark: "#de5808",
    secondary: "#B20600",
    accent: "#E83A14",
    warning: "#eed202",
    success: "#48bb78",
    danger: "#f56565",
    sidebarText: "#fff",
  },
  fonts: {
    heading: `Montserrat , ${base}`,
    body: "",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default theme;
