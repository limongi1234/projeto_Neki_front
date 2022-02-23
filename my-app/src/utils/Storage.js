import UsuarioModel from '../model/UsuarioModel';

function salvarToken(token) {
    localStorage.setItem('token', token);
}
function obterToken() {
    return localStorage.getItem('token');
}

function removerAutenticacao() {
    localStorage.clear();
}

function salvarUsuario(usuario) {
    let json = JSON.stringify(usuario);
    localStorage.setItem('usuario', json);
}

function obterUsuario() {
    // let json = localStorage.getItem('usuario');
    //     return new UsuarioModel(JSON.parse(json));
    return JSON.parse(localStorage.getItem("usuario"))
}

export default {
    salvarToken,
    obterToken,
    removerAutenticacao,
    salvarUsuario,
    obterUsuario
}