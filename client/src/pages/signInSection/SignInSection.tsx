import { useState } from "react";
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
import * as Yup from "yup";
import Button from "../../components/button/Button";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Form, Formik } from "formik";
import { useSignInFormMutation } from "../../logic/reactQuery/mutation/useMutationSignIn";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../logic/redux/action/action";
import { decodeToken } from "../../utils/utils";
import ErrorModal from "../../components/errorModal/ErrorModal";

interface I_Props {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol"
    )
    .required("Password is required"),
});

const SignInSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const [isSignInError, setIsSignInError] = useState<boolean>(false);
  const {
    mutateAsync: createSignInForm,
    isLoading,
    error,
  }: any = useSignInFormMutation();

  const initialValues: I_Props = {
    email: "",
    password: "",
  };

  const handleSubmitForm = async (values: any, { resetForm }: any) => {
    try {
      const result = await createSignInForm(values);
      if (result?.data?.message) {
        localStorage.setItem("token", result?.data?.token);
        const decoded: any = decodeToken(result?.data?.token);
        localStorage.setItem("expirationTime", decoded?.expirationTime);
        dispatch(setLoggedIn(true));
        navigate(Paths.home);
      }
    } catch (e) {
      console.log(e);
      setIsSignInError(true);
      resetForm();
    }
  };

  return (
    <div>
      <CustomModal
        heading="SIGN IN"
        bgColor="#181a2a"
        onClick={() => {
          navigate(Paths.home);
        }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmitForm}>
          <Form>
            <div>
              <InputMainContainer>
                <InputLabel>Email</InputLabel>
                <InputFieldContainer>
                  <InputField
                    type="text"
                    placeholder="Email"
                    name="email"
                    autocomplete="off"
                  />
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
              <ButtonWrapper>
                <Button type="submit" isLoading={isLoading} text="SIGN IN" />
              </ButtonWrapper>
            </div>
          </Form>
        </Formik>
      </CustomModal>
      {isSignInError && (
        <ErrorModal
          onClick={() => {
            setIsSignInError(false);
          }}
          heading="Error"
          description={error?.response?.data?.message}
        />
      )}
    </div>
  );
};

export default SignInSection;
