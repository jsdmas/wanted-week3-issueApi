import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGithubIssue } from '@/apis/githubIssue';
import { RootState } from '@/store';
import { increase } from '@/store/issuePage';
import { IissueData } from '@/types/dataType';

function useInfinitiScroll(setDataState: React.Dispatch<React.SetStateAction<IissueData[]>>) {
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
              setDataState((prevData) => [...prevData, ...data]);
              dispatch(increase());
            });
          }
        });
      },
      { threshold: 0.5 },
    ),
  );

  const observe = (element: HTMLElement) => {
    observer.current.observe(element);
  };

  return observe;
}
export default useInfinitiScroll;
