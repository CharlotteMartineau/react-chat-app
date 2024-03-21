import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import muiTheme from "./config/muiTheme";
import Authentication from "./acl/Authentication";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
import ChatroomShow from "./components/ChatroomShow";

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline enableColorScheme />
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} exact />
          <Route path="/chatrooms" element={Authentication(Chat)} exact />
          <Route
            path="/chatrooms/:chatroom_id"
            element={Authentication(ChatroomShow)}
            exact
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
