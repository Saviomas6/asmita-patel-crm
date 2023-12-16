import Lottie from "react-lottie";
import {
  Description,
  LottieContainer,
  LottieMainContainer,
} from "../../styles/sharedStyle";
import CustomModal from "../customModal/CustomModal";
import errorLogo from "../../assets/errorLogo.json";

interface I_Props {
  heading: string;
  description: string;
  onClick(): void;
}
const ErrorModal = ({ heading, description, onClick }: I_Props) => {
  const defaultErrorOption = {
    loop: true,
    autoplay: true,
    animationData: errorLogo,
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
              <Lottie options={defaultErrorOption} />
            </LottieContainer>
          </LottieMainContainer>
          <Description>{description}</Description>
        </div>
      </CustomModal>
    </div>
  );
};

export default ErrorModal;
