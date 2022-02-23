import "moment/locale/pt-br";

import AdapterMoment from "@mui/lab/AdapterMoment";
import Box from "@mui/material/Box";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import React from "react";
import TextField from "@mui/material/TextField";

const InputData = ({ label, value, onChange }) => {
	return (
		<Box style={{ marginTop: 5 }}>
			<LocalizationProvider dateAdapter={AdapterMoment} locale="pt-br">
				<DatePicker
					label={label}
					value={value}
					onChange={onChange}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
		</Box>
	);
};

export default InputData;
