// import "moment/locale/pt-br";
// import "./Styles.css";

// import { EQUIPES_URL, USUARIOS_URL } from '../../constantsURL'
// import React, { useContext, useEffect, useState } from "react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { displayImage, displayString, imageUploaded } from '../../utils/imgConverter'

// import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
// import Avatar from "@mui/material/Avatar";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import CssBaseline from "@mui/material/CssBaseline";
// import { EquipesContext } from "../../context/equipes";
// import FileList from "../../components/FileList/FileList";
// import Grid from "@mui/material/Grid";
// import InputData from '../../components/form/InputData'
// import MenuItem from "@mui/material/MenuItem";
// import Swal from "sweetalert2";
// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
// import Upload from "../../components/Upload/Upload";
// import UsuarioModel from "../../model/UsuarioModel";
// import UsuarioService from "../../service/UsuarioService";
// import axios from "axios";
// import moment from "moment";
// import { styled } from '@mui/material/styles';
// import whithReactContent from "sweetalert2-react-content";

// const MySwal = whithReactContent(Swal);

// const theme = createTheme();

// const niveis = [
//   {
//     id: 1,
//     value: "JUNIOR"
//   },
//   {
//     id: 2,
//     value: "TRAINEE"
//   },
//   {
//     id: 3,
//     value: "PLENO"
//   },
//   {
//     id: 4,
//     value: "SENIOR"
//   }
// ]

// const Input = styled('input')({
//   display: 'none',
// });

// // REGEX PARA VALIDAR E-MAIL - IMPLEMENTAR!!!
// // const emailValidator =
// //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// const CadastroDeUsuarios = () => {
//   // const [usuario, setUsuario] = useState(new UsuarioModel());
//   // const [usuarios, setUsuarios] = useState([]);

//   const [isValid, setIsValid] = useState(false);
//   const [message, setMessage] = useState("");

//   const [equipesOptions, setEquipesOptions] = useState([]);
//   //VALUE DOS INPUTS
//   const [dataCt, setDataCt] = useState(null)
//   const [email, setEmail] = useState()
//   const [fotoBase64, setFotoBase64] = useState()
//   const [idEquipe, setIdEquipe] = useState("")
//   const [nivel, setNivel] = useState("")
//   const [nome, setNome] = useState()
//   const [password, setPassword] = useState()
//   const [username, setUsername] = useState("")

//   let base64String = ""

//   function imageUploaded() {
//     //Aqui pega o campo na tela do html
//     var arquivo = document.querySelector(
//       'input[type=file]')['files'][0];

//     //Aqui cria o cara que vai converter a imagem pra base64
//     var reader = new FileReader();
//     console.log("next");

//     //Quando carregada a imagem
//     reader.onload = function () {
//       //Aqui retira a data é dispensavel
//       base64String = reader.result.replace("data:", "")
//         // Replace nos caracteres especiais
//         .replace(/^.+,/, "");


//       // imageBase64Stringsep = base64String;

//       // alert(imageBase64Stringsep);
//       console.log(base64String);



//       setFotoBase64(base64String)
//     }
//     // rele a imagem como url base64
//     reader.readAsDataURL(arquivo);

//   }

//   useEffect(() => {
//     setUsername(email)
//   }, [email])

//   const tempoBrasil = moment().locale("pt-br");

//   //Conversão para o formato da data que está no backend
//   const dataContratacao = moment(dataCt).format("YYYY-MM-DD");

//   // A expressão regular para validar o email

//   const emailRegex =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//   const validateEmail = (event) => {
//     const email = event.target.value;
//     if (emailRegex.test(email)) {
//       setIsValid(true);
//       setMessage("O email cadastrado é válido!");
//     } else {
//       setIsValid(false);
//       setMessage("Por favor, digite um email válido!");
//     }
//     // setUsuario({ ...usuario, email: event.target.value });
//   };

//   const postCadastrarUsuario = () => {
//     axios
//       .post(USUARIOS_URL, {
//         dataContratacao,
//         email,
//         fotoBase64,
//         idEquipe,
//         nivel,
//         nome,
//         password,
//         username,
//       })
//       .then((response) => {
//         if (response.status === 201 || response.status === 500) {

//           MySwal.fire({
//             position: "center",
//             icon: "success",
//             title: "Funcionário cadastrado com sucesso!",
//             showConfirmButton: false,
//             timer: 5000,
//             animate: true,
//           })
//         }

//         limparInput()
//       })
//       .catch((error) => {
//         if (error) {
//           MySwal.fire({
//             position: "center",
//             icon: "error",
//             title: "Não foi possível cadastrar o funcionário!",
//             showConfirmButton: false,
//             timer: 5000,
//             animate: true,
//           })
//         }
//       })
//   }

//   useEffect(() => {
//     getEquipes()
//   }, [])

//   const getEquipes = () => {
//     axios
//       .get(EQUIPES_URL)
//       .then((resp) => {
//         setEquipesOptions(resp.data)
//       })
//   }

//   const limparInput = () => {
//     setDataCt(null)
//     setEmail("")
//     setFotoBase64("")
//     setIdEquipe("")
//     setNivel("")
//     setNome("")
//     setPassword("")
//     setUsername("")
//   }

//   // const testeValorRecebido = (equipeOp) => {
//   //   alert("Equipe Selecionada => " + equipeOp.nomeEquipe + " / ID Do Time => " + equipeOp.idEquipe)
//   // }

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="80%" >
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",           
//             flexDirection: "column",
//             alignItems: "center",
//             marginLeft:"30%",            
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <AssignmentIndIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5" fontSize="50px">
//             Cadastro de Funcionário
//           </Typography>
//           <Box component="form" sx={{ mt: 7 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="equipe"
//                   select={true}
//                   required
//                   fullWidth
//                   value={idEquipe}
//                   label="Equipe"
//                   autoFocus
//                   onChange={(e) =>
//                     setIdEquipe(e.target.value)
//                   }
//                 >
//                   {equipesOptions?.map((equipeOp, index) => (
//                     <MenuItem key={index} value={equipeOp.idEquipe}>{equipeOp?.nomeEquipe}</MenuItem>
//                   ))}
//                 </TextField>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <InputData
//                   label="Data da Contratação"
//                   required
//                   value={dataCt}
//                   onChange={(tempoBrasil) => {
//                     setDataCt(tempoBrasil?.format());
//                   }}
//                   renderInput={(params) => <TextField {...params} />}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   id="nivel"
//                   select={true}
//                   required
//                   fullWidth
//                   label="Nível"
//                   value={nivel}
//                   onChange={(e) =>
//                     setNivel(e.target.value)
//                   }
//                 >
//                   {niveis.map((nivel) => (

//                     <MenuItem key={nivel.id} value={nivel.value}>{nivel.value}</MenuItem>
//                   ))}

//                 </TextField>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="nome"
//                   label="Nome"
//                   autoComplete="nome"
//                   value={nome}
//                   onChange={(e) =>
//                     setNome(e.target.value)
//                   }
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="E-mail"
//                   name="email"
//                   autoComplete="email"
//                   value={email}
//                   onChange={(e) =>
//                     setEmail(e.target.value)
//                   }
//                   onBlur={validateEmail}
//                 />
//                 {/*Se o email digitado for válido, a mensagem ficará azul, caso contrário ficará vermelha. */}
//                 <div className={`message ${isValid ? "success" : "error"}`}>
//                   {message}
//                 </div>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Senha"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                   value={password}
//                   onChange={(e) =>
//                     setPassword(e.target.value)
//                   }
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 {/* TODO FAZER UPLOAD DA FOTO PARA O BACK */}
//                 {/* <Upload />
//                 <FileList /> */}
//                 <label htmlFor="contained-button-file">
//                   <Input required accept="image/*" id="contained-button-file" type="file" onChange={() => imageUploaded()} />
//                   <Button variant="contained" component="span">
//                     Selecionar Foto Do Usuario
//                   </Button>
//                 </label>
//                 <Typography variant="overline" component="div">
//                   Dimensão Max da foto 500x500
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Button
//               // type="submit"
//               fullWidth
//               variant="contained"
//               onClick={() => postCadastrarUsuario()}
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Cadastrar
//             </Button>
//             <Grid container justifyContent="flex-center"></Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default CadastroDeUsuarios;
