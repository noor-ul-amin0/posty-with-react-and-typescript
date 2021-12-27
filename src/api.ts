import axios from "axios";

export const api = axios.create({
  headers: {
    "app-id": "616d0a3c4c077651689d16bd",
  },
  baseURL: "https://dummyapi.io/data/v1",
});

// export const getPosts = api.get("/post").then((res) => res);
// export const getPostsByUser = api.get("/user/:id/post").then((res) => res.data);
// export const getUsers = api.get("/user").then((res) => res.data);
