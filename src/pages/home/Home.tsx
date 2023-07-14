import Header from 'src/components/Header/Header';
import Layout from 'src/components/Layout';

import { API_URL } from '@/constants/apiUrl';
import { DataProvider } from '@/contexts/Data';

import IssueField from './IssueField';
import Observer from './Observer';

function Home() {
  return (
    <Layout header={<Header owner={API_URL.organization} repo={API_URL.repository} />}>
      <DataProvider>
        <IssueField />
        <Observer />
      </DataProvider>
    </Layout>
  );
}
export default Home;
