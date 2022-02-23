import ApiService from "./ApiService";

// const usuarioMock = {
//   id: 1,
//   nome: "fulano",
//   email: "fulano@exemplo.com",
//   perfil: {
//     id: 1,
//     descricao: "manager",
//   },
// };
//  const autenticado = {
//      token: "msrd4Khdf9vEDPdsQbs",
//      usuario: usuarioMock
//  }

// //login mockado
// function login(email, password) {
//   return new Promise((resolve, reject) => {
//     //Ao digitar o email, o email.toLowerCase= converte para letra minuscula
//     email = email && email.toLowerCase();
//     //Se email errado, retorna reject
//     if (email !== "admin@admin.com" || password !== "123456") {
//       return reject("Usuário ou senha inválidos");
//     }
//     return resolve(autenticado);
//   });
// }

//Método real que vai na api tentar logar o usuário de verdade

function login(email, password){
    return new Promise((resolve, reject) =>{
    email = email && email.toLowerCase();
    //Ao digitadar o email, o email.toLowerCase= converte para letra minuscula
        return ApiService.post("/api/auth/signin", {email, password})
        .then(response => resolve(response))
            //Se email errado, retorna reject
        .catch(error => reject(error));
    })
}
function obterTodos() {
  return new Promise((resolve, reject) => {
    return ApiService.get('/usuarios')
      .then((resposta) => resolve(resposta))
      .catch((erro) => reject(erro));
  });
}    
        
function cadastrar(usuario){

  return new Promise((resolve, reject) => {
    return ApiService.post('/usuarios', usuario)    
      .then((response) => resolve(response))
      .catch((erro) => reject(erro));
  });
}    

function atualizar(usuario){
  return new Promise((resolve, reject) => {
    return ApiService.put(`/usuarios/${usuario.idUsuario}`, usuario)
      .then((response) => resolve(response))
      .catch((erro) => reject(erro));
  });
}     
function deletar(usuario){
  return new Promise((resolve, reject) => {
    return ApiService.delete(`/usuarios/${usuario.idUsuario}`)    
      .then((response) => resolve(response))
      .catch((erro) => reject(erro));
  });
}     



export default {
  login,
  obterTodos,
  cadastrar,
  atualizar,
  deletar,
};
