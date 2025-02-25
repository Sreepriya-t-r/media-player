import axios from "axios";
import baseURL from "./baseURl";

const commonAPI = async (httpMethod, endpoint, requestBody) => {
  let requestConfig = {
    method: httpMethod,
    url: baseURL + endpoint,
    data: requestBody,
  };
  return await axios(requestConfig)
    .then((res) => {
      return res; 
    })
    .catch((error) => {
      return error;
    });
};

export default commonAPI
