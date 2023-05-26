import { ThemeProvider, CssBaseline } from "@mui/material";
import Theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <h1>Busify</h1>
    </ThemeProvider>
  );
}

export default App;
