import axios, { type AxiosResponse } from 'axios';

import { API_BASE_URL } from '@/features/api/constants';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
});

client.interceptors.request.use((config) => {
  if (config.headers['X-Bypass-Authorization']) {
    return config;
  }

  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

const api = {
  post: async <T, P>(
    requiredToken: boolean,
    url: string,
    data: P,
  ): Promise<AxiosResponse<T>> => {
    return client.post<T>(url, data, {
      headers: {
        'X-Bypass-Authorization': !requiredToken,
      },
    });
  },

  get: async <T>(
    requiredToken: boolean,
    url: string,
  ): Promise<AxiosResponse<T>> => {
    return client.get<T>(url, {
      headers: {
        'X-Bypass-Authorization': !requiredToken,
      },
    });
  },

  patch: async <T, P>(
    requiredToken: boolean,
    url: string,
    data: P,
  ): Promise<AxiosResponse<T>> => {
    return client.patch<T>(url, data, {
      headers: {
        'X-Bypass-Authorization': !requiredToken,
      },
    });
  },

  delete: async <T>(
    requiredToken: boolean,
    url: string,
  ): Promise<AxiosResponse<T>> => {
    return client.delete<T>(url, {
      headers: {
        'X-Bypass-Authorization': !requiredToken,
      },
    });
  },
};

export { api };
