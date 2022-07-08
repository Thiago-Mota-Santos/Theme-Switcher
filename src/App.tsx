import Header from "./components/Header";
import GlobalStyles from "./styles/global";
import { DefaultTheme, ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import useStatePersisted from "./utils/useStatePersisted";

function App() {
  const [theme, setTheme] = useStatePersisted<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title == "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
