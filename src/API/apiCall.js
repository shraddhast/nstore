import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    let expiresAt = localStorage.getItem("expiresAt");
    if (expiresAt) {
      const now = new Date();
      expiresAt = new Date(expiresAt);
      if (now > expiresAt) {
        localStorage.clear();
        window.location.href = "/";
      }
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const buildHeader = (headerParams) => {
  const accessToken = localStorage.getItem("accessToken");
  const header = {
    Accept: "application/json",
    "mintgenie-client-type": "web",
    Authorization: `Bearer ${accessToken}`,
    ...headerParams,
    // 'Content-Type': 'application/json',
    // 'Cache-Control': 'no-cache'
  };

  return header;
};

export const request = (
  onResponse,
  featureURL,
  data,
  params = {},
  type,
  headerParams
) => {
  const callApi = axios({
    url: featureURL,
    method: type,
    data: data,
    params: params,
    headers: buildHeader(headerParams),
  });

  if (!onResponse) return callApi;

  callApi
    .then((response) => {
      if (
        Array.isArray(response) &&
        response.every((arr) => arr.status === 200)
      ) {
        onResponse.success(response);
      } else if (response.status !== 200 && response.status !== 201) {
        onResponse.error(response);
      } else {
        onResponse.success(response.data);
      }
    })
    .catch((error) => {
      onResponse.error(error?.response?.data);
      if (error.response) {
        console.log("Error Response", error);
      }
    });
};
