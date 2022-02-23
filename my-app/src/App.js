import './App.css';

import { BrowserRouter, useRoutes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import AlterarSenha from './pages/AlterarSenha/AlterarSenha'
import AppBar from './components/AppBar/AppBar'

import CadastrarUsuario from './pages/Usuario/CadastrarUsuario';
import Container from "@mui/material/Container";
import ControleDeUsuario from './pages/Usuario/ControleDeUsuario';
import GlobalContext from './context/index'
import Inicio from './pages/Inicio/Inicio';

import Login from './pages/Login/Login';



const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <Inicio /> },
    { path: "/login", element: <Login /> },    
    { path: "/cadastrar-usuario", element: <CadastrarUsuario /> },
    { path: "/alterar-senha", element: <AlterarSenha /> },
    { path: "/controle-de-usuario", element: <ControleDeUsuario /> },
  ]);

  return routes
}

// Padrão de cores para ser usadas no projeto
const theme = createTheme({
  palette: {
    primary: {
      light: "#a3cbdb5c",
      main: "#161a1d",
      dark: "#0b090a"
    },
    secondary: {
      light: "#89C2D9",
      main: "#468FAF",
      dark: "#2C7DA0"
    },
    info: {
      light: "#00bbf9",
      main: "#38b000",
      dark: "#780000"
    }
  },
});

function App() {
  return (
    <GlobalContext>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppBar />
          <Container sx={{ marginLeft: 10 }}>
            <Routes />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </GlobalContext >
  );
}

export default App;
