import styled from "styled-components";

export const FooterLayout = styled.div`
  background-color: ${({ theme }) => theme.bodyColor};
  position: fixed;
  bottom: 0;
  left: 0;
  height: 80px;
  width: 100%;
  align-items: center;
  z-index: 100;
`;

export const FooterMainContainer = styled.div`
  height: 80px;
  background-color: ${({ theme }) => theme.bodyColor};
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
`;

export const FooterIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const FooterIcon = styled.div`
  display: flex;
  height: 30px;
  width: 30px;
`;
export const FooterText = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;
