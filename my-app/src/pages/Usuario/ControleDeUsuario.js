import "./Styles.css";

import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";
import UsuarioModel from "../../model/UsuarioModel";
import UsuarioService from "../../service/UsuarioService";
import data from "../../utils/data";
import whithReactContent from "sweetalert2-react-content";

const MySwal = whithReactContent(Swal);

const ControleDeUsuario = () => {
  const [usuario, setUsuario] = useState(new UsuarioModel());
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    obterTodosUsuarios();
  }, []);

  const atualizarUsuarioNaTabela = (usuarioAtualizado) => {
    let indice = usuarios.findIndex((u) => u.idUsuario === usuarioAtualizado.idUsuario);

    usuarios.splice(indice, 1, new UsuarioModel(usuarioAtualizado));
    //independente de qual indice for, remova ele e no lugar adicione um novo usuario
    setUsuarios((array) => [...array]);
  };
  const atualizarUsuario = (usuario) => {    
    
    UsuarioService.atualizar(usuario)
      .then((response) => {
        //atualizarUsuarioNaTabela(usuario); ou: 
        atualizarUsuarioNaTabela(response.data);
        limparCampos();

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Funcionário atualizado com sucesso!",
          showConfirmButton: false,
          timer: 5000,
          animate: true,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Não foi possível atualizar o cadastro!",
          showConfirmButton: false,
          timer: 5000,
          animate: true,
        });
        console.log(error);
      });
  };

  const limparCampos = () => {
    setUsuario({
      ...usuario,      
      nome: "",
      email: "",
      fotoBase64: "",
      nomeEquipe: "",
      nivel: "",
      dataContratacao: "",      
    });
    
  };
  

  const editarUsuario = (usuario) => {
    let usuarioEncontrado = usuarios.find((u) => u.idUsuario === usuario.idUsuario);

    setUsuario(usuarioEncontrado);
  };

  const excluirUsuario = (usuario) => {
    let usuarioEncontrado = usuarios.find((u) => u.idUsuario === usuario.idUsuario);

    MySwal.fire({
      title: <p>Deseja realmente excluir o funcionário?</p>,
      text: `${usuarioEncontrado.nome}`,
      confirmButtonText: "Sim",
      confirmButtonColor: "rgb(0, 123, 255)",
      showCancelButton: true,
      cancelButtonText: "Não",
      animate: true,
    }).then((result) => {
      if (result.isConfirmed) {
        UsuarioService.deletar(usuarioEncontrado)
          .then(() => {
            let indice = usuarios.findIndex(
              (u) => u.idUsuario === usuarioEncontrado.idUsuario
            );

            usuarios.splice(indice, 1);
            //independente de qual indice for, remova ele
            setUsuarios((array) => [...array]); 
            //ou: setUsuarios([...usuarios]);

            Swal.fire({
              title: "Funcionário excluído com sucesso",
              position: "center",
              icon: "success",
              showConfirmButton: false,
              timer: 5000,
              animate: true,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const obterTodosUsuarios = () => {
    UsuarioService.obterTodos()
      .then((response) => {
        let usuarios = response.data.map(
          (usuario) => new UsuarioModel(usuario)
        );
        console.log(usuarios);
        setUsuarios(usuarios);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <div className="containerF">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="titulo">LISTA DE FUNCIONÁRIOS</h2>
          
        </div>
        {/* <div className="col-sm-12">
          <button className="btn btn-primary">Adicionar</button>
        </div> */}
        <div className="col-sm-12">
          <table className="table table-hover">
            <thead className="tabela-funcionarios">
              <tr>
                <td>Id</td>                
                <td>Nome</td>                
                <td>Email</td>
                <td>Equipe</td>
                <td>Nível</td>
                <td>Data de Contratação</td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td> {usuario.idUsuario} </td>
                  <td> {usuario.nome} </td>  
                  <td> {usuario.email} </td>
                  <td> {usuario.nomeEquipe} </td>
                  <td> {usuario.nivel} </td>
                  <td> {data.aplicarMascaraEmDataIso(usuario.dataContratacao)} </td>
                  <td>  </td>
                  <td>
                    <button
                      id={usuario.id}
                      className="btn btn-link"
                      data-toggle="modal"
                      data-target="#modal-usuario"
                      data-backdrop="static"
                      onClick={() => editarUsuario(usuario)}                      
                    >
                      Editar
                    </button>
                    
                    <button
                      id={usuario.idUsuario}
                      className="btn btn-link"
                      onClick={() => excluirUsuario(usuario)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="modal" id="modal-usuario">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Editar Usuário</h4>
              </div>

              <div className="modal-body">
                <div className="row">

                {/* <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="id">Id do Usuário</label>
                      <input
                        id="id-usuario"
                        value={usuario.idUsuario}
                        type="text"
                        className="form-control"
                        onChange={(e) =>
                          setUsuario({ ...usuario, idUsuario: e.target.value })
                        }                       
                      />
                    </div>
                  </div> */}

                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="nome">Nome</label>
                      <input
                        id="nome"
                        value={usuario.nome}
                        type="text"
                        onChange={(e) =>
                          setUsuario({ ...usuario, nome: e.target.value })
                        }
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        value={usuario.email}
                        type="text"
                        onChange={(e) =>
                          setUsuario({ ...usuario, email: e.target.value })
                        }
                        className="form-control"
                      />
                    </div>
                  </div>                  
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="equipe">Equipe</label>
                      <input
                        id="nomeEquipe"
                        value={usuario.nomeEquipe}
                        type="text"
                        onChange={(e) =>
                          setUsuario({ ...usuario, nomeEquipe: e.target.value })
                        }
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="nivel">Nível</label>
                      <input
                        id="nivel"
                        value={usuario.nivel}
                        type="text"
                        onChange={(e) =>
                          setUsuario({ ...usuario, nivel: e.target.value })
                        }
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="data-contratacao">Data de Contratação</label>
                      <input
                        id="data-contratacao"
                        value={usuario.dataContratacao}
                        type="date"
                        onChange={(e) =>
                          setUsuario({
                            ...usuario,
                            dataContratacao: e.target.value,
                          })
                        }
                        className="form-control"
                      />
                    </div>
                  </div>                                 
                  </div>
                </div>             

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => atualizarUsuario(usuario)}
                >
                  Salvar
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>   
      </div>   
  );
};


export default ControleDeUsuario;
