import Header from "./components/Header";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
