import { makeStyles } from "@material-ui/styles";
import { styled } from "@mui/material/styles";

export const useStylesModal = makeStyles((theme) => ({
	subtext: {
		fontWeight: 700,
		fontSize: 15,
		textTransform: "uppercase",
		marginBottom: 5,
		color: "#589eaf",
	},
}));

export const styleModal = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	backgroundColor: "#498cb33b",
	color: "white",
	border: "2px solid #0000005c",
	boxShadow: 24,
	p: 4,
};

export const styleButtonModal = {
	marginTop: 2,
	height: 60,
	width: 330,
	backgroundColor: "#00bfffc1",
	color: "white",
	border: "2px solid #00000073",
	boxShadow: 24,
	p: 4,
};

export const styleList = {
	bgcolor: "#a4c5e042",
	borderBottom: "1px solid #6576c4",
	boxShadow: 4,
	borderRadius: 6,
	// marginTop: 2,
};
