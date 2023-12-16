import { useQuery } from "react-query";
import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosIntercepter";

const getUserDetail = async () => {
  const { data } = await axiosInstance.get(`${apiEndPoints?.userDetail}`);
  return data;
};

export const useGetUserDetail = () => {
  const { data, isError, isFetching, isLoading } = useQuery(
    "userDetail",
    getUserDetail,
    {
      refetchOnWindowFocus: false,
      retry: 2,
    }
  );
  return { data, isError, isFetching, isLoading };
};
