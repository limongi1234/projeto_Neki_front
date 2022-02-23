import { AppBar, Drawer, DrawerHeader } from "./ThemeAppBar";
import React, { useContext, useEffect } from "react";
import { useMatch, useResolvedPath } from "react-router-dom";

import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import HomeWorkIcon from "@mui/icons-material/HomeWork";
import IconButton from "@mui/material/IconButton";
import ListComponents from "./ListComponents";
import LockIcon from "@mui/icons-material/Lock";
import LogoNeki from "../../img/LogoNeki.png";
import MenuIcon from "@mui/icons-material/Menu";
import Storage from "../../utils/Storage";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { UsuarioLogadoContext } from "../../context/usuarioLogado";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import { useTheme } from "@emotion/react";

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const { usuarioLogado, setUsuarioLogado } = useContext(UsuarioLogadoContext);

  let resolved = useResolvedPath("/login");
  let telaLogin = useMatch({ path: resolved.pathname, end: true });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setUsuarioLogado(Storage.obterUsuario());
  }, []);

  return telaLogin ? (
    <></>
  ) : (
    <Box sx={telaLogin ? { display: "none" } : { display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Avatar
            alt={usuarioLogado?.email}
            src={
              usuarioLogado.foto === null
                ? "/static/images/avatar/3.jpg"
                : `data:image/jpeg;base64,${usuarioLogado.foto}`
            }
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 2,
            }}
          >
            <Typography variant="overline">
              {usuarioLogado ? usuarioLogado.nome : "Usuario"}
            </Typography>
            <Typography variant="overline">
              Nivel: {usuarioLogado ? usuarioLogado.nivel : "Nivel"}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton style={{ color: "white" }} onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <img
          src={LogoNeki}
          alt="Logo Neki"
          style={{
            display: "flex",
            width: 80,
            height: 80,
            alignSelf: "center",
          }}
        />

        <Divider />
        {/* Lista Icones Parte Superior */}
        <ListComponents
          to={"/"}
          handleOnClick={handleDrawerClose}
          icon={<HomeWorkIcon />}
          text={"INICIO"}
        />

        <ListComponents
          to={"/cadastrar-usuario"}
          handleOnClick={handleDrawerClose}
          icon={<AssignmentIndIcon />}
          text={"CADASTRAR USUARIO"}
        />

        <ListComponents
          to={"/alterar-senha"}
          handleOnClick={handleDrawerClose}
          icon={<LockIcon />}
          text={"ALTERAR SENHA"}
        />
        <Divider />
        <ListComponents
          to={"/login"}
          handleOnClick={() => Storage.removerAutenticacao()}
          icon={<ExitToAppIcon />}
          text={"SAIR"}
        />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
