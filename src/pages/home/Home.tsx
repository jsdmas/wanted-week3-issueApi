import { useEffect, useRef } from 'react';
import Header from 'src/components/Header/Header';
import Issue from 'src/components/Issue';
import IssueList from 'src/components/IssueList';
import Layout from 'src/components/Layout';
import { Iissue } from 'src/types/dataType';

import useInfinitiScroll from '@/hooks/useInfinitiScroll';

function Home() {
  const observerDiv = useRef<HTMLDivElement>(null);

  // 데이터 분리 필요
  const { observe, data } = useInfinitiScroll();

  useEffect(() => {
    if (observerDiv.current) observe(observerDiv?.current);
  }, []);

  return (
    <Layout header={<Header owner="facebook" repo="react" />}>
      <IssueList items={data}>{(item: Iissue) => <Issue key={item.id} {...item} />}</IssueList>
      <div style={{ height: '5vh', width: '100%' }} ref={observerDiv} />
    </Layout>
  );
}
export default Home;
