import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/styles";
import { styled } from "@mui/material/styles";

// BoxInfo utilizado onde fica as informações de total membros, seniors etc.
export const BoxInfo = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: "center",
	color: theme.palette.text.primary,
	borderBottom: "solid",
	borderBottomColor: theme.palette.info.light,
}));
