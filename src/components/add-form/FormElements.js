import styled from "styled-components";

export const AddFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PurposeImg = styled.div`
  font-size: 1.3rem;
`;

export const ModalText = styled.p`
  text-align: center;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
  }
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  width: 20%;
  top: 30%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 479px) {
    left: 40%;
    transform: translate(-100%);
  }
`;
