import { styled } from "styled-components";

export const StyledModal = styled.div`
  width: 100%;
  max-width: 1830px;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  z-index-1;
  position: fixed;
  top: 0;
  overflow: auto;
`;

export const StyledModalHeader = styled.div`
  padding: 2px 16px;
  background-color: #4f514f;
  color: white;
  border-radius: 10px 10px 0 0;

  & h3 {
    text-align: center;
  }
`;

export const StyledModalContent = styled.div`
  background-color: #fefefe;
  margin: 7% auto;
  border-radius: 10px;
  width: 80%;
`;

export const StyledModalBody = styled.div`
  padding: 16px;

  & div:first-child {
    display: flex;
    margin-bottom: 20px;

    & img {
      margin-right: 16px;
      box-shadow: 5px 5px 10px 5px #d2d2d2;
    }
  }
`;

export const StyledCloseButton = styled.span`
  color: white;
  float: right;
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;
`;