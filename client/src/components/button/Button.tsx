import { ButtonContainer, LoadingContainer } from "./style";
import buttonLoading from "../../assets/buttonLoading.json";
import Lottie from "react-lottie";
interface I_Props {
  bgColor?: string;
  border?: string;
  onClick?(): void;
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}
const Button = ({
  bgColor,
  border,
  onClick,
  text,
  disabled,
  type,
  isLoading,
}: I_Props) => {
  const defaultLoadingOption = {
    loop: true,
    autoplay: true,
    animationData: buttonLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <ButtonContainer
      type={type}
      disabled={disabled}
      bgColor={bgColor}
      border={border}
      onClick={onClick}>
      {isLoading ? (
        <LoadingContainer>
          <Lottie options={defaultLoadingOption} />
        </LoadingContainer>
      ) : (
        text
      )}
    </ButtonContainer>
  );
};

export default Button;
