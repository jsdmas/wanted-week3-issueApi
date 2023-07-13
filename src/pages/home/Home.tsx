import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'src/components/Header/Header';
import Issue from 'src/components/Issue';
import IssueList from 'src/components/IssueList';
import Layout from 'src/components/Layout';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import { RootState } from 'src/store';
import { increase } from 'src/store/issuePage';
import { Iissue } from 'src/types/dataType';

import { getGithubIssue } from '@/apis/githubIssue';

function Home() {
  const [data, setData] = useState<Iissue[]>([]);

  const state = useSelector((store: RootState) => store.page);
  const dispatch = useDispatch();
  const stateRef = useRef(state);

  stateRef.current = state;

  const observerDiv = useRef<HTMLDivElement>(null);
  const observe = useIntersectionObserver(() => {
    getGithubIssue(stateRef.current).then((data) => {
      // 광고 추가해서 가공 후 넣어주기
      setData((prevData) => [...prevData, ...data]);
      dispatch(increase());
    });
  });

  useEffect(() => {
    if (observerDiv.current) observe(observerDiv.current);
  }, [observe]);

  return (
    <Layout header={<Header owner="facebook" repo="react" />}>
      <IssueList items={data}>{(item: Iissue) => <Issue key={item.id} {...item} />}</IssueList>
      <div style={{ height: '5vh', width: '100%' }} ref={observerDiv} />
    </Layout>
  );
}
export default Home;
