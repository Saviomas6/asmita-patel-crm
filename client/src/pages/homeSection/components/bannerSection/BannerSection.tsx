import * as Styled from "./style";
import Button from "../../../../components/button/Button";
import Lottie from "react-lottie";
import homeBanner from "../../../../assets/homeBanner.json";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../../routes/path";
const BannerSection = () => {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: homeBanner,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Styled.HomeSectionMainContainer>
      <Styled.HomeSectionContainer>
        <Styled.HomeSectionLeftContainer>
          <Styled.HomeSectionHeading>
            Streamline Your Success with Asmita Patel(CRM)
          </Styled.HomeSectionHeading>
          <Styled.HomeSectionDescription>
            Welcome to Asmita Patel(CRM), where efficiency meets simplicity in
            managing your customer relationships. Our powerful CRM platform
            empowers your business to forge stronger connections, drive growth,
            and elevate customer satisfaction to new heights. From intuitive
            contact management to seamless communication tracking, Asmita
            Patel(CRM) is designed to optimize your workflow and enhance
            collaboration across your organization.
          </Styled.HomeSectionDescription>
          <Styled.HomeSectionButtonWrapper>
            <Button text="Get Started" onClick={() => navigate(Paths.client)} />
          </Styled.HomeSectionButtonWrapper>
        </Styled.HomeSectionLeftContainer>
        <Styled.HomeSectionRightContainer>
          <Lottie options={defaultOptions} />
        </Styled.HomeSectionRightContainer>
      </Styled.HomeSectionContainer>
    </Styled.HomeSectionMainContainer>
  );
};

export default BannerSection;
