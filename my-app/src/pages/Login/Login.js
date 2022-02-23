import "./Login.css";

import React, { useContext, useEffect, useState } from "react";

import { Button } from "../../styles/form-styles";
import { Button2 } from "../../styles/form-styles";
import Checkbox from "@mui/material/Checkbox";
import { DivPersonalizada } from "../../styles/geral-styles";

import IconLogin from "../../img/IconLogin.png";
import InputText from "../../components/InputText/InputText";
import LogoNekiFundoTransparente from "../../img/LogoNekiFundoTransparente.png";
import Storage from "../../utils/Storage";
import Usuario from "../../model/UsuarioModel";
import UsuarioService from "../../service/UsuarioService";

import CadastrarUsuario from "../Usuario/CadastrarUsuario";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let token = Storage.obterToken();

    if (token) {
      window.open("/", "_self");
      //window.open direciona de forma rapida para outra tela. '_self = na mesma aba
    }
  });

  const login = () => {
    if (!email || !password) {
      alert("Favor, informar e-mail e senha");
      return;
    }

    UsuarioService.login(email, password)
      .then((response) => {
        // console.log("Response Vindo Da Api => " + response)
        if (response.data.accessToken) {
          Storage.salvarToken(response.data.accessToken);
          Storage.salvarUsuario(response.data);
          // localStorage.setItem("user", JSON.stringify(response.data))
          window.open("/", "_self");
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  return (
    <>
      <div className="todo">
        <div className="flex-container">
          <DivPersonalizada
            width="550px"
            margin="auto"
            border="1px solid #ddd"
            borderRadius="35px"
            marginTop="150px"
          >
            <div className="item1">
              <div className="logotipo">
                <img
                  src={LogoNekiFundoTransparente}
                  alt="logo"
                  className="center"
                  height={80}
                  width={240}
                ></img>
              </div>
              <div className="logo">
                <img
                  src={IconLogin}
                  alt="icon"
                  className="center"
                  height={70}
                  width={80}
                ></img>
              </div>

              <div className="group">
                <InputText
                  id="email"
                  placeholder="exemplo@exemplo.com"
                  text="E-mail"
                  callback={(e) => setEmail(e.target.value)}
                ></InputText>
              </div>

              <div className="group">
                <InputText
                  id="password"
                  placeholder="123456"
                  text="Senha"
                  type="password"
                  callback={(e) => setPassword(e.target.value)}
                ></InputText>
                <Checkbox defaultChecked />
                Manter Logado
              </div>

              <Button onClick={login}>ENTRAR</Button>

              <div className="esqueci-senha">
                <a href="#">Esqueci minha senha</a>
              </div>
              <div className="cadastrar">
                <a href="#">Ainda não tem conta? </a>
                <Button2 onClick={CadastrarUsuario}>Cadastre-se</Button2>
              </div>
            </div>
          </DivPersonalizada>
        </div>
      </div>
    </>
  );
};
export default Login;
