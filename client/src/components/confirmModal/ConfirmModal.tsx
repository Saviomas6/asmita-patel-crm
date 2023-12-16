import Lottie from "react-lottie";
import {
  Description,
  LottieContainer,
  LottieMainContainer,
} from "../../styles/sharedStyle";
import CustomModal from "../customModal/CustomModal";
import { ConfirmDeleteButtonWrapper } from "./style";
import deleteLogo from "../../assets/deleteLogo.json";
import Button from "../button/Button";

interface I_Props {
  heading: string;
  onClick(): void;
  description: string;
  btnText1: string;
  btn2Text: string;
  bgColor?: string;
  handleDelete(): void;
  isLoading: boolean;
}

const ConfirmModal = ({
  btn2Text,
  btnText1,
  description,
  heading,
  onClick,
  bgColor,
  handleDelete,
  isLoading,
}: I_Props) => {
  const defaultDeleteOption = {
    loop: true,
    autoplay: true,
    animationData: deleteLogo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <CustomModal heading={heading} onClick={onClick} bgColor={bgColor}>
        <div>
          <LottieMainContainer>
            <LottieContainer>
              <Lottie options={defaultDeleteOption} />
            </LottieContainer>
          </LottieMainContainer>
          <Description>{description}</Description>
          <ConfirmDeleteButtonWrapper>
            <Button text={btnText1} bgColor="#FFA500" onClick={onClick} />
            <Button
              text={btn2Text}
              bgColor="#ff0000"
              onClick={handleDelete}
              isLoading={isLoading}
            />
          </ConfirmDeleteButtonWrapper>
        </div>
      </CustomModal>
    </div>
  );
};

export default ConfirmModal;
