import axios from "axios";
import store from "../store/index.js";
import { getAuthFromCookie } from "../utils/cookies.js";

// basic config for axios
const APP_URL =
  "https://saqw696o5l.execute-api.ap-northeast-2.amazonaws.com/vtn-usedphone/";

// instance & interceptor
function create(url, options) {
  const instance = axios.create(
    Object.assign(
      {
        baseURL: url,
      },
      options
    )
  );
  return instance;
}

function createWithAuth(url, options) {
  const instance = axios.create(
    Object.assign(
      {
        baseURL: url,
      },
      options
    )
  );
  instance.interceptors.request.use(
    config => {
      config.headers.Authorization =
        store.getters["userToken"] || getAuthFromCookie();
      config.headers["Content-Type"] = 'multipart/form-data';
      return config;
    },
    error => {
      return Promise.reject(error.response);
    }
  );
  instance.interceptors.response.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error.response);
    }
  );
  return instance;
}

const auth = create(APP_URL);
const vtn = createWithAuth(APP_URL);

// users
function loginUser(data) {
  try {
    return auth.post("login", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return error;
  }
}

function manageUsedPhoneData(data) {
  try {
    return auth.post("manageusedphonedata", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return error;
  }
}

function uploadphonedata(data) {
  try {
    return vtn.post("uploadphonedata", data);
  } catch (error) {
    console.log(error);
    return error;
  }
}

export {
  loginUser,
  manageUsedPhoneData,
  uploadphonedata
};
