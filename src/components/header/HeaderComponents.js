import styled from "styled-components";
import { FcMoneyTransfer } from "react-icons/fc";

export const Nav = styled.div`
  top: 0;
  position: fixed;
  width: 100vw;
  height: 5.35rem;
  padding: 1vw 3vw;
  z-index: 999;
  background-color: #fafafa;
  @media only screen and (max-width: 948px) {
    height: 5rem;
  }
  @media only screen and (max-width: 479px) {
    height: 4.65rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(FcMoneyTransfer)`
  font-size: calc(24px + 4.5vw);
  @media only screen and (max-width: 948px) {
    font-size: 10vw;
  }
  @media only screen and (max-width: 479px) {
    font-size: 15vw;
  }
`;

export const Side = styled.div`
  display: flex;
  width: 60.5%;
  justify-content: space-between;
`;
