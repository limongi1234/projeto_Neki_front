export default class Usuario 
{
  constructor(obj) 
  {
    obj = obj || {};
    
    this.email = obj.email;
    this.fotoBase64 = obj.fotoBase64;    
    this.idUsuario = obj.idUsuario;
    this.nivel = obj.nivel;
    this.nome = obj.name;
    this.password = obj.password;
    this.username = obj.username;
  }
//this = eu estou criando e obj = vem da Api

  modeloValido() 
  {
    return !!this.nome;
  }
}
