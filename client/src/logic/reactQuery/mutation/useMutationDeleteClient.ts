import { apiEndPoints } from "../../../utils/apiUrl";
import { useMutation, useQueryClient } from "react-query";
import { axiosInstance } from "../../../utils/axiosIntercepter";

const deleteClient = (option: any) => {
  const url = `${apiEndPoints?.deleteClient}/${option?.id}`;
  return axiosInstance.delete(url);
};

export const useDeleteClient = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteClient, {
    onSuccess: (_data) => {
      queryClient.invalidateQueries("getAllClient");
    },
  });
};
