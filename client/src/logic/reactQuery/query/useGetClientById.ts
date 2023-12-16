import { useQuery } from "react-query";
import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosIntercepter";

const getClientById = async (id: string | undefined) => {
  const { data } = await axiosInstance.get(
    `${apiEndPoints?.getClientById}/${id}`
  );
  return data;
};

export const useGetClientById = (id: string | undefined) => {
  const { data, isError, isFetching, isLoading } = useQuery(
    ["getClientById", id],
    () => getClientById(id),
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, isError, isFetching, isLoading };
};
