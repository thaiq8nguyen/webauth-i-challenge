import axios from "axios";

const client = axios.create({
  baseURL: "/"
});

export { client };
