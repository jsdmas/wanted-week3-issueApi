import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getGithubIssue } from 'src/apis/githubIssue';
import Header from 'src/components/Header/Header';
import Issue from 'src/components/Issue';
import IssueList from 'src/components/IssueList';
import Layout from 'src/components/Layout';
import { Iissue } from 'src/types/dataType';

import { RootState } from '@/store';

function Home() {
  const [data, setData] = useState([]);

  const observerDiv = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(4);
  const state = useSelector((store: RootState) => store.page);

  console.log(state);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 타겟 요소와 루트 요소가 교차할시
          if (entry.isIntersecting) {
            getGithubIssue(page).then((response) => setData(response));
            setPage((prev) => prev + 4);
          }
        });
      },
      { threshold: 0.5 },
    );

    if (observerDiv.current) observer.observe(observerDiv.current);
  }, [page]);

  // redux로 page number, issue data 관리
  // contextAPi로 data넘겨주기
  // throttle 적용 필요

  return (
    <Layout header={<Header owner="facebook" repo="react" />}>
      <IssueList items={data}>{(item: Iissue) => <Issue key={item.id} {...item} />}</IssueList>
      <div style={{ height: '20vh' }} ref={observerDiv} />
    </Layout>
  );
}
export default Home;
