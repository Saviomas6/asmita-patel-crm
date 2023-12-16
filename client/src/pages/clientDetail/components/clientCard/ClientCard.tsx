import Button from "../../../../components/button/Button";
import {
  ClientCardButtonWrapper,
  ClientCardContainer,
  ClientCardLabelText,
  ClientCardTextWrapper,
  ClientCardValueText,
} from "./style";

interface I_ClientCardProps {
  name: string;
  phoneNo: string;
  address: string;
  companyName: string;
  status: string;
  notes: string;
  handleEdit(): void;
  handleDelete(): void;
}

const ClientCard = ({
  name,
  companyName,
  status,
  address,
  notes,
  phoneNo,
  handleEdit,
  handleDelete,
}: I_ClientCardProps) => {
  return (
    <ClientCardContainer>
      <ClientCardTextWrapper>
        <ClientCardLabelText>Name :</ClientCardLabelText>
        <ClientCardValueText>{name}</ClientCardValueText>
      </ClientCardTextWrapper>
      <ClientCardTextWrapper>
        <ClientCardLabelText>Phone No :</ClientCardLabelText>
        <ClientCardValueText>{phoneNo}</ClientCardValueText>
      </ClientCardTextWrapper>
      <ClientCardTextWrapper>
        <ClientCardLabelText>Address :</ClientCardLabelText>
        <ClientCardValueText>{address}</ClientCardValueText>
      </ClientCardTextWrapper>
      <ClientCardTextWrapper>
        <ClientCardLabelText>Company :</ClientCardLabelText>
        <ClientCardValueText>{companyName}</ClientCardValueText>
      </ClientCardTextWrapper>
      <ClientCardTextWrapper>
        <ClientCardLabelText>Status :</ClientCardLabelText>
        <ClientCardValueText>{status}</ClientCardValueText>
      </ClientCardTextWrapper>
      <ClientCardTextWrapper>
        <ClientCardLabelText>Notes :</ClientCardLabelText>
        <ClientCardValueText>{notes}</ClientCardValueText>
      </ClientCardTextWrapper>
      <ClientCardButtonWrapper>
        <Button
          type="button"
          text="Edit"
          bgColor="#FFA500"
          onClick={handleEdit}
        />
        <Button
          type="button"
          text="Delete"
          onClick={handleDelete}
          bgColor="#FF0000"
        />
      </ClientCardButtonWrapper>
    </ClientCardContainer>
  );
};

export default ClientCard;
