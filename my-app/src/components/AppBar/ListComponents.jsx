import * as React from "react";

import { ListGroup, ListIcons, StyledLink } from "../styles";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const ListComponents = ({ to, handleOnClick, icon, text }) => {
	return (
		<ListGroup>
			<StyledLink to={to} onClick={handleOnClick}>
				<ListItem button>
					<ListIcons> {icon} </ListIcons>
					<ListItemText primary={text} />
				</ListItem>
			</StyledLink>
		</ListGroup>
	);
};

export default ListComponents;
