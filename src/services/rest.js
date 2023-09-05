import axios from "axios";

const httpClient = (url) =>
  axios.create({
    baseURL: url,
    timeout: 20000,
  });

export default httpClient;
