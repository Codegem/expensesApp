import styled from "styled-components";
import { FcSalesPerformance } from "react-icons/fc";

export const Nav = styled.div`
  width: 90vw;
`;

export const Header = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.p`
  font-size: 2.5vw;
`;

export const Logo = styled(FcSalesPerformance)`
  margin: 0.5vw;
  font-size: 2.5vw;
`;
