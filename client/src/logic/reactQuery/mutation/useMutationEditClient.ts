import { apiEndPoints } from "../../../utils/apiUrl";
import { useMutation, useQueryClient } from "react-query";
import { axiosInstance } from "../../../utils/axiosIntercepter";

const editClient = (options: any) => {
  const url = apiEndPoints?.updateClient;
  return axiosInstance.put(url, options);
};

export const useEditClient = () => {
  const queryClient = useQueryClient();
  return useMutation(editClient, {
    onSuccess: (_data) => {
      queryClient.invalidateQueries("getAllClient");
    },
  });
};
