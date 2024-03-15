import React from "react";
import {
  unstable_HistoryRouter as HistoryRouter, // replace BrowserRouter as Router with HistoryRouter https://github.com/remix-run/react-router/issues/8264#issuecomment-991271554
  Routes,
  Route,
} from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import muiTheme from "./config/muiTheme";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
import history from "./config/history";

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline enableColorScheme />
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<SignIn />} exact />
          <Route path="/chatrooms" element={<Chat />} exact />
        </Routes>
      </HistoryRouter>
    </ThemeProvider>
  );
}

export default App;
