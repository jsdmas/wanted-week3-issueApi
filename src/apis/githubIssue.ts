import axios from 'axios';

const BASE_URL = 'https://api.github.com/repos/';

export const getGithubIssue = async (page: number) => {
  // curl -L \
  // -H "Accept: application/vnd.github+json" \
  // -H "Authorization: Bearer <YOUR-TOKEN>"\
  // -H "X-GitHub-Api-Version: 2022-11-28" \
  // https://api.github.com/repos/OWNER/REPO/issues
  // ?sort=comment&state=open&per_page=60

  const queryObject = {
    sort: 'comments',
    state: 'open',
    per_page: String(page),
  };
  const queryString = new URLSearchParams(queryObject).toString();

  console.log(queryString);
  const { data } = await axios.get(`${BASE_URL}facebook/react/issues?${queryString}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  console.log(data);

  return data;
};
