import { API_CONFIG, API_URL } from '@/constants/apiUrlConfig';
import { PageState } from '@/store/issuePage';

import { instance } from './instance';

export const getGithubIssue = async (pageNumber: PageState) => {
  const queryObject = {
    sort: API_CONFIG.sort,
    state: API_CONFIG.state,
    per_page: API_CONFIG.per_page,
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
