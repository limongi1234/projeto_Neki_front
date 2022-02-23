import "./Styles.css";
import "moment/locale/pt-br";

import React, { useContext, useEffect, useState } from "react";

import { AlertMSG } from "../../components/AlertMSG";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import Card from "../../components/Card/Card";
import CardI from "../../components/Card/CardI";
import Grid from "@mui/material/Grid";
import Perfil from "../../img/Perfil.png";
import Typography from "@mui/material/Typography";
import { UsuarioLogadoContext } from "../../context/usuarioLogado";
import UsuarioModel from "../../model/UsuarioModel";
import UsuarioService from "../../service/UsuarioService";
import moment from "moment";

const Inicio = () => {
	const [usuario, setUsuario] = useState(new UsuarioModel());
	const [usuarios, setUsuarios] = useState([]);
	const { usuarioLogado, setUsuarioLogado } =
		useContext(UsuarioLogadoContext);

	

	return (
		<>
			<Grid container>
				<Typography variant="h4"marginLeft="70px" marginBottom="120px">Seja Bem Vindo(a)</Typography>
			</Grid>
			<Grid container direction="row" className="background-grid">
				<Grid item>
					<Avatar
						alt={usuarioLogado?.email}
						src={
							usuarioLogado.foto === null
								? "/static/images/avatar/3.jpg"
								: `data:image/jpeg;base64,${usuarioLogado.foto}`
						}
						className="avatar-user"
						sx={{ height: 250, width: 250 }}
					/>
				</Grid>
				<Grid
					item
					sx={{
						marginLeft: 15,
						marginTop: 2,
					}}
				>
					<Typography variant="h4">{usuarioLogado?.nome}</Typography>
					<br />
					<Typography variant="h5">{usuarioLogado?.email}</Typography>
					<br />
					
				</Grid>
			</Grid>
			<div className="curved">
				<svg
					width="100%"
					height="100%"
					id="svg"
					viewBox="0 0 1440 700"
					xmlns="http://www.w3.org/2000/svg"
					className="transition duration-300 ease-in-out delay-150"
				>
					<defs>
						<linearGradient
							id="gradient"
							x1="0%"
							y1="50%"
							x2="100%"
							y2="50%"
						>
							<stop offset="5%" stopColor="#0693e388"></stop>
							<stop offset="95%" stopColor="#7bdcb588"></stop>
						</linearGradient>
					</defs>
					<path
						d="M 0,700 C 0,700 0,233 0,233 C 141.42857142857144,209.21428571428572 282.8571428571429,185.42857142857142 419,208 C 555.1428571428571,230.57142857142858 686.0000000000001,299.5 781,308 C 875.9999999999999,316.5 935.1428571428571,264.57142857142856 1039,242 C 1142.857142857143,219.42857142857142 1291.4285714285716,226.21428571428572 1440,233 C 1440,233 1440,700 1440,700 Z"
						stroke="none"
						strokeWidth="0"
						fill="url(#gradient)"
						className="transition-all duration-300 ease-in-out delay-150 path-0"
					></path>
					<defs>
						<linearGradient
							id="gradient"
							x1="0%"
							y1="50%"
							x2="100%"
							y2="50%"
						>
							<stop offset="5%" stopColor="#0693e3ff"></stop>
							<stop offset="95%" stopColor="#7bdcb5ff"></stop>
						</linearGradient>
					</defs>
					<path
						d="M 0,700 C 0,700 0,466 0,466 C 113.82142857142861,436.8928571428571 227.64285714285722,407.7857142857143 354,423 C 480.3571428571428,438.2142857142857 619.2499999999998,497.75 747,490 C 874.7500000000002,482.25 991.3571428571431,407.2142857142857 1105,392 C 1218.6428571428569,376.7857142857143 1329.3214285714284,421.3928571428571 1440,466 C 1440,466 1440,700 1440,700 Z"
						stroke="none"
						strokeWidth="0"
						fill="url(#gradient)"
						className="transition-all duration-300 ease-in-out delay-150 path-1"
					></path>
				</svg>
			</div>
			
		</>
	);
};
export default Inicio;
