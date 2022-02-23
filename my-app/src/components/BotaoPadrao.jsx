import styled from "styled-components";

const BotaoPadrao = styled.button`
	background: ${(props) => (props.primary ? "#d10000" : "#00bbf9")};
	color: white;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid ${(props) => (props.primary ? "#b13b3bac" : "#3a677c81")};
	border-radius: 3px;

	&:hover {
		background: ${(props) => (props.primary ? "#9c0015a9" : "#002efd89")};
		box-shadow: 1px 2px 4px 1px #11405087;
		cursor: pointer;
	}
`;

export default BotaoPadrao;
