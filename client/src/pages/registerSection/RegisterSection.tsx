import { useNavigate } from "react-router-dom";
import CustomModal from "../../components/customModal/CustomModal";
import { Paths } from "../../routes/path";
import {
  ButtonWrapper,
  IconWrapper,
  InputField,
  InputFieldContainer,
  InputLabel,
  InputMainContainer,
} from "../../styles/sharedStyle";
import { useState } from "react";
import * as Yup from "yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Button from "../../components/button/Button";
import { Form, Formik } from "formik";
import { useSignUpFormMutation } from "../../logic/reactQuery/mutation/useMutationSignUp";
import ErrorModal from "../../components/errorModal/ErrorModal";
import SuccessModal from "../../components/successModal/SuccessModal";

interface I_RegisterProps {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().trim().required("Name is required"),
  username: Yup.string().trim().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});

const RegisterSection = () => {
  const navigate = useNavigate();
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const [isConfirmPasswordShow, setIsConfirmPasswordShow] =
    useState<boolean>(false);
  const [isSignUpError, setIsSignUpError] = useState<boolean>(false);
  const [isSignUpSuccessOpen, setSignUpSuccessOpen] = useState<boolean>(false);
  const {
    mutateAsync: createSignUpForm,
    error,
    isLoading,
    data,
  }: any = useSignUpFormMutation();
  const initialValue: I_RegisterProps = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleUserRegister = async (
    values: I_RegisterProps,
    { resetForm }: any
  ) => {
    try {
      const result = await createSignUpForm(values);
      if (result?.data?.message) {
        setSignUpSuccessOpen(true);
        resetForm();
      }

      console.log({ error, isLoading, data });
    } catch (e) {
      setIsSignUpError(true);
      resetForm();
      console.log(e);
    }
  };

  return (
    <div>
      <CustomModal
        heading="REGISTER"
        bgColor="#181a2a"
        onClick={() => {
          navigate(Paths.home);
        }}>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={handleUserRegister}>
          <Form>
            <div>
              <InputMainContainer>
                <InputLabel>Name</InputLabel>
                <InputFieldContainer>
                  <InputField
                    type="text"
                    placeholder="Name"
                    name="name"
                    autocomplete="off"
                  />
                </InputFieldContainer>
              </InputMainContainer>
              <InputMainContainer>
                <InputLabel>Username</InputLabel>
                <InputFieldContainer>
                  <InputField
                    type="text"
                    placeholder="Username"
                    name="username"
                    autocomplete="off"
                  />
                </InputFieldContainer>
              </InputMainContainer>
              <InputMainContainer>
                <InputLabel>Email</InputLabel>
                <InputFieldContainer>
                  <InputField type="text" placeholder="Email" name="email" />
                </InputFieldContainer>
              </InputMainContainer>
              <InputMainContainer>
                <InputLabel>Password</InputLabel>
                <InputFieldContainer>
                  <InputField
                    type={isPasswordShow ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    autocomplete="off"
                  />
                  <IconWrapper onClick={() => setIsPasswordShow((pre) => !pre)}>
                    {isPasswordShow ? (
                      <AiFillEye size={25} />
                    ) : (
                      <AiFillEyeInvisible size={25} />
                    )}
                  </IconWrapper>
                </InputFieldContainer>
              </InputMainContainer>
              <InputMainContainer>
                <InputLabel>Confirm Password</InputLabel>
                <InputFieldContainer>
                  <InputField
                    type={isConfirmPasswordShow ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    autocomplete="off"
                  />
                  <IconWrapper
                    onClick={() => setIsConfirmPasswordShow((pre) => !pre)}>
                    {isConfirmPasswordShow ? (
                      <AiFillEye size={25} />
                    ) : (
                      <AiFillEyeInvisible size={25} />
                    )}
                  </IconWrapper>
                </InputFieldContainer>
              </InputMainContainer>
              <ButtonWrapper>
                <Button type="submit" isLoading={isLoading} text="REGISTER" />
              </ButtonWrapper>
            </div>
          </Form>
        </Formik>
      </CustomModal>
      {isSignUpSuccessOpen && (
        <SuccessModal
          heading="Success"
          description="Congratulations, your account has been successfully created"
          onClick={() => navigate(Paths.signIn)}
        />
      )}

      {isSignUpError && (
        <ErrorModal
          onClick={() => {
            setIsSignUpError(false);
          }}
          heading="Error"
          description={error?.response?.data?.message}
        />
      )}
    </div>
  );
};

export default RegisterSection;
