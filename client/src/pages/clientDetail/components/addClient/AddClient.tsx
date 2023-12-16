import {
  ButtonWrapper,
  DropDownContent,
  DropDownContentContainer,
  DropDownLabel,
  DropDownLabelContainer,
  DropDownMainContainer,
  InputFieldGridWrapper,
} from "./style";
import { Formik, Form, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import * as Yup from "yup";
import Button from "../../../../components/button/Button";
import CustomModal from "../../../../components/customModal/CustomModal";
import {
  ErrorMessageText,
  InputField,
  InputFieldMainWrapper,
  InputFieldWrapper,
  InputLabel,
} from "../../../../styles/sharedStyle";
import { useCreateClientMutation } from "../../../../logic/reactQuery/mutation/useMutationCreateClient";
import { useGetClientById } from "../../../../logic/reactQuery/query/useGetClientById";
import { useEditClient } from "../../../../logic/reactQuery/mutation/useMutationEditClient";

interface I_Props {
  modalOpen(value: boolean): void;
  isEditable?: boolean;
  isIdSelected?: string;
  setIsAddClientSuccessOpen?: any;
}

interface I_CreateClientProps {
  name: string;
  phoneNo: string;
  address: string;
  company: string;
  status: string;
  notes: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  company: Yup.string().required("Company is required"),
  status: Yup.string().required("Status is required"),
  notes: Yup.string().required("Notes is required"),
});

const AddClient = ({
  modalOpen,
  isEditable,
  setIsAddClientSuccessOpen,
  isIdSelected,
}: I_Props) => {
  const { mutateAsync, isLoading } = useCreateClientMutation();
  const { mutateAsync: editClientMutate, isLoading: editClientLoading } =
    useEditClient();
  const { data } = useGetClientById(isIdSelected);
  const [isStatusDropDownOpen, setStatusDropDownOpen] =
    useState<boolean>(false);
  const [statusValue, setStatusValue] = useState<string>("");
  const initialValues = {
    name: "",
    address: "",
    phoneNo: "",
    company: "",
    status: "",
    notes: "",
  };
  const savedValue = {
    name: data && data[0]?.name,
    phoneNo: data && data[0]?.phoneNo,
    address: data && data[0]?.address,
    company: data && data[0]?.company,
    status: data && data[0]?.status,
    notes: data && data[0]?.notes,
  };

  const handleFormSubmit = async (
    addMember: I_CreateClientProps,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      if (isEditable) {
        const editClientData = {
          _id: isIdSelected,
          name: addMember.name,
          phoneNo: addMember.phoneNo,
          address: addMember.address,
          company: addMember.company,
          status: addMember.status,
          notes: addMember.notes,
        };
        const result = await editClientMutate(editClientData);
        if (result.data.message) {
          modalOpen(false);
          setIsAddClientSuccessOpen(true);
        }
      } else {
        const addClientData = {
          name: addMember.name,
          phoneNo: addMember.phoneNo,
          address: addMember.address,
          company: addMember.company,
          status: addMember.status,
          notes: addMember.notes,
        };
        const result = await mutateAsync(addClientData);
        if (result.data.message) {
          modalOpen(false);
          setIsAddClientSuccessOpen(true);
        }
      }
    } catch (e) {
      console.log(e);
      resetForm();
    }
  };

  return (
    <div>
      <CustomModal
        modalWidth="600px"
        heading={isEditable ? "EDIT" : "ADD"}
        bgColor="rgba(0,0,0,0.7)"
        onClick={() => {
          modalOpen(false);
        }}>
        <Formik
          initialValues={isEditable ? savedValue : initialValues}
          onSubmit={handleFormSubmit}
          enableReinitialize={true}
          validationSchema={validationSchema}>
          {({ setFieldValue }) => {
            useEffect(() => {
              if (isEditable) {
                setStatusValue(data && data[0]?.status);
              }
            }, [data]);
            return (
              <Form>
                <InputFieldGridWrapper>
                  <InputFieldMainWrapper>
                    <InputLabel>Name</InputLabel>
                    <InputFieldWrapper>
                      <InputField type="text" placeholder="Name" name="name" />
                    </InputFieldWrapper>
                    <ErrorMessageText>
                      <ErrorMessage name="name" />
                    </ErrorMessageText>
                  </InputFieldMainWrapper>
                  <InputFieldMainWrapper>
                    <InputLabel>Phone Number</InputLabel>
                    <InputFieldWrapper>
                      <InputField
                        type="text"
                        placeholder="Phone Number"
                        name="phoneNo"
                      />
                    </InputFieldWrapper>
                    <ErrorMessageText>
                      <ErrorMessage name="phoneNo" />
                    </ErrorMessageText>
                  </InputFieldMainWrapper>
                </InputFieldGridWrapper>

                <InputFieldGridWrapper>
                  <InputFieldMainWrapper>
                    <InputLabel>Address</InputLabel>
                    <InputFieldWrapper>
                      <InputField
                        type="text"
                        placeholder="Address"
                        name="address"
                      />
                    </InputFieldWrapper>
                    <ErrorMessageText>
                      <ErrorMessage name="address" />
                    </ErrorMessageText>
                  </InputFieldMainWrapper>
                  <InputFieldMainWrapper>
                    <InputLabel>Company</InputLabel>
                    <InputFieldWrapper>
                      <InputField
                        type="text"
                        placeholder="Company"
                        name="company"
                      />
                    </InputFieldWrapper>
                    <ErrorMessageText>
                      <ErrorMessage name="company" />
                    </ErrorMessageText>
                  </InputFieldMainWrapper>
                </InputFieldGridWrapper>

                <InputFieldMainWrapper>
                  <InputLabel>Status</InputLabel>
                  <DropDownMainContainer>
                    <DropDownLabelContainer
                      onClick={() =>
                        setStatusDropDownOpen(!isStatusDropDownOpen)
                      }>
                      <DropDownLabel>
                        {statusValue ? statusValue : "Status"}
                      </DropDownLabel>
                      <div style={{ display: "flex" }}>
                        <IoIosArrowDown />
                      </div>
                    </DropDownLabelContainer>
                    {isStatusDropDownOpen && (
                      <DropDownContentContainer>
                        <DropDownContent
                          onClick={() => {
                            setStatusValue("Potential");
                            setFieldValue("status", "Potential");
                            setStatusDropDownOpen(false);
                          }}>
                          Potential
                        </DropDownContent>
                        <DropDownContent
                          onClick={() => {
                            setStatusValue("Current");
                            setFieldValue("status", "Current");
                            setStatusDropDownOpen(false);
                          }}>
                          Current
                        </DropDownContent>
                        <DropDownContent
                          onClick={() => {
                            setStatusValue("Past");
                            setFieldValue("status", "Past");
                            setStatusDropDownOpen(false);
                          }}>
                          Past
                        </DropDownContent>
                      </DropDownContentContainer>
                    )}
                  </DropDownMainContainer>
                  <ErrorMessageText>
                    <ErrorMessage name="status" />
                  </ErrorMessageText>
                </InputFieldMainWrapper>
                <InputFieldMainWrapper>
                  <InputLabel>Notes</InputLabel>
                  <InputFieldWrapper>
                    <InputField type="text" placeholder="Notes" name="notes" />
                  </InputFieldWrapper>
                  <ErrorMessageText>
                    <ErrorMessage name="notes" />
                  </ErrorMessageText>
                </InputFieldMainWrapper>
                <ButtonWrapper>
                  <Button
                    type="button"
                    text="CANCEL"
                    bgColor="#E02D30"
                    onClick={() => {
                      modalOpen(false);
                    }}
                  />
                  <Button
                    type="submit"
                    text={isEditable ? "EDIT" : "ADD"}
                    isLoading={isLoading || editClientLoading}
                  />
                </ButtonWrapper>
              </Form>
            );
          }}
        </Formik>
      </CustomModal>
    </div>
  );
};

export default AddClient;
