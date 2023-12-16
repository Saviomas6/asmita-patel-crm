import { useQuery } from "react-query";
import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosIntercepter";

const getAllClient = async (search: string, filter: string) => {
  const { data } = await axiosInstance.get(
    `${apiEndPoints?.getAllClient}?search=${search}&dropdownFilter=${filter}`
  );
  return data;
};

export const useGetAllClient = (search: string, filter: string) => {
  const { data, isError, isFetching, isLoading } = useQuery(
    ["getAllClient", search, filter],
    () => getAllClient(search, filter),
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, isError, isFetching, isLoading };
};
