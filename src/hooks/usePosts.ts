import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";
import { Post } from "../types/Types";

type Posts = {
  data: Array<Post>;
  total: number;
  page: number;
  limit: number;
};

const usePosts = (page: number, limit: number) =>
  useQuery<Posts, Error>(["posts",page], () =>
    api
      .get(`/post?limit=${limit}&page=${page}`)
      .then((res: AxiosResponse) => res.data),{ keepPreviousData : true }
  );

export default usePosts;
