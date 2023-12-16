import { useState } from "react";
import * as Styled from "./style";
import logo from "../../assets/logo.svg";
import Button from "../button/Button";
import { Container, StyledLink } from "../../styles/sharedStyle";
import { Paths } from "../../routes/path";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../logic/redux/store/hooks";
import { setLoggedDetail, setLoggedIn } from "../../logic/redux/action/action";
import { useDispatch } from "react-redux";
import LogoutModal from "../logoutModal/LogoutModal";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
  const isLoggedDetail = useAppSelector(
    (state) => state.userReducer.isLoggedDetail
  );

  const navTabData = [
    {
      id: 1,
      name: "HOME",
      link: Paths.home,
    },
    {
      id: 2,
      name: "ADD CLIENT",
      link: Paths.client,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    dispatch(setLoggedIn(false));
    dispatch(setLoggedDetail([]));
    setIsDropDown(false);
    navigate(Paths.home);
  };

  return (
    <Styled.NavbarLayout>
      <Container>
        <Styled.NavbarMainContainer>
          <StyledLink to={Paths.home}>
            <Styled.NavbarLogoContainer>
              <Styled.NavbarLogoImageContainer>
                <img src={logo} alt="logo" />
              </Styled.NavbarLogoImageContainer>
              <Styled.NavbarLogoText>AP(CRM)</Styled.NavbarLogoText>
            </Styled.NavbarLogoContainer>
          </StyledLink>
          <Styled.NavTabs>
            {navTabData.map((tab) => (
              <StyledLink to={tab.link} key={tab.id}>
                <Styled.NavTab pathname={location?.pathname === tab.link}>
                  {tab.name}
                </Styled.NavTab>
              </StyledLink>
            ))}
          </Styled.NavTabs>
          {isLoggedIn ? (
            <Styled.ProfileImageMainContainer>
              <Styled.ProfileImageContainer
                onClick={() => setIsDropDown(!isDropDown)}>
                <div>
                  {(isLoggedDetail[0]?.name &&
                    isLoggedDetail[0]?.name.charAt(0)) ||
                    ""}
                </div>
              </Styled.ProfileImageContainer>
            </Styled.ProfileImageMainContainer>
          ) : (
            <Styled.NavbarButtonWrapper>
              <Button
                text="SIGN IN"
                onClick={() => {
                  navigate(Paths.signIn);
                }}
                border="none"
                bgColor="#4b6bfb"
              />
              <Button
                text="REGISTER"
                onClick={() => {
                  navigate(Paths.register);
                }}
                border="none"
                bgColor="#4b6bfb"
              />
            </Styled.NavbarButtonWrapper>
          )}
        </Styled.NavbarMainContainer>
        {isDropDown && (
          <LogoutModal modalOpen={setIsDropDown} handleLogout={handleLogout} />
        )}
      </Container>
    </Styled.NavbarLayout>
  );
};

export default Navbar;
