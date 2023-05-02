import axios from "axios";
import router from "../router";
axios.interceptors.response.use(
  function(response) {
    return response;
  },
  
  async (error) => {
    if (error.request) {
      localStorage.clear();
      router.push("/landing");
      return Promise.reject(error);
    }
  }
);
const ApiService = {
  // Stores the 401 interceptor position so that it can be later ejected when needed
  _401interceptor: null,
  _403interceptor: null,
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
    this.mount403Interceptor();
    this.mount401Interceptor();
  },

  mount401Interceptor() {
    this._401interceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.request.status === 401) {
          /**
           * If there is refresh token implemented handle
           * refresh token
           * else sign the user out
           */
        }
      }
    );
  },
  mount403Interceptor() {
    this._403interceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.request.status === 40) {
          /**
           * If there is refresh token implemented handle
           * refresh token
           * else sign the user out
           */
        }
      }
    );
  },

  unmount401Interceptor() {
    // Eject the interceptor
    axios.interceptors.response.eject(this._401interceptor);
  },

  setHeader(key, value) {
    axios.defaults.headers.common[key] = value;
  },

  removeHeader(key) {
    axios.defaults.headers.common[key] = String(null);
  },

  get(resource, config, needsAuth = true) {
    return axios.get(resource, {
      ...config,
      headers: authHeaders(needsAuth),
    });
  },

  async getFile(resource) {
    return axios.get(resource, {
      headers: authHeaders(true),
      responseType: "blob",
      timeout: 30000,
    });
  },

  getPDFFile(resource) {
    return axios.get(resource, {
      responseType: "arraybuffer",
      timeout: 30000,
      headers: authHeaders(true),
    });
  },

  post(resource, data, needsAuth = true) {
    return axios.post(resource, data, {
      headers: authHeaders(needsAuth),
    });
  },

  postFile(resource, data, needsAuth = true) {
    return axios.post(resource, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...authHeaders(needsAuth),
      },
    });
  },

  put(resource, data, needsAuth = true) {
    return axios.put(resource, data, {
      headers: authHeaders(needsAuth),
    });
  },

  patch(resource, data) {
    return axios.patch(resource, data, {
      headers: authHeaders(true),
    });
  },

  delete(resource) {
    return axios.delete(resource, {
      headers: authHeaders(true),
    });
  },
};

function authHeaders(needsAuth) {
  const token = localStorage.getItem("token");
  return needsAuth
    ? {
        Authorization: token ? `Bearer ${token}` : "",
      }
    : {};
}

export default ApiService;
