import { Box } from "@mui/material";
import React from "react";

export const ScrollVertical = ({ children }) => {
	return (
		<Box
			style={{
				// width: "100%",
				maxHeight: 500,
				position: "relative",
				overflow: "auto",

				"& ul": { padding: 0 },
			}}
		>
			{children}
		</Box>
	);
};

export const SmallScrollVertical = ({ children }) => {
	return (
		<Box
			style={{
				// width: "100%",
				maxHeight: 200,
				position: "relative",
				overflow: "auto",

				"& ul": { padding: 0 },
			}}
		>
			{children}
		</Box>
	);
};
