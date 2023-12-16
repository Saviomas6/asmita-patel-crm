import styled from "styled-components";
export const HomeSectionMainContainer = styled.div`
  /* ... */
`;
export const HomeSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;
export const HomeSectionLeftContainer = styled.div``;
export const HomeSectionRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 600px;
  @media screen and (max-width: 1024px) {
    height: 400px;
    width: 400px;
  }
  @media screen and (max-width: 480px) {
    height: 230px;
    width: 230px;
  }
`;

export const HomeSectionHeading = styled.div`
  font-size: 50px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;
export const HomeSectionDescription = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.text};
  margin: 30px 0;
`;

export const HomeSectionButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 131px;
  margin: 30px 0;
`;
