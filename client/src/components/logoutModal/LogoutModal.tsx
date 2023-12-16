import { useAppSelector } from "../../logic/redux/store/hooks";
import Button from "../button/Button";
import CustomModal from "../customModal/CustomModal";
import {
  ButtonWrapper,
  UserImage,
  UserImageContainer,
  UserNameDetail,
} from "./style";
import { AiOutlineUser } from "react-icons/ai";

interface I_Props {
  modalOpen(value: boolean): void;
  handleLogout?(): void;
}

const LogoutModal = ({ modalOpen, handleLogout }: I_Props) => {
  const isLoggedDetail = useAppSelector(
    (state) => state.userReducer.isLoggedDetail
  );

  return (
    <CustomModal
      heading="LOGOUT"
      bgColor="rgba(0,0,0,0.8)"
      onClick={() => {
        modalOpen(false);
      }}>
      <div>
        <UserImageContainer>
          <UserImage>
            <AiOutlineUser size={50} />
          </UserImage>
        </UserImageContainer>
        <UserNameDetail>{isLoggedDetail[0].username}</UserNameDetail>
        <ButtonWrapper>
          <Button
            type="button"
            text="CANCEL"
            bgColor="#E02D30"
            onClick={() => {
              modalOpen(false);
            }}
          />
          <Button type="button" text="LOGOUT" onClick={handleLogout} />
        </ButtonWrapper>
      </div>
    </CustomModal>
  );
};

export default LogoutModal;
