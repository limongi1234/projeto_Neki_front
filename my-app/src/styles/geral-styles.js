import styled from "styled-components";

export const DivPersonalizada = styled.div`
    width: ${props => props.width};
    border: ${props => props.border};
    border-radius:${props => props.borderRadius};
    padding: 65px;
    margin: ${props => props.margin};
    margin-top: ${props => props.marginTop};
    display: ${props => props.display};  
    background-color: rgb(0, 0, 0, 0.1);
    
`;