import {
  IntegrationErrorsEnum,
  networkErrorStore,
} from '@infra/stores/network-error';
import axios from 'axios';

const http = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

http.interceptors.response.use(
  (value) => {
    return value;
  },
  (error) => {
    if (error.message === IntegrationErrorsEnum.NETWORK_ERROR) {
      networkErrorStore
        .getState()
        .setError(IntegrationErrorsEnum.NETWORK_ERROR);
    }

    console.log({ error: error.message });

    return Promise.reject(error);
  }
);

export default http;
