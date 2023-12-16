import { useMutation, useQueryClient } from "react-query";
import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosIntercepter";

interface I_CreateClientProps {
  name: string;
  phoneNo: string;
  address: string;
  company: string;
  status: string;
  notes: string;
}

const createClient = (options: I_CreateClientProps) => {
  const url = apiEndPoints?.createClient;
  return axiosInstance.post(url, options);
};

export const useCreateClientMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(createClient, {
    onSuccess: (_data) => {
      queryClient.invalidateQueries("getAllClient");
    },
  });
};
