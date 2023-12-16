import { LoadingTextContainer, LoadingTextImage } from "./style";
import loadingText from "../../assets/loadingText.svg";
const LoadingText = () => {
  return (
    <LoadingTextContainer>
      <LoadingTextImage src={loadingText} />
    </LoadingTextContainer>
  );
};

export default LoadingText;
