import { useEffect, useState } from 'react';
import { getGithubIssue } from 'src/apis/githubIssue';
import Header from 'src/components/Header/Header';
import Issue from 'src/components/Issue';
import IssueList from 'src/components/IssueList';
import Layout from 'src/components/Layout';
import { Iissue } from 'src/types/dataType';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getGithubIssue().then((response) => setData(response));
  }, [setData]);

  return (
    <Layout header={<Header owner="facebook" repo="react" />}>
      <IssueList items={data}>{(item: Iissue) => <Issue key={item.id} {...item} />}</IssueList>
    </Layout>
  );
}
export default Home;
