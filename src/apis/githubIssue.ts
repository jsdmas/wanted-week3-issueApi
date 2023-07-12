import axios from 'axios';

const BASE_URL = 'https://api.github.com/repos/';

export const getGithubIssue = async () => {
  // curl -L \
  // -H "Authorization: Bearer process.env.REACT_APP_GITHUB_TOKEN"\
  // -H "X-GitHub-Api-Version: 2022-11-28" \
  // https://api.github.com/orgs/ORG/issues

  // curl -L \
  // -H "Accept: application/vnd.github+json" \
  // -H "Authorization: Bearer <YOUR-TOKEN>"\
  // -H "X-GitHub-Api-Version: 2022-11-28" \
  // https://api.github.com/repos/OWNER/REPO/issues
  // ?sort=comment?state=open
  const { data } = await axios.get(`${BASE_URL}facebook/react/issues?sort=comments&state=open`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return data;
};
