import { ThemeProvider } from "styled-components";
import RoutePath from "./routes/RoutePath";
import { GlobalStyles } from "./styles/globalStyle";
import { useAppSelector } from "./logic/redux/store/hooks";
import { darkTheme } from "./styles/theme";

const App = () => {
  const theme = useAppSelector((state) => state.userReducer.themeValue);

  return (
    <ThemeProvider theme={theme === "light" ? darkTheme : darkTheme}>
      <GlobalStyles />
      <RoutePath />
    </ThemeProvider>
  );
};

export default App;
