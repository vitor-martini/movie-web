import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.response.use(
  response => response,
  error => {
    const { response } = error;
    if(response.status === 401) {
      localStorage.removeItem("@movies:token");
      localStorage.removeItem("@movies:user");
      api.defaults.headers.authorization = null;
      window.location.reload();
    }

    return Promise.reject(error);
  }
);