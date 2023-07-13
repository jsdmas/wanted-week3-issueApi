import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGithubIssue } from '@/apis/githubIssue';
import { RootState } from '@/store';
import { increase } from '@/store/issuePage';
import { Iissue } from '@/types/dataType';

type ObserveType = (element: HTMLElement) => void;

function useInfinitiScroll() {
  // data는 context API로 뺴서 사용해야함.
  const [data, setData] = useState<Iissue[]>([]);

  const pageState = useSelector((store: RootState) => store.page);
  const dispatch = useDispatch();

  const pageStateRef = useRef(pageState);

  pageStateRef.current = pageState;

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            getGithubIssue(pageStateRef.current).then((data) => {
              // 광고 추가해서 가공 후 넣어주기
              setData((prevData) => [...prevData, ...data]);
              dispatch(increase());
            });
          }
        });
      },
      { threshold: 0.5 },
    ),
  );

  const observe: ObserveType = (element: HTMLElement) => {
    observer.current.observe(element);
  };

  return { observe, data };
}
export default useInfinitiScroll;
