import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import styled from "styled-components";

export const ListIcons = styled(ListItemIcon)`
	color: #ffffff;
`;

export const ListGroup = styled(List)`
	color: white;
`;

export const StyledLink = styled(Link)`
	color: white;
	text-decoration: none;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;
