import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  background: none;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  svg {
    font-size: 1.5vw;
  }
`;

export const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  background: none;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  svg {
    font-size: 1.5vw;
  }
`;

export const ButtonText = styled.p`
  font-size: 1.2vw;
  margin: 5px;
  text-transform: uppercase;
`;
