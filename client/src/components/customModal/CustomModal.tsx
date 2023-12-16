import {
  CustomModalClose,
  CustomModalContainer,
  CustomModalHeading,
  CustomModalLayout,
} from "./style";
import { AiFillCloseCircle } from "react-icons/ai";

interface I_Props {
  children: React.ReactNode;
  onClick(): void;
  heading: string;
  bgColor?: string;
  modalWidth?: string;
}

const CustomModal = ({
  children,
  onClick,
  heading,
  bgColor,
  modalWidth,
}: I_Props) => {
  const handleOutsideClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  return (
    <CustomModalLayout bgColor={bgColor} onMouseDown={handleOutsideClick}>
      <CustomModalContainer modalWidth={modalWidth}>
        <CustomModalHeading>{heading}</CustomModalHeading>
        {children}
        <CustomModalClose onClick={onClick}>
          <AiFillCloseCircle size={25} />
        </CustomModalClose>
      </CustomModalContainer>
    </CustomModalLayout>
  );
};

export default CustomModal;
