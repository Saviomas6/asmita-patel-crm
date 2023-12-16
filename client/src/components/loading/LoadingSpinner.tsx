import { LoadingSpinnerContainer, LoadingSpinnerMainContainer } from "./style";
import Lottie from "react-lottie";
import loadingLogo from "../../assets/loadingLogo.json";

const LoadingSpinner = () => {
  const defaultLoadingOption = {
    loop: true,
    autoplay: true,
    animationData: loadingLogo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <LoadingSpinnerMainContainer>
      <LoadingSpinnerContainer>
        <Lottie options={defaultLoadingOption} />
      </LoadingSpinnerContainer>
    </LoadingSpinnerMainContainer>
  );
};

export default LoadingSpinner;
