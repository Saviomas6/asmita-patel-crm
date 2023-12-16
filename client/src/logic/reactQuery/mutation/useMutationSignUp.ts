import { useMutation } from "react-query";
import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosIntercepter";
interface I_RegisterProps {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signUpForm = (options: I_RegisterProps) => {
  const url = apiEndPoints?.signUp;
  return axiosInstance.post(url, options);
};

export const useSignUpFormMutation = () => {
  return useMutation(signUpForm);
};
