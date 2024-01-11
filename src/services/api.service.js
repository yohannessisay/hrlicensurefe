import axios from "axios";
import router from "../router";
axios.interceptors.response.use(
  function(response) {
    return response;
  },

  async error => { 
    if (error.request.status == 403) {
      if (
        router.currentRoute.value.name != "Home" ||
        router.currentRoute.value.name != "Admin"
      ) {
        localStorage.clear();
        location.reload();
      }
    }
  }
);
const ApiService = {
  setHeader(key, value) {
    axios.defaults.headers.common[key] = value;
  },

  removeHeader(key) {
    axios.defaults.headers.common[key] = String(null);
  },

  get(resource, config, needsAuth = true) {
    return axios.get(resource, {
      ...config,
      headers: authHeaders(needsAuth)
    });
  },

  async getFile(resource) {
    return axios.get(resource, {
      headers: authHeaders(true),
      responseType: "blob",
      timeout: 30000
    });
  },

  getPDFFile(resource) {
    return axios.get(resource, {
      responseType: "arraybuffer",
      timeout: 30000,
      headers: authHeaders(true)
    });
  },

  post(resource, data, needsAuth = true) {
    return axios.post(resource, data, {
      headers: authHeaders(needsAuth)
    });
  },

  postFile(resource, data, needsAuth = true) {
    return axios.post(resource, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...authHeaders(needsAuth)
      }
    });
  },

  put(resource, data, needsAuth = true) {
    return axios.put(resource, data, {
      headers: authHeaders(needsAuth)
    });
  },

  patch(resource, data) {
    return axios.patch(resource, data, {
      headers: authHeaders(true)
    });
  },

  delete(resource) {
    return axios.delete(resource, {
      headers: authHeaders(true)
    });
  }
};

function authHeaders(needsAuth) {
  const token = localStorage.getItem("token");
  return needsAuth
    ? {
        Authorization: token ? `Bearer ${token}` : ""
      }
    : {};
}

export default ApiService;
