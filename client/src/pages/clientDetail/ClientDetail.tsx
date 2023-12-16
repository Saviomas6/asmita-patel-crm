import { useRef, useState } from "react";
import Button from "../../components/button/Button";
import { Container, OpacityAnimation, Wrapper } from "../../styles/sharedStyle";
import { debounce } from "../../utils/utils";
import ClientCard from "./components/clientCard/ClientCard";
import { ClientCardMainContainer } from "./components/clientCard/style";
import {
  AddClientButtonWrapper,
  ClientDetailHeading,
  FilterMainWrapper,
  NoClientFoundText,
  SearchInputField,
  SearchWrapper,
} from "./style";
import SelectDropDown from "../../components/selectDropDown/SelectDropDown";
import useOutsideClick from "../../hooks/useOutSideClick";
import AddClient from "./components/addClient/AddClient";
import ConfirmModal from "../../components/confirmModal/ConfirmModal";
import { useGetAllClient } from "../../logic/reactQuery/query/useGetAllClient";
import { useDeleteClient } from "../../logic/reactQuery/mutation/useMutationDeleteClient";
import SuccessModal from "../../components/successModal/SuccessModal";

interface I_CreateClientProps {
  _id: string;
  name: string;
  phoneNo: string;
  address: string;
  company: string;
  status: string;
  notes: string;
}

const ClientDetail = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isClientID, setIsClientID] = useState<string>("");
  const [isAddClientModalOpen, setIsAddClientModalOpen] =
    useState<boolean>(false);
  const [isAddClientSuccessOpen, setIsAddClientSuccessOpen] =
    useState<boolean>(false);
  const [isDeleteClientModalOpen, setIsDeleteClientModalOpen] =
    useState<boolean>(false);
  const [isDeleteClientSuccessOpen, setIsDeleteClientSuccessOpen] =
    useState<boolean>(false);
  const [isEditClientModalOpen, setIsEditClientModalOpen] =
    useState<boolean>(false);
  const [isEditClientSuccessOpen, setIsEditClientSuccessOpen] =
    useState<boolean>(false);
  const actionCategoryDropDownDataRef = useRef<HTMLDivElement>(null);
  const [isActionCategoryDropDownOpen, setActionCategoryDropDownOpen] =
    useState<boolean>(false);
  const [selectedActionCategoryData, setSelectedActionCategoryData] =
    useState<any>("");
  useOutsideClick({
    isOpen: isActionCategoryDropDownOpen,
    node: actionCategoryDropDownDataRef,
    onOutsideClick: () => setActionCategoryDropDownOpen(false),
  });

  const { data } = useGetAllClient(searchValue, selectedActionCategoryData);
  const { mutateAsync, isLoading } = useDeleteClient();

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleDebounce = debounce((e: any) => handleChange(e), 1000);

  console.log(data);

  const handleDelete = async () => {
    try {
      const paramsData = {
        id: isClientID,
      };

      const result = await mutateAsync(paramsData);
      if (result.status === 200) {
        setIsDeleteClientModalOpen(!isDeleteClientModalOpen);
        setIsDeleteClientSuccessOpen(!isDeleteClientSuccessOpen);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Wrapper>
        <OpacityAnimation>
          <ClientDetailHeading>Client Details</ClientDetailHeading>
          <FilterMainWrapper>
            <SearchWrapper>
              <SearchInputField
                type="text"
                placeholder="Search"
                onChange={handleDebounce}
              />
              <div ref={actionCategoryDropDownDataRef}>
                <SelectDropDown
                  selectedData={selectedActionCategoryData}
                  setSelectedData={setSelectedActionCategoryData}
                  isDropDownOpen={isActionCategoryDropDownOpen}
                  setIsDropDownOpen={setActionCategoryDropDownOpen}
                  dropDownData={["Potential", "Current", "Past"]}
                />
              </div>
            </SearchWrapper>

            <AddClientButtonWrapper>
              <Button
                type="button"
                text="Add Client"
                onClick={() =>
                  setIsAddClientModalOpen(!isActionCategoryDropDownOpen)
                }
              />
            </AddClientButtonWrapper>
          </FilterMainWrapper>
          <ClientCardMainContainer>
            {data?.map((value: I_CreateClientProps) => (
              <ClientCard
                name={value.name}
                address={value.address}
                companyName={value.company}
                notes={value.notes}
                phoneNo={value.phoneNo}
                status={value.status}
                handleEdit={() => {
                  setIsClientID(value._id);
                  setIsEditClientModalOpen(!isEditClientModalOpen);
                }}
                handleDelete={() => {
                  setIsClientID(value._id);
                  setIsDeleteClientModalOpen(!isDeleteClientModalOpen);
                }}
              />
            ))}
          </ClientCardMainContainer>
          {data?.length === 0 && (
            <NoClientFoundText>No Client Found</NoClientFoundText>
          )}
        </OpacityAnimation>
      </Wrapper>
      {isAddClientModalOpen && (
        <AddClient
          modalOpen={setIsAddClientModalOpen}
          setIsAddClientSuccessOpen={setIsAddClientSuccessOpen}
        />
      )}
      {isEditClientModalOpen && (
        <AddClient
          modalOpen={setIsEditClientModalOpen}
          isEditable={true}
          isIdSelected={isClientID}
          setIsAddClientSuccessOpen={setIsEditClientSuccessOpen}
        />
      )}
      {isDeleteClientModalOpen && (
        <ConfirmModal
          btn2Text="Delete"
          btnText1="Cancel"
          description="Do you really want to delete these record?"
          heading="Are you sure?"
          onClick={() => setIsDeleteClientModalOpen(!isDeleteClientModalOpen)}
          handleDelete={handleDelete}
          isLoading={isLoading}
        />
      )}
      {isDeleteClientSuccessOpen && (
        <SuccessModal
          heading="Success"
          description="Successfully deleted the record"
          onClick={() =>
            setIsDeleteClientSuccessOpen(!isDeleteClientSuccessOpen)
          }
        />
      )}
      {isAddClientSuccessOpen && (
        <SuccessModal
          heading="Success"
          description="Successfully added the record"
          onClick={() => setIsAddClientSuccessOpen(!isAddClientSuccessOpen)}
        />
      )}
      {isEditClientSuccessOpen && (
        <SuccessModal
          heading="Success"
          description="Successfully edited the record"
          onClick={() => setIsEditClientSuccessOpen(!isEditClientSuccessOpen)}
        />
      )}
    </Container>
  );
};

export default ClientDetail;
