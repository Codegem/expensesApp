import styled from "styled-components";

export const AllExpensesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 80vw;
  width: 100%;
  position: relative;
  overflow-y: scroll;
  @media screen and (max-width: 479px) {
    min-height: 100vh;
    margin-top: -10vh;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
