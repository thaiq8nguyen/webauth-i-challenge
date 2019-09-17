import axios from "axios";

const auth = JSON.parse(localStorage.getItem("auth") || {});

const token = auth.token;

const client = axios.create({
  baseURL: "/api"
});

const authClient = axios.create({
  baseURL: "/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  }
});

export { client, authClient };
