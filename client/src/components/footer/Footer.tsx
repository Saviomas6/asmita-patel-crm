import {
  FooterIcon,
  FooterIconContainer,
  FooterLayout,
  FooterMainContainer,
  FooterText,
} from "./style";
import { Container } from "../../styles/sharedStyle";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <FooterLayout>
      <Container>
        <FooterMainContainer>
          <FooterIconContainer>
            <FooterIcon>
              <img src={logo} alt="logo" />
            </FooterIcon>
            <div>
              <FooterText>AP(CRM)</FooterText>
              <FooterText>&copy; Asmita Patel. All rights reserved.</FooterText>
            </div>
          </FooterIconContainer>
        </FooterMainContainer>
      </Container>
    </FooterLayout>
  );
};

export default Footer;
