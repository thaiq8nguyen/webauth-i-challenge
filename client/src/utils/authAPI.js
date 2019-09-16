import axios from "axios";

const client = axios.create({
  baseURL: "/api"
});

export const auth = () => {
  return client;
};
