import Header from '@/components/Header/Header';
import Layout from '@/components/Layout';
import { DetailDataProvider } from '@/contexts/DetailData';

import SetDetailDataField from './SetDetailDataField';

function IssuePage() {
  return (
    <Layout header={<Header owner="facebook" repo="react" />}>
      <DetailDataProvider>
        <SetDetailDataField />
      </DetailDataProvider>
    </Layout>
  );
}

export default IssuePage;
