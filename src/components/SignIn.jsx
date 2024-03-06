/** @jsxImportSource @emotion/react */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { css } from "@emotion/react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ForumIcon from "@mui/icons-material/Forum";
import { signInRequest } from "../redux/AuthenticationRedux";

const signInCss = {
  layout: css({
    minHeight: "100vh",
    width: 400,
    marginLeft: "auto",
    marginRight: "auto",
  }),
};

const SignIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowpassword] = React.useState(false);
  const isFetching = useSelector((state) => state.authReducer.isFetching);
  const error = useSelector((state) => state.authReducer.error);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signInRequest({ email, password }));
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
          {error && (
            <Alert severity="error">
              Identifiant ou mot de passe incorrect
            </Alert>
          )}
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
              disabled={isFetching}
            >
              {isFetching ? <CircularProgress size={24} /> : "Se connecter"}
            </Button>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SignIn;
