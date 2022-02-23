import "./styles.css";

import React, { useEffect } from "react";

import ApiService from '../../service/ApiService';
import { DivPersonalizada } from "../../styles/geral-styles";
import LockIcon from "@mui/icons-material/Lock";
import Storage from "../../utils/Storage";
import { useParams } from "react-router-dom";

const bcrypt = require('bcryptjs');
const hashedPassword = "$2a$12$Cax2Pm.6xKwBJtZLXAKyve56NpJ7BtF625k616MhcZ8cAlJMhzqqu";

const recuperarSenhaUsuario = (async () => {
  let userId = 1;
  let response = {};
  let user = {};
  let headers = {
    "Token": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbHZhcmV6Y29zdGFAZ21haWwuY29tIiwiZXhwIjoxNjQyNDExMzA0LCJpYXQiOjE2NDIzNTEzMDR9.9GzOwC66Icpl1HBou0Nmf3vHuTABohzaA5dGMZc5N87JU4fPIU13EMtZJBFmMS9i4w80DLtB4Zu1ZotLortzNw "
  };
  try{
    response = await ApiService.get(`usuarios/${userId}`, 
    headers);
    console.log(response);
    user = response.data;
    console.log(user);

  } catch(e){
    console.log(e.Message);
  }

  let password = user.password;
  console.log(password); 
  return password;
  //  compararSenhaUsuario(password);
});

async function compararSenhaUsuario (Password) {
  let response;
  let passDb = await recuperarSenhaUsuario();
  try{
    console.log(Password);
    console.log(passDb)
    response = await bcrypt.compare(Password, passDb);
    console.log(response);
  } catch(e){
    console.log(e.Message);
  }
};



const emailValidator =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

class AlterarSenha extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordNew: "",
      passwordConfirmation: "",
      emailError: "",
      passwordError: "",
      passwordConfirmationError: "",
      isFormSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validatePasswordConfirmation.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state.password)
    return;
  }

  handleBlur(event) {
    const {name} = event.target;

    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFields = ["email", "password","passwordNew", "passwordConfirmation"];
    let isValid = true;
    formFields.forEach((field) => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  }

  validateField(value) {
    let isValid = false;

    if (value === "email") isValid = this.validateEmail();
    else if (value === "password") isValid = this.validatePassword();
    else if (value === "passwordNew") isValid = this.validatePassword();
    else if (value === "passwordConfirmation")
      isValid = this.validatePasswordConfirmation();
    return isValid;
  }

  validateEmail() {
    let emailError = "";
    const value = this.state.email;
    if (value.trim === "") emailError = "Informe seu Email";
    else if (!emailValidator.test(value)) emailError = "Email inválido";

    this.setState({
      emailError,
    });
    return emailError === "";
  }

  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim === "") passwordError = "Digite sua nova senha";
    // else if (!passwordValidator.test(value))
    //   passwordError =
    //     "A senha precisa contem ao menos 8 caracteres, 1 número, 1 letra maiúscula e 1 minúscula!";

    this.setState({
      passwordError,
    });
    return passwordError === "";
  }

  validatePasswordConfirmation() {
    let passwordConfirmationError = "";
    if (this.state.passwordNew !== this.state.passwordConfirmation)
      passwordConfirmationError = "Password does not match Confirmation";

    this.setState({
      passwordConfirmationError,
    });
    return passwordConfirmationError === "";
  }

  render() {
    return (
      <div>
        <h1>Alteração de Senha</h1>

        <div className="main">
          {this.state.isFormSubmitted ? (
            <div className="details">
              <h3 className="resposta">Sua senha foi alterada com sucesso!</h3>

              <div className="resp">Email: {this.state.email}</div>
            </div>
          ) : (
            <div className="flex-container">
              <DivPersonalizada
                width="500px"
                margin="auto"
                border="1px solid #ddd"
                marginTop="80px"
              >
                <div style={{ textAlign: "center" }}>
                  <form onSubmit={this.handleSubmit}>
                    <LockIcon />

                    <input
                      className="input"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                      autoComplete="off"
                    />
                    <br />
                    {this.state.emailError && (
                      <div className="errorMsg">{this.state.emailError}</div>
                    )}
                    <input
                      className="input"
                      type="password"
                      placeholder="Senha Atual"
                      name="password"
                      // onChange={comparePassword()}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                      autoComplete="off"
                    />
                    <br />
                    {this.state.passwordError && (
                      <div className="errorMsg">{this.state.passwordError}</div>
                    )}

                    <input
                      className="input"
                      type="password"
                      placeholder="Nova Senha"
                      name="passwordNew"
                      value={this.state.passwordNew}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                      autoComplete="off"
                    />
                    <br />
                    {this.state.passwordError && (
                      <div className="errorMsg">{this.state.passwordError}</div>
                    )}
                    <input
                      className="input"
                      type="password"
                      placeholder="Repetir Nova Senha"
                      name="passwordConfirmation"
                      value={this.state.passwordConfirmation}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                      autoComplete="off"
                    />
                    <br />
                    {this.state.passwordConfirmationError && (
                      <div className="errorMsg">
                        {this.state.passwordConfirmationError}
                      </div>
                    )}
                    <button className="btnn" onClick={() => {
                      console.log(this.password)
                      compararSenhaUsuario(this.state.password);
                    }} >Confirma</button>
                  </form>
                </div>
              </DivPersonalizada>
            </div>
          )}
        </div>
        <div className="curved">
				<svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="80%" y1="90%" x2="20%" y2="10%"><stop offset="5%" stop-color="#0693e3ff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 159.2,224.8 318.4,249.6 488,238 C 657.6,226.4 837.5999999999999,178.4 998,166 C 1158.4,153.6 1299.2,176.8 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
				
			</div>
      </div>
    );
  }
}
export default AlterarSenha;
