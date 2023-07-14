import { API_URL } from '@/constants/apiUrl';
import { PageState } from '@/store/issuePage';

import { instance } from './instance';

export const getGithubIssue = async (pageNumber: PageState) => {
  const queryObject = {
    sort: 'comments',
    state: 'open',
    per_page: '8',
    page: String(pageNumber.page),
  };

  const queryString = new URLSearchParams(queryObject).toString();
  const { data } = await instance.get(
    `${API_URL.organization}/${API_URL.repository}/issues?${queryString}`,
  );

  return data;
};

export const getDetailIssue = async (issueNumber?: string) => {
  const { data } = await instance.get(
    `${API_URL.organization}/${API_URL.repository}/issues/${issueNumber}`,
  );

  return data;
};
