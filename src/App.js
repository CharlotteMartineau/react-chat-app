import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import muiTheme from "./config/muiTheme";
import Authentication from "./acl/Authentication";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline enableColorScheme />
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} exact />
          <Route path="/chatrooms" element={Authentication(Chat)} exact />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
