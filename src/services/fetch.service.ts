import axios, { AxiosError } from "axios";

const baseURL = "https://jsonplaceholder.typicode.com"; // SHOULD BE IN ENV IN REAL CASES

const fetcher = axios.create({ baseURL });

export enum KNOWN_ERRORS {
  ERR_NETWORK = "ERR_NETWORK",
}

fetcher.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default fetcher;
