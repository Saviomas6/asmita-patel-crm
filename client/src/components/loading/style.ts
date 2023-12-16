import { styled } from "styled-components";

export const LoadingSpinnerMainContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  display: grid;
  place-items: center;
  background-color: #181a2a;
`;
export const LoadingSpinnerContainer = styled.div`
  height: 300px;
  width: 300px;
`;
