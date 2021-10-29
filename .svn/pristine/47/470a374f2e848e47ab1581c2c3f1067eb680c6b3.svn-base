import {
  METHOD,
  PATH,
  PARAM
} from "./config";
import {
  request
} from "./core";

const APIClient = {
  index(method, url, params) {
    return request(method, url, params);
  },
  details(params) {
    return request(METHOD.GET, PATH.details, params);
  },
  getParam(param) {
    return request(METHOD.POST, PATH.getParam, param)
  },
};
export default APIClient;