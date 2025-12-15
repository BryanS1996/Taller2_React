import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import "./App.css";
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Inventario de productos
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button
              color="inherit"
              component={NavLink}
              to="/"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Productos
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/filtros"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Filtros (demo)
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/personas"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Personas
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }}>
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
