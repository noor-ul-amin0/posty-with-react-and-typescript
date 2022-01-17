
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";

const useTags = () =>
  useQuery<Array<string>,Error>("tags", () => api.get(`/tag`).then((res: AxiosResponse) =>res.data));


export default useTags;
