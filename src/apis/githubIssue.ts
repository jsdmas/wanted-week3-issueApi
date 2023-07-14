import axios from 'axios';

import { PageState } from '@/store/issuePage';

const BASE_URL = 'https://api.github.com/repos/';

export const getGithubIssue = async (pageNumber: PageState) => {
  // https://api.github.com/repos/OWNER/REPO/issues

  const queryObject = {
    sort: 'comments',
    state: 'open',
    per_page: '8', // 가져올 페이지 개수 기본값 : 30
    page: String(pageNumber.page), // 가져올 해당 페이지 넘버
  };

  const queryString = new URLSearchParams(queryObject).toString();
  const { data } = await axios.get(`${BASE_URL}facebook/react/issues?${queryString}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return data;
};

export const getDetailIssue = async (issueNumber?: string) => {
  const { data } = await axios.get(`${BASE_URL}facebook/react/issues/${issueNumber}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return data;
};
