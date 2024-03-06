import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import muiTheme from "./config/muiTheme";
import SignIn from "./components/SignIn";

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline enableColorScheme />
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} exact />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
