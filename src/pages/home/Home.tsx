import { useEffect } from 'react';
import { getGithubIssue } from 'src/apis/githubIssue';

function Home() {
  useEffect(() => {
    getGithubIssue();
  }, []);

  return <div>Home</div>;
}
export default Home;
