import { Container, OpacityAnimation, Wrapper } from "../../styles/sharedStyle";
import BannerSection from "./components/bannerSection/BannerSection";
const HomeSection = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <OpacityAnimation>
            <BannerSection />
          </OpacityAnimation>
        </Wrapper>
      </Container>
    </>
  );
};

export default HomeSection;
