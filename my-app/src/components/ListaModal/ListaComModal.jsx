import "moment/locale/pt-br";

import * as React from "react";

import { styleButtonModal, styleList, styleModal } from "./styles";

import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Modal from "@mui/material/Modal";
import { StyledLink } from "../styles";
import TocIcon from "@mui/icons-material/Toc";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { useStylesModal } from "./styles";

const ListaComModal = ({
	botaoEsquerdaTo,
	botaoDireitaTo,
	alt,
	src,
	nome,
	nivel,
	qtdDiasFerias,
	diaFolga,
	textoDentroModal,
	nomeBotaoModalEsquerda,
	nomeBotaoModalDireita,
}) => {
	const classes = useStylesModal();

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<ListItem sx={styleList}>
			<ListItemAvatar>
				<Avatar alt={alt} src={src} />
			</ListItemAvatar>
			<ListItemText
				secondary={
					<React.Fragment>
						<Typography
							className={classes.subtext}
							component="span"
							variant="h3"
						>
							{nome}
						</Typography>
						{" - "}
						{nivel}

						{qtdDiasFerias && diaFolga && (
							<Grid container>
								<Grid item xs={12}>
									<Typography
										id="keep-mounted-modal-title"
										variant="body1"
										className={classes.subtext}
									>
										Dia - {diaFolga}
									</Typography>
									<Typography
										id="keep-mounted-modal-title"
										variant="body1"
										className={classes.subtext}
									>
										Restantes - {qtdDiasFerias}
									</Typography>
								</Grid>
							</Grid>
						)}
					</React.Fragment>
				}
			/>

			{/* ÁREA DO MODAL */}
			<div>
				<Button onClick={handleOpen}>
					<TocIcon style={{ color: "#2C7DA0" }} />
				</Button>
				<Modal
					keepMounted
					open={open}
					onClose={handleClose}
					aria-labelledby="keep-mounted-modal-title"
					aria-describedby="keep-mounted-modal-description"
				>
					<Box sx={styleModal}>
						<Typography
							id="keep-mounted-modal-title"
							variant="h6"
							component="h2"
						>
							{textoDentroModal}
						</Typography>
						<StyledLink to={botaoEsquerdaTo}>
							<Button
								id="keep-mounted-modal-description"
								sx={{ mt: 2 }}
								sx={styleButtonModal}
							>
								{nomeBotaoModalEsquerda}
							</Button>
						</StyledLink>
						<StyledLink to={botaoDireitaTo}>
							<Button
								id="keep-mounted-modal-description"
								sx={{ mt: 2 }}
								sx={styleButtonModal}
							>
								{nomeBotaoModalDireita}
							</Button>
						</StyledLink>
					</Box>
				</Modal>
			</div>
		</ListItem>
	);
};

export default ListaComModal;
