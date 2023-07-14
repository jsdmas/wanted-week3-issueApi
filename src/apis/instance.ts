import axios from 'axios';

const BASE_URL = 'https://api.github.com/repos/';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);
