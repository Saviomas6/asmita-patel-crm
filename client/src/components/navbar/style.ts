import styled from "styled-components";
export const NavbarLayout = styled.div`
  background-color: ${({ theme }) => theme.bodyColor};
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  align-items: center;
  z-index: 1000;
`;
export const NavbarMainContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: 80px;
  align-items: center;
`;
export const NavbarLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const NavbarLogoImageContainer = styled.div`
  display: flex;
  height: 30px;
  width: 30px;
`;

export const NavbarLogoText = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    color: #4b6bfb;
  }
`;
export const NavTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
export const NavTab = styled.div<{ pathname?: boolean }>`
  font-size: 18px;
  font-weight: ${({ pathname }) => (pathname ? 600 : 500)};
  color: ${({ pathname, theme }) => (pathname ? "#4b6bfb" : theme.text)};
  border-bottom: ${({ pathname }) => (pathname ? "1px solid #4b6bfb" : "none")};
  padding: 3px 0;
  cursor: pointer;
`;
export const NavbarButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 120px 120px;
  grid-gap: 20px;
  align-items: center;
`;

export const ProfileImageMainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
`;

export const ProfileImageContainer = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 100%;
  background-color: #4b6bfb;
  padding: 2px;
  cursor: pointer;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  object-fit: cover;
`;

export const NavDropDownContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  width: 170px;
  border-radius: 10px;
  position: absolute;
  top: 50px;
  left: -85px;
  padding: 0 10px;
  border: 1px solid #3b3c4a;
`;
export const NavDropDown = styled.div`
  color: ${({ theme }) => theme.text};
  margin: 10px 0;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    background-color: #4b6bfb;
    color: #fff;
  }
`;
