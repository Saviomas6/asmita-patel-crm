import Lottie from "react-lottie";
import {
  Description,
  LottieContainer,
  LottieMainContainer,
} from "../../styles/sharedStyle";
import CustomModal from "../customModal/CustomModal";
import successLogo from "../../assets/successLogo.json";

interface I_Props {
  heading: string;
  description: string;
  onClick(): void;
}

const SuccessModal = ({ heading, description, onClick }: I_Props) => {
  const defaultSuccessOption = {
    loop: true,
    autoplay: true,
    animationData: successLogo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <CustomModal heading={heading} onClick={onClick}>
        <div>
          <LottieMainContainer>
            <LottieContainer>
              <Lottie options={defaultSuccessOption} />
            </LottieContainer>
          </LottieMainContainer>
          <Description>{description}</Description>
        </div>
      </CustomModal>
    </div>
  );
};

export default SuccessModal;
