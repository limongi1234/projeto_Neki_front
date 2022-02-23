import "moment/locale/pt-br";

import AdapterMoment from "@mui/lab/AdapterMoment";
import Box from "@mui/material/Box";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import React from "react";
import TextField from "@mui/material/TextField";
import TimePicker from "@mui/lab/TimePicker";
import Typography from "@mui/material/Typography";

const InputHora = ({ label, value, onChange, helpText }) => {
	return (
		<LocalizationProvider dateAdapter={AdapterMoment} locale="pt-br">
			<Box style={{ marginTop: 15 }}>
				<TimePicker
					label={label}
					value={value}
					onChange={onChange}
					renderInput={(params) => <TextField {...params} />}
				/>

				<Typography
					variant="subtitle2"
					component="div"
					style={{ marginTop: 5, color: "grey" }}
				>
					{helpText}
				</Typography>
			</Box>
		</LocalizationProvider>
	);
};

export default InputHora;
