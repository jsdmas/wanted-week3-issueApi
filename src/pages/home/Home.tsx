import { useEffect, useState } from 'react';
import { getGithubIssue } from 'src/apis/githubIssue';
import Header from 'src/components/Header/Header';
import IssueList from 'src/components/IssueList';
import Layout from 'src/components/Layout';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async () => setData(await getGithubIssue());
  }, [setData]);

  return (
    <Layout header={<Header owner="facebook" repo="react" />}>
      <IssueList items={data}></IssueList>
    </Layout>
  );
}
export default Home;
