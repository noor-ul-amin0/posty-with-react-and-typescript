
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";
import { Owner } from "../types/Types";

type Users = {
  data: Array<Owner>;
  total: number;
  page: number;
  limit: number;
};
const useUsers = (page: number, limit: number) =>
  useQuery<Users,Error>(["users",page], () => api.get(`/user?limit=${limit}&page=${page}`).then((res: AxiosResponse) =>res.data),{ keepPreviousData : true });


export default useUsers;
