import { BoxInfo } from "./BoxInfo";
import styled from "styled-components";

const BoxColor = styled(BoxInfo)`
	background: #f0f0f0ad;
	color: ${(props) => (props.primary ? "#ff3c3c" : "#009ffc")};
	border-bottom: 5px solid;
	border-bottom-color: ${(props) => (props.primary ? "#b91313" : "#00a2ff")};
	text-transform: uppercase;
	heigth: 150px;
	width: 250px;
	margin-bottom: 25px;
`;

export default BoxColor;
