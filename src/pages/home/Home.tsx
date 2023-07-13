import Header from 'src/components/Header/Header';
import Layout from 'src/components/Layout';

import { DataProvider } from '@/contexts/Data';

import IssueField from './IssueField';
import Observer from './Observer';

function Home() {
  return (
    <Layout header={<Header owner="facebook" repo="react" />}>
      <DataProvider>
        <IssueField />
        <Observer />
      </DataProvider>
    </Layout>
  );
}
export default Home;
