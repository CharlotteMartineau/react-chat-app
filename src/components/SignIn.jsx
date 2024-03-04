/** @jsxImportSource @emotion/react */
import React from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { css } from "@emotion/react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ForumIcon from "@mui/icons-material/Forum";

const signInCss = {
  layout: css({
    minHeight: "100vh",
    width: 400,
    marginLeft: "auto",
    marginRight: "auto",
  }),
};

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowpassword] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      css={signInCss.layout}
    >
      <Paper sx={{ p: 3, m: 2 }}>
        <Grid alignItems="center" textAlign="center">
          <ForumIcon fontSize="large" color="primary" />
          <Typography component="h1" variant="h5" sx={{ m: 2 }}>
            Connexion
          </Typography>
          <form method="POST" onSubmit={handleSubmit}>
            <TextField
              id="email"
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              InputProps={{
                autoComplete: "email",
                autoFocus: true,
              }}
              size="small"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              id="password"
              label="Mot de passe"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              InputProps={{
                type: showPassword ? "text" : "password",
                autoComplete: "current-password",
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowpassword(!showPassword)}
                      size="small"
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              size="small"
              margin="normal"
              fullWidth
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              // disabled={isFetching}
            >
              Se connecter
            </Button>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SignIn;
