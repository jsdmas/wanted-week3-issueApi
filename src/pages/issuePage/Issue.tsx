import Header from '@/components/Header/Header';
import Layout from '@/components/Layout';
import { API_URL } from '@/constants/apiUrl';
import { DetailDataProvider } from '@/contexts/DetailData';

import SetDetailDataField from './SetDetailDataField';

function IssuePage() {
  return (
    <Layout header={<Header owner={API_URL.organization} repo={API_URL.repository} />}>
      <DetailDataProvider>
        <SetDetailDataField />
      </DetailDataProvider>
    </Layout>
  );
}

export default IssuePage;
