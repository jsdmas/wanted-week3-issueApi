import { useEffect } from 'react';
import { getGithubIssue } from 'src/apis/githubIssue';
import Header from 'src/components/Header/Header';
import Layout from 'src/components/Layout';

function Home() {
  useEffect(() => {
    getGithubIssue();
  }, []);

  return <Layout header={<Header owner="facebook" repo="react" />}></Layout>;
}
export default Home;
