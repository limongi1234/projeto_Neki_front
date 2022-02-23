import "moment/locale/pt-br";

import React, { useEffect } from "react";

import Button from "@mui/material/Button";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import moment from "moment";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AlertMSG = ({ verificarDias, data, children }) => {
	const [open, setOpen] = React.useState(false);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	const verificarD = verificarDias;

	const dataAteFimDoMes = data;

	useEffect(() => {
		let dia = dataAteFimDoMes;

		if (verificarD) {
			if (dia < 20) {
				return setOpen(true);
			} else {
				return console.log("not today my friendo");
			}
		}
	}, []);

	return (
		<Stack spacing={2} sx={{ width: "100%" }}>
			{/* <Button variant="outlined" onClick={handleClick}>
				Open success snackbar
			</Button> */}
			<Snackbar
				open={open}
				autoHideDuration={5000}
				onClose={handleClose}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			>
				<Alert
					onClose={handleClose}
					severity="warning"
					sx={{ width: "100%" }}
				>
					{children}
				</Alert>
			</Snackbar>
		</Stack>
	);
};
