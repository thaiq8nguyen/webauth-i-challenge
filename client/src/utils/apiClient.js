import axios from "axios";

let token = "";

if (localStorage.getItem("auth")) {
  const auth = JSON.parse(localStorage.getItem("auth"));

  token = auth.token;
}

const client = axios.create({
  baseURL: "/auth"
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
