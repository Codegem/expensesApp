import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  svg {
    font-size: 2rem;
  }
  &.delete {
    padding: 0;
    font-size: 2rem;
  }

  @media screen and (max-width: 479px) {
    width: 8rem;
    svg {
      font-size: 3rem;
    }
    &.delete {
      width: 3rem;
      padding: 0;
      font-size: 2rem;
    }
  }
`;

export const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  background: none;
  cursor: pointer;
  border-bottom: 1px solid black;
  height: 3rem;
  padding: 0.3rem;
  width: 7.5rem;
  text-decoration: none;
  color: black;
  svg {
    font-size: 1.5rem;
  }
  &.delete {
    border: none;
    svg {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 479px) {
    width: 5.3rem;
    svg {
      font-size: 1.5rem;
      margin-left: 0.3rem;
    }
  }

  @media screen and (max-width: 948px) {
    width: 5.5rem;
    svg {
      font-size: 1.5rem;
      margin-left: 0.3rem;
    }
  }
`;

export const ButtonText = styled.p`
  font-size: 1.5rem;
  margin-left: 5px;
  text-transform: uppercase;

  @media screen and (max-width: 479px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 948px) {
    font-size: 1rem;
  }
`;
